import { db } from "@/firebase";
import { doc, updateDoc } from "firebase/firestore";

export const updateDocument = async (
    collectionName,
    docId,
    updatedData,
    router,
    setSnackbarState
) => {
    try {
        const docRef = doc(db, collectionName, docId);
        await updateDoc(docRef, updatedData);
        setSnackbarState({
            type: "success",
            state: true,
            message: "¡Datos de candidata actualizados!",
            additionalFunction() {
                router.push("/candidatas");
            }
        });
    } catch (error) {
        console.error("Error updating document: ", error);
    }
};

export default updateDocument;