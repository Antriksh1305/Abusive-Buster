import { addDoc, collection } from "@firebase/firestore";
import { firestore } from "./firebaseConfig";

const postAbusiveData = (original, result) => {
    const ref = collection(firestore, "sentences");

    let data = {
        original: original,
        result: result
    }

    try {
        addDoc(ref, data)
    } catch (err) {
        console.log(err)
    }
}

export default postAbusiveData;
