import React from 'react';
import './App.css';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="header">
        <h1>Welcome to Our Website</h1>
      </header>
      <main className="main-content">
        <section className="section">
          <h2>Home</h2>
          <p>This is the home section.</p>
        </section>
        <section className="section">
          <h2>Packages</h2>
          <p>Explore our available packages.</p>
        </section>
        <section className="section">
          <h2>Our Work</h2>
          <p>Check out some of our past projects.</p>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
