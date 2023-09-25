import React, { useState } from 'react';
import './BeerCard.css';

const BeerCard = ({ beer }) => {
    const [showFullDescription, setShowFullDescription] = useState(false);

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    const truncatedDescription = showFullDescription
        ? beer.description
        : beer.description.slice(0, 50) + (beer.description.length > 50 ? '... ' : ' ');

    return (
        <div className='card'>
            <div className='card-body'>
                <img className='card-image' src={beer.image_url} alt={beer.name} />

                <h2 className='card-title'>{beer.name}</h2>

                <h5 className='card-tagline'>{beer.tagline}</h5>

                <p className='card-description'>
                    {truncatedDescription}
                    {beer.description.length > 50 && (
                        <span
                            className='read-more'
                            onClick={toggleDescription}
                        >
                            {showFullDescription ? ' Read Less' : 'Read More'}
                        </span>
                    )}
                </p>
            </div>
        </div>
    );
};

export default BeerCard;
