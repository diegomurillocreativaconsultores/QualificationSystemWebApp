import {
    doc,
    getDoc,
    getDocs,
    collection,
} from "firebase/firestore";
import { db } from "@/firebase";

export const getDocument = async (collection, documentName, setData) => {
    const docRef = doc(db, collection, documentName);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        setData(docSnap.data());
    } else {
        console.error('No such document!');
    }
};

export const getDataTable = (table, setNewData) => {
    const fetchDocuments = async () => {
        try {
            const firebaseQuery = await getDocs(collection(db, table));
            const docs = firebaseQuery.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setNewData(docs);
        } catch (error) {
            console.error("Error fetching documents: ", error);
        }
    };

    fetchDocuments();
}