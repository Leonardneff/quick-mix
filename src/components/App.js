import React from 'react';
import logo from '../images/logo.svg';
import '../App.css';
import AuthButton from '../containers/AuthButton'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>QUICK MIX</h1>
      </header>
      <div className="Content">
      <p>
          Mix your playlist based on one of three predefined categories matching with your personal taste.
      </p>
      <AuthButton />
      </div>
    </div>
  );
}

export default App;
