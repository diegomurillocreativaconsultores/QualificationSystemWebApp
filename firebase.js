import {
    getAuth,
    signOut as _signOut,
    signInWithEmailAndPassword,
    onAuthStateChanged as _onAuthStateChanged,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAM-WGzpX5Qwl1h6l_RRaJqda892R0xTSg",
    authDomain: "jurados-creativa-studios.firebaseapp.com",
    projectId: "jurados-creativa-studios",
    storageBucket: "jurados-creativa-studios.appspot.com",
    messagingSenderId: "1082287878716",
    appId: "1:1082287878716:web:e0959f4e4e9766b01a8939",
    measurementId: "G-0J0F46H7LT"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export { app, auth, db };

export function onAuthStateChanged(cb) {
    return _onAuthStateChanged(auth, cb);
}

export async function signInWithEmail(
    email,
    password,
    setSnackbarState,
) {
    try {
        await signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                setSnackbarState({
                    type: "success",
                    state: true,
                    message: "¡Inicio de sesion exitoso!",
                })
            })
    } catch (error) {
        if (
            (email === "") &&
            (password === "")
        ) {
            setSnackbarState({
                type: "error",
                state: true,
                message: "Todos los campos son requeridos",
            });
        } else if (email === "") {
            setSnackbarState({
                type: "error",
                state: true,
                message: "El correo electrónico esta vacio",
            });
        } else if (password === "") {
            setSnackbarState({
                type: "error",
                state: true,
                message: "La contraseña esta vacia",
            });
        } else {
            setSnackbarState({
                type: "error",
                state: true,
                message: "Las credenciales son invalidas",
            });
        }
    }
}

export async function signOut() {
    try {
        return _signOut(auth);
    } catch (error) {
        console.error("Error signing out", error);
    }
}