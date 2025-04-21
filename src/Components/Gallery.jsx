import React, { useState, useEffect } from 'react';
import TourCard from './TourCard';

const Gallery = ({ selectedDestination }) => {
    const [tours, setTours] = useState([]); // Store tours
    const [loading, setLoading] = useState(true); // Handle loading state
    const [error, setError] = useState(null); // Handle error state

    useEffect(() => {
        const fetchTours = async () => {
            setLoading(true); // Start loading
            setError(null); // Reset error state
            try {
                const response = await fetch(`/api/react-tours-project?destination=${selectedDestination}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch tours'); // Handle HTTP errors
                }
                const data = await response.json();
                setTours(data); // Store fetched tours in state
            } catch (err) {
                setError(err.message); // Handle fetch errors
            } finally {
                setLoading(false); // Stop loading
            }
        };

        if (selectedDestination) {
            fetchTours(); // Fetch tours when a destination is selected
        } else {
            setTours([]); // Clear tours if no destination is selected
            setLoading(false);
        }
    }, [selectedDestination]); // Re-run when selectedDestination changes

    if (loading) {
        return <p>Loading tours...</p>; // Show loading message
    }

    if (error) {
        return <p>Error: {error}</p>; // Show error message
    }

    if (tours.length === 0) {
        return <p>No tours available for the selected destination.</p>; // Show no tours message
    }

    return (
        <div className="gallery">
            {tours.map((tour) => (
                <TourCard
                    key={tour.id}
                    id={tour.id}
                    name={tour.name}
                    info={tour.info}
                    image={tour.image}
                    price={tour.price}
                    removeTour={(id) => setTours(tours.filter((t) => t.id !== id))} // Remove tour
                />
            ))}
        </div>
    );
};

export default Gallery;