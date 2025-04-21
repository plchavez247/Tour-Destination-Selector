import React, { useState } from 'react';

const DestinationSelector = ({ tours, onDestinationSelect }) => {
    const [selectedDestination, setSelectedDestination] = useState('');

    const handleChange = (event) => {
        const destination = event.target.value;
        setSelectedDestination(destination);
        onDestinationSelect(destination);
    };

    const uniqueTours = [...new Set(tours)];

    return (
        <div>
            <label htmlFor="destination-select">Select a Destination: </label>
            <select
                id="destination-select"
                value={selectedDestination}
                onChange={handleChange}
            >
                <option value="">--Choose a destination--</option>
                {uniqueTours.map((tour, index) => (
                    <option key={index} value={tour}>
                        {tour}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default DestinationSelector;