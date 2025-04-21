import React from 'react';
import Gallery from './Components/Gallery.jsx';
// Import other components as needed
import './App.css'; // If you have an App.css file

function App() {
  return (
    <div className="app">
      <header>
        <h1>Tour Destination Selector</h1>
      </header>
      <main>
        <Gallery />
      </main>
      <footer>
        <p>© 2025 Tour Destination Selector</p>
      </footer>
    </div>
  );
}

export default App;