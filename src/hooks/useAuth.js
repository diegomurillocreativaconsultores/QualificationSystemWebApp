import React from 'react';
import { auth } from '@/firebase';
import { onAuthStateChanged } from 'firebase/auth';

const useAuth = () => {
    const [user, setUser] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return { user, loading };
};

export default useAuth;