"use client"

import React from "react";
import useAuth from "@/src/hooks/useAuth";
import { Stage } from "@/components/home/Stage";
import { FaArrowRightLong } from "react-icons/fa6";
import { getDocument } from "@/src/services/firebase";
import { Header } from "@/components/interface/Header";
import { Footer } from "@/components/interface/Footer";
import ProtectedRoute from "@/components/interface/ProtectedRoute";

export default function Home() {
  const { user } = useAuth();

  const [role, setRole] = React.useState("");
  const [actualPhase, setActualPhase] = React.useState(0);

  React.useEffect(() => {
    if (
      (user !== null) &&
      (user !== undefined)
    ) {
      getDocument("users", user?.uid, setRole)
    }
  }, [user]);

  React.useEffect(() => { getDocument("params", "main", setActualPhase) }, []);

  React.useEffect(() => {
    localStorage.setItem("id", role.id)
    localStorage.setItem("role", role.role);
    localStorage.setItem("stage", actualPhase.phase);
  }, [role]);

  const phase = actualPhase.phase;

  return (
    <ProtectedRoute>
      <Header />
      <main className="flex flex-col items-center justify-center p-40 space-y-20">
        <h1 className="text-4xl font-semibold text-goldbeauty">
          Elección de Reina de San Salvador Centro
        </h1>
        <section className="flex items-center justify-center space-x-10">
          <Stage
            stageName="Fase 1"
            isDisable={phase !== 1}
            href={role?.role === "jurado" ? "/candidatas" : "admin-candidatas"}
          />
          <FaArrowRightLong size={100} />
          <Stage
            stageName="Fase 2"
            isDisable={phase !== 2}
            href={role?.role === "jurado" ? "/candidatas" : "admin-candidatas"}
          />
          <FaArrowRightLong size={100} />
          <Stage
            stageName="Fase 3"
            isDisable={phase !== 3}
            href={role?.role === "jurado" ? "/candidatas" : "admin-candidatas"}
          />
        </section>
      </main>
      <Footer />
    </ProtectedRoute>
  );
}
