import { addDoc, collection } from "@firebase/firestore";
import { firestore } from "./firebaseConfig";

interface FeedbackData {
    timestamp: Date;
    rating: number;
    comment: string;
}

const postFeedback = (rating: number, comment: string) => {
    const ref = collection(firestore, "feedback");

    let data: FeedbackData = {
        timestamp: new Date(),
        rating: rating,
        comment: comment,
    }

    try {
        addDoc(ref, data)
    } catch (err) {
        console.log(err)
    }
}

export default postFeedback;