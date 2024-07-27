"use client"

import React from "react";
import { db } from "@/firebase";
import { GrPrint } from "react-icons/gr";
import { useRouter } from "next/navigation";
import { getProm } from "@/src/utils/getProm";
import { Header } from "@/components/interface/Header";
import { collection, getDocs } from "firebase/firestore";
import { sortByDistrict } from "@/src/utils/sortByDistrict";
import ProtectedRoute from "@/components/interface/ProtectedRoute";
import { capitalizeAndRemoveHyphens } from "@/src/utils/capitalizeAndRemoveHyphens";

function AdminCandidatasPage() {
    const router = useRouter();

    const [candidatas, setCandidatas] = React.useState([]);

    React.useEffect(() => {
        let role = localStorage.getItem("role");
        if (role !== "admin") {
            router.push("/");
        }
    }, [router]);

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

    const phase = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("stage")) : null;
    const userId = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("id")) : null;

    console.log("candidatas", candidatas);

    return (
        <ProtectedRoute>
            <Header otherComponent={
                <button 
                    onClick={() => window.print()}
                    className="flex items-center justify-center space-x-2 border-2 border-white px-3 py-1 rounded-md bg-bluebeauty text-white duration-300 ease-in-out transition-all hover:bg-white hover:text-bluebeauty"
                >
                    <div>
                        <GrPrint size={25} />
                    </div>
                    <div>
                        <p className="font-semibold">
                            Imprimir
                        </p>
                    </div>
                </button>} />
            <main className="flex flex-col items-center justify-center p-5 space-y-5">
                <section>
                    <h1 className="text-2xl font-semibold text-goldbeauty">
                        Candidatas a Reina de San Salvador Centro
                    </h1>
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
                            .sort((a, b) => getProm(b, phase) - getProm(a, phase))
                            .filter(candidata => candidata?.phase === phase)
                            .map(candidata => (
                                <div
                                    key={candidata?.id}
                                    className="border-2 border-bluebeauty px-3 py-2 grid grid-cols-3 rounded text-sm duration-100 ease-in-out transition-all"
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
                                            {getProm(candidata, phase)}
                                        </p>
                                    </div>
                                </div>
                            ))}
                    </div>
                </section>
            </main>
        </ProtectedRoute>
    );
}

export default AdminCandidatasPage