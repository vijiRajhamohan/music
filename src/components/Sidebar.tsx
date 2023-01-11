import React from 'react';
import { Link } from "react-router-dom";
import "../components/sidebar.css";

const Sidebar = () => {
    return (
        <nav className="nav flex-column d-flex align-item-start">
            <div>
                <Link className="nav-link m-3" to="/main">Home</Link>
                <Link className="nav-link m-3" to="/search">Search</Link>
                <Link className="nav-link m-3" to="/favourites">Favourites</Link>
                <Link className="nav-link m-3" to="/playlists">Playlists</Link>
            </div>
        </nav>
    )
}

export default Sidebar