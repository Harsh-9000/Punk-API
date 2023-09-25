import React from 'react';
import './Navbar.css';

function Navbar({ handleSearch }) {
    return (
        <nav className="navbar">
            <h1>Beer Explorer</h1>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search beers..."
                    onChange={(e) => handleSearch(e.target.value)}
                />
            </div>
        </nav>
    );
}

export default Navbar;
