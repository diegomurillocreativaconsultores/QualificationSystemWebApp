"use client"

import {
    motion,
    AnimatePresence,
} from "framer-motion";
import React from "react";

export const Snackbar = React.memo(({ snackbar, setState }) => {
    const {
        type,
        state,
        message,
        duration = 2000,
        additionalFunction = () => { }
    } = snackbar;
    React.useEffect(() => {
        const timeout = setTimeout(() => {
            setState({
                state: false,
                type: "",
                duration: 0,
                message: "",
                additionalFunction() { },
            });
        }, duration);
        return () => {
            clearTimeout(timeout);
            additionalFunction();
        };
    }, [state, duration]);

    return (
        <AnimatePresence>
            {state &&
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`
                        ${type === "warning" && "bg-yellow-500"}
                        ${type === "error" && "bg-red-500"}
                        ${type === "info" && "bg-bluebeauty"}
                        ${type === "success" && "bg-green-500"}
                        font-semibold px-6 py-3 fixed z-[9999] bottom-5 left-5 bg-opacity-90 text-white text-base rounded-lg
                    `}
                >
                    {message}
                </motion.div>}
        </AnimatePresence>
    );
});

Snackbar.displayName = "Snackbar";