import React from 'react';

const Ratings = ({ rating }) => {
    let ratingResult = '';
    for (let i = 0; i < rating; i++) {
        ratingResult += "*";
    }
    return (
        <div className = "rating">
            {ratingResult}
        </div>
    )
}

export default Ratings;