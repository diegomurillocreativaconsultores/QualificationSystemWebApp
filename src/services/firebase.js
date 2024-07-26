import { db } from "@/firebase";
import { getDoc, doc } from "firebase/firestore";

export const getDocument = async (collection, documentName, setData) => {
    const docRef = doc(db, collection, documentName);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        setData(docSnap.data());
    } else {
        console.log('No such document!');
    }
};