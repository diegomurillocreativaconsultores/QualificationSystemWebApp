"use client"

import React from "react";
import useAuth from "@/src/hooks/useAuth";
import { useRouter } from "next/navigation";
import { signInWithEmail } from "@/firebase";
import { Snackbar } from "@/components/interface/Snackbar";

function IniciarSesionPage() {
    const router = useRouter();
    const { user } = useAuth();

    const [email, setEmail] = React.useState("");
    const [error, setError] = React.useState(null);
    const [password, setPassword] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [snackbarState, setSnackbarState] = React.useState({});
    const [isPasswordShowed, setPasswordShowed] = React.useState(false);

    React.useEffect(() => {
        if (user) {
            router.push("/");
        }
    }, [user, router]);

    const handleSignIn = async () => {
        setLoading(true);
        setError(null);
        try {
            await signInWithEmail(email, password, setSnackbarState);
        } catch (e) {

        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Snackbar
                snackbar={snackbarState}
                setState={setSnackbarState}
            />
            <main className="w-screen h-screen flex flex-col items-center justify-center">
                <div className="flex flex-col space-y-5">
                    <h1 className="font-bold text-xl text-center">
                        Iniciar Sesion
                    </h1>
                    <h2 className="font-bold text-xl text-center text-pink-500">
                        Beauty Contest Qualification System
                    </h2>
                    <h3 className="font-bold text-xl text-center text-blue-500">
                        Elección de Reina de San Salvador Centro
                    </h3>
                    <div className="flex flex-col space-y-1">
                        <label htmlFor="creativa_email">
                            Ingrese su correo electrónico:
                        </label>
                        <input
                            type="text"
                            value={email}
                            id="creativa_email"
                            name="creativa_email"
                            placeholder="Correo electrónico"
                            onChange={e => setEmail(e.target.value)}
                            className="border-2 border-gray-300 px-3 py-2 rounded"
                        />
                    </div>
                    <div className="flex flex-col space-y-1">
                        <label htmlFor="creativa_password">
                            Ingrese su contraseña:
                        </label>
                        <input
                            value={password}
                            id="creativa_password"
                            placeholder="Contraseña"
                            name="creativa_password"
                            onChange={e => setPassword(e.target.value)}
                            type={isPasswordShowed ? "text" : "password"}
                            className="border-2 border-gray-300 px-3 py-2 rounded"
                        />
                    </div>
                    {(password !== "") &&
                        (<div className="flex space-x-1">
                            <input
                                type="checkbox"
                                checked={isPasswordShowed}
                                id="creativa_isPasswordShowed"
                                name="creativa_isPasswordShowed"
                                onChange={e => setPasswordShowed(e.target.checked)}
                                className="w-5 h-5"
                            />
                            <label htmlFor="creativa_isPasswordShowed">
                                Mostrar contraseña
                            </label>
                        </div>)}
                    <div className="flex w-full">
                        <button
                            onClick={handleSignIn}
                            className="w-full bg-emerald-500 font-semibold text-white px-3 py-2 rounded hover:bg-emerald-400 duration-300 ease-in-out transition-all"
                        >
                            Iniciar sesion
                        </button>
                    </div>
                </div>
            </main>
        </>
    );
}

export default IniciarSesionPage;