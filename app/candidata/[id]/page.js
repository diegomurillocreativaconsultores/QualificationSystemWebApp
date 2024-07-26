"use client"

import React from "react";
import { getDocument } from "@/src/services/firebase";
import { Header } from "@/components/interface/Header";
import { getDataTable } from "@/src/services/firebase";
import { Question } from "@/components/candidata/Question";
import { updateDocument } from "@/src/utils/updateDocument";
import { Snackbar } from "@/components/interface/Snackbar";
import { sortedQuestions } from "@/src/utils/sortedQuestions";
import ProtectedRoute from "@/components/interface/ProtectedRoute";
import { calcularPromedioCalificaciones } from "@/src/utils/calcularPromedioCalificaciones";

function CandidataName({ params: { id: id } }) {
    const [questions, setQuestions] = React.useState([]);
    const [candidateData, setCandidateData] = React.useState([]);
    const [snackbarState, setSnackbarState] = React.useState({});

    React.useEffect(() => {
        if (
            (id !== null) &&
            (id !== undefined)
        ) {
            getDocument("participantes", id, setCandidateData)
        }
    }, [id]);

    React.useEffect(() => {
        const actualPhase = JSON.parse(localStorage.getItem("stage"));
        let sortedAndFilteredQuestion = sortedQuestions(
            questions
                .filter(question => question?.phase === actualPhase)
                .map(question => ({
                    ...question,
                    calificacion: 1
                }))
        );
        setQuestions(sortedAndFilteredQuestion);
    }, [questions?.length]);

    React.useEffect(() => { getDataTable("questions", setQuestions) }, []);

    const onChangeRange = (questionId, stage, order, newCalificacion) => {
        const newQuestions = [...questions];
        newQuestions.map(p => {
            if (
                (p.id === questionId) &&
                (p.order === order) &&
                (p.phase === stage)
            ) {
                p.calificacion = Number(newCalificacion);
            }
        })
        setQuestions(newQuestions);
    };

    ("candidateData", candidateData);

    const onSubmitNewData = () => {
        const phase = JSON.parse(localStorage.getItem("stage"));
        const userId = JSON.parse(localStorage.getItem("id"));
        let newCandidateData = {
            [`scorePhase${phase}U${userId}`]: {
                "idUser": userId,
                "score": calcularPromedioCalificaciones(questions)
            },
        }
        updateDocument("participantes", id, newCandidateData, setSnackbarState)
    }

    return (
        <ProtectedRoute>
            <Snackbar
                snackbar={snackbarState}
                setState={setSnackbarState}
            />
            <Header />
            <main className="flex flex-col items-center justify-center p-10 space-y-5">
                <section className="flex flex-col items-center">
                    <h1 className="text-2xl font-semibold text-goldbeauty">
                        Rubrica de Preguntas a Candidata
                    </h1>
                    <p className="text-xl font-semibold text-bluebeauty">
                        {candidateData?.name} | {candidateData?.code}
                    </p>
                </section>
                <section className="space-y-1">
                    {questions.map(question => (
                        <Question
                            data={question}
                            onChangeRange={onChangeRange}
                        />
                    ))}
                </section>
                <section className="flex w-[34%] justify-end">
                    <button
                        onClick={onSubmitNewData}
                        className="font-semibold text-bluebeauty bg-goldbeauty px-20 py-2 rounded-md duration-300 ease-in-out transition-all hover:bg-goldbeauty"
                    >
                        Publish
                    </button>
                </section>
            </main>
        </ProtectedRoute>
    );
}

export default CandidataName