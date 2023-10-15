import React from "react";

import { Link } from "react-router-dom";



export function Sidebar() {
    return (
        <aside>
            <nav className="sidbar-nav-links">
                <Link to="/contact">Contact</Link>
                <Link to="/about">About</Link>
                <Link to="/">Home</Link>
            </nav>
        </aside>
    )
}