"use client"

import React from "react";
import useAuth from "@/src/hooks/useAuth";
import { useRouter } from "next/navigation";

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const router = useRouter();

    React.useEffect(() => {
        if (!loading && !user) {
            router.push("/iniciar-sesion");
        }
    }, [user, loading, router]);

    if (loading || !user) {
        return <div>Loading...</div>;
    }

    return children;
};

export default ProtectedRoute;