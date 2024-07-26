"use client"

import { Stage } from "@/components/home/Stage";
import { FaArrowRightLong } from "react-icons/fa6";
import { Header } from "@/components/interface/Header";
import ProtectedRoute from "@/components/interface/ProtectedRoute";

export default function Home() {
  return (
    <ProtectedRoute>
      <Header />
      <main className="flex flex-col items-center justify-center p-40 space-y-20">
        <h1 className="text-4xl font-semibold text-pink-500">
          Elección de Reina de San Salvador Centro
        </h1>
        <section className="flex items-center justify-center space-x-10">
          <Stage stageName="Fase 1" />
          <FaArrowRightLong size={100} />
          <Stage stageName="Fase 2" isDisable />
        </section>
      </main>
    </ProtectedRoute>
  );
}
