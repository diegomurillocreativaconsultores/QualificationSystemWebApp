"use client"

import React from "react";
import Link from "next/link";
import { db } from "@/firebase";
import { Header } from "@/components/interface/Header";
import { collection, getDocs } from "firebase/firestore";
import { sortByDistrict } from "@/src/utils/sortByDistrict";
import { Footer } from "@/components/interface/Footer";
import ProtectedRoute from "@/components/interface/ProtectedRoute";
import { capitalizeAndRemoveHyphens } from "@/src/utils/capitalizeAndRemoveHyphens";

function CandidatasPage() {
    const phase = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("stage")) : null;
    const userId = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("id")) : null;

    const [search, setSearch] = React.useState("");
    const [candidatas, setCandidatas] = React.useState([]);

    React.useEffect(() => {
        const fetchDocuments = async () => {
            try {
                const firebaseQuery = await getDocs(collection(db, "participantes"));
                const docs = firebaseQuery.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setCandidatas(sortByDistrict(docs));
            } catch (error) {
                console.error("Error fetching documents: ", error);
            }
        };

        fetchDocuments();
    }, []);

    console.log("candidatas", candidatas);

    return (
        <ProtectedRoute>
            <Header />
            <main className="flex flex-col items-center justify-center p-10 space-y-5">
                <section>
                    <h1 className="text-2xl font-semibold text-goldbeauty">
                        Candidatas a Reina de San Salvador Centro
                    </h1>
                </section>
                <section className="w-[52%]">
                    <input
                        id="searchbar"
                        name="searchbar"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        placeholder="Busca una candidata..."
                        className="border-2 border-gray-300 rounded-full w-full px-3 py-2 placeholder:font-light"
                    />
                </section>
                <section className="space-y-3 w-[52%]">
                    <div className="grid grid-cols-3">
                        <div>
                            <p className="font-semibold ">
                                Candidata
                            </p>
                        </div>
                        <div>
                            <p className="font-semibold text-center">
                                Distrito
                            </p>
                        </div>
                        <div>
                            <p className="font-semibold text-right">
                                Calificacion
                            </p>
                        </div>
                    </div>
                    <div className="space-y-0.5 h-[40rem] overflow-y-auto">
                        {candidatas
                            .filter(candidata => candidata?.phase === phase)
                            .filter(candidata => candidata?.name.toLowerCase().includes(search.toLowerCase()))
                            .map(candidata => (
                                <Link
                                    key={candidata?.id}
                                    href={candidata?.[`scorePhase${phase}U${userId}`]?.score > 0 ? "" : `/candidata/${candidata?.id}`}
                                    className={`
                                        ${candidata?.[`scorePhase${phase}U${userId}`]?.score > 0 ? "cursor-default bg-green-100" : "hover:bg-blue-100"}
                                        border-2 border-bluebeauty px-3 py-2 grid grid-cols-3 rounded text-sm duration-100 ease-in-out transition-all
                                    `}
                                >
                                    <div>
                                        <p>
                                            {candidata?.name}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-center">
                                            {capitalizeAndRemoveHyphens(candidata?.district)}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-right">
                                            {candidata?.[`scorePhase${phase}U${userId}`]?.score > 0 ? candidata?.[`scorePhase${phase}U${userId}`]?.score : 0}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </section>
            </main>
            <Footer />
        </ProtectedRoute>
    );
}

export default CandidatasPage