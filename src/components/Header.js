import React from "react";
import { Link } from "react-router-dom";


export function Header() {

    return (
        <header className="Header">
            <div className="header-title">   
            <h3> Welcome to Task Manager</h3>
            </div>
            <nav className="sidbar-nav-links">
                <Link to="/contact">Contact</Link>
                <Link to="/about">About</Link>
                <Link to="/">Home</Link>
            </nav>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
        </header>
    )
}