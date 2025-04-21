import React, { useState } from "react";

// Dropdown component to filter tours by destination
const DestinationSelector = ({ tours, onDestinationChange }) => {
    const [selectedDestination, setSelectedDestination] = useState("");

    // Generate a list of unique destinations from the tour names
    const uniqueDestinations = [
        "All Destinations",
        ...new Set(
            tours
                .map((tour) => {
                    const nameParts = tour.name.split(" "); // Split the name into words
                    return nameParts[2] || "Unknown"; // Use the third word or "Unknown" if unavailable
                })
                .filter((destination) => destination.trim() !== "") // Exclude empty or whitespace-only strings
        ),
    ];

    // Handle changes in the dropdown selection
    const handleDropdownChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedDestination(selectedValue); // Update the local state
        onDestinationChange(selectedValue === "All Destinations" ? "" : selectedValue); // Notify parent component
    };

    return (
        <div className="destination-selector">
            <label htmlFor="destination" className="destination-label">
                🌍 Choose Your Destination:
            </label>
            <select
                id="destination"
                value={selectedDestination}
                onChange={handleDropdownChange}
                className="destination-dropdown"
            >
                {uniqueDestinations.map((destination) => (
                    <option key={destination} value={destination}>
                        {destination}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default DestinationSelector;