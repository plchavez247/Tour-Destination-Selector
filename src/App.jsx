import { useState } from "react";
import TourList from "./Components/Gallery";
import DestinationSelector from "./Components/DestinationSelector";
import "./styles/styles.css";

function App() {
    const [tours, setTours] = useState([]); // State to store the list of tours
    const [selectedDestination, setSelectedDestination] = useState(""); // State to track the selected destination

    // Handler to remove a specific tour by its ID
    const handleRemoveTour = (id) => {
        setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
    };

    // Filter the tours based on the selected destination
    const displayedTours = selectedDestination
        ? tours.filter((tour) => tour.name === selectedDestination)
        : tours;

    return (
        <div className="app-container">
            <header>
                <h1 className="app-title">Tour Explorer</h1>
            </header>
            <main>
                {/* Dropdown to select a destination */}
                <DestinationSelector
                    tours={tours}
                    onDestinationChange={setSelectedDestination}
                />
                {/* Display the filtered list of tours */}
                <TourList
                    tours={displayedTours}
                    setTours={setTours}
                    onRemove={handleRemoveTour}
                />
            </main>
        </div>
    );
}

export default App;