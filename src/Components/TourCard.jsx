import React, { useState } from "react";

// The TourCard component displays details of a single tour, including its name, image, price, and description.
// It also provides buttons to toggle the description's visibility and to remove the tour from the list.

const TourCard = ({ id, name, info, price, image, onRemove }) => {
    // State to toggle between showing full or truncated description
    const [isReadMore, setIsReadMore] = useState(false);

    return (
        <article className="tour-card">
            {/* Tour title */}
            <h3 className="tour-title">{name}</h3>

            {/* Tour image */}
            <img src={image} alt={`Image of ${name}`} className="tour-image" />

            {/* Tour price */}
            <p className="tour-price">Price: ${price}</p>

            {/* Tour description with a toggle button */}
            <p className="tour-info">
                {isReadMore ? info : `${info.substring(0, 50)}...`}
                <button
                    onClick={() => setIsReadMore(!isReadMore)}
                    className="read-more-btn"
                >
                    {isReadMore ? "Show Less" : "Read More"}
                </button>
            </p>

            {/* Button to remove the tour */}
            <button
                onClick={() => onRemove(id)}
                className="remove-btn"
            >
                Not Interested
            </button>
        </article>
    );
};

export default TourCard;