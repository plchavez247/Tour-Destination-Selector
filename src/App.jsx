import React, { useState } from 'react';
import { TourList } from './Components/Gallery';
// Import other components as needed
import './App.css'; // If you have an App.css file

function App() {
  // Add any state or logic needed for your app
  
  return (
    <div className="app">
      <header>
        <h1>Tour Destination Selector</h1>
      </header>
      <main>
        <TourList />
      </main>
      <footer>
        <p>© 2025 Tour Destination Selector</p>
      </footer>
    </div>
  );
}

export default App;