import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Quick Mix - A Web App using the Spotify API to create a playlist based on one of three predefined categories.
        </p>
      </header>
    </div>
  );
}

export default App;
