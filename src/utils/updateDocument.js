import { db } from "@/firebase"; 
import { doc, updateDoc } from "firebase/firestore";

export const updateDocument = async (collectionName, docId, updatedData, setSnackbarState) => {
    try {
        const docRef = doc(db, collectionName, docId);
        await updateDoc(docRef, updatedData);
        setSnackbarState("Document successfully updated!");
    } catch (error) {
        console.error("Error updating document: ", error);
    }
};

export default updateDocument;