import React from 'react';
import NavBar from './components/NavBar';
import FloatingNews from './components/FloatingNews';
import HomeContent from './components/HomeContent';

function App() {
  return (
    <div className="App">
      <NavBar />
      <FloatingNews />
      <HomeContent />
    </div>
  );
}

export default App;
