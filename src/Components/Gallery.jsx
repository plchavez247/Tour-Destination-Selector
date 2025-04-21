import React, { useEffect, useState } from "react";
import TourCard from "./TourCard";

// The TourList component handles fetching and displaying a list of tours.
const TourList = ({ tours, setTours, onRemove }) => {
    // State to track if data is being loaded
    const [isLoading, setIsLoading] = useState(true);
    // State to track if an error occurred during data fetching
    const [hasError, setHasError] = useState(false);

    // Function to fetch tour data from the API
    const loadTours = async () => {
        try {
            const response = await fetch(
                "https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project"
            );
            if (!response.ok) {
                throw new Error("Failed to fetch tour data");
            }
            const data = await response.json();
            setTours(data); // Update the state with the fetched tours
        } catch (error) {
            setHasError(true); // Set error state if fetching fails
            console.error("Error while fetching tours:", error); // Log the error for debugging
        } finally {
            setIsLoading(false); // Mark loading as complete
        }
    };

    // Fetch tour data when the component is mounted
    useEffect(() => {
        loadTours();
    }, []); // Empty dependency array ensures this runs only once on mount

    // Show a loading message while data is being retrieved
    if (isLoading) {
        return <h2>Loading tours... Hang tight!</h2>;
    }

    // Show an error message if data fetching fails
    if (hasError) {
        return <h2>Oops! Something went wrong. Please try again later.</h2>;
    }

    // Show a message if no tours are available
    if (tours.length === 0) {
        return (
            <div className="no-tours">
                <h2>No tours available at the moment.</h2>
                <button onClick={loadTours} className="refresh-btn">
                    Refresh Tours
                </button>
            </div>
        );
    }

    // Render the list of tours
    return (
        <section className="tour-list">
            {tours.map((tour) => (
                <TourCard
                    key={tour.id}
                    {...tour}
                    onRemove={onRemove} // Pass the remove handler to each tour card
                />
            ))}
        </section>
    );
};

export default TourList;