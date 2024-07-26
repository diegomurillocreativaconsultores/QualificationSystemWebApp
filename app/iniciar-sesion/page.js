"use client"

import React from "react";

function IniciarSesionPage() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    return (
        <main className="w-screen h-screen flex flex-col items-center justify-center">
            <div className="flex flex-col space-y-5">
                <h1 className="font-bold text-xl text-center">
                    Iniciar Sesion
                </h1>
                <h2 className="font-bold text-xl text-center text-pink-500">
                    Beauty Contest Qualification System
                </h2>
                <h3 className="font-bold text-xl text-center text-pink-500">
                    Elección de Reina de San Salvador Centro
                </h3>
                <div className="flex flex-col">
                    <label htmlFor="creativa_username">
                        Escriba su nombre de usuario:
                    </label>
                    <input
                        type="text"
                        value={username}
                        id="creativa_username"
                        name="creativa_username"
                        placeholder="Nombre de usuario"
                        onChange={e => setUsername(e.target.value)}
                        className="border-2 border-gray-300 px-3 py-2 rounded"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="creativa_password">
                        Escriba su contraseña:
                    </label>
                    <input
                        type="password"
                        value={password}
                        id="creativa_password"
                        placeholder="Contraseña"
                        name="creativa_password"
                        onChange={e => setPassword(e.target.value)}
                        className="border-2 border-gray-300 px-3 py-2 rounded"
                    />
                </div>
                <div className="flex w-full">
                    <button className="w-full bg-emerald-500 font-semibold text-white px-3 py-2 rounded hover:bg-emerald-400 duration-300 ease-in-out transition-all">
                        Iniciar sesion
                    </button>
                </div>
            </div>
        </main>
    );
}

export default IniciarSesionPage;