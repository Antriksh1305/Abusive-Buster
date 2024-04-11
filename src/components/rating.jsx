import { useState } from "react";
import "./rating.css";

const Rating = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return (
        <div>
            {[...Array(5)].map((star, index) => {
                const currentRating = index + 1;

                return (
                    <label key={index}>
                        <input
                            type="radio"
                            name="rating"
                            value={currentRating}
                            onChange={() => setRating(currentRating)}
                        />
                        <span
                            className="star"
                            style={{
                                color:
                                    currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"
                            }}
                            onMouseEnter={() => setHover(currentRating)}
                            onMouseLeave={() => setHover(null)}
                        >
                            <i className="bi bi-star-fill"></i>
                        </span>
                    </label>
                );
            })}
        </div>
    );
};

export default Rating;