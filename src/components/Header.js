import React from "react";
import { Link, useNavigate } from "react-router-dom";


export function Header() {


    function handleAddNewTask() {






    }

    return (
        <header className="Header">
            <div className="header-title">
                <h3> Task Force</h3>
            </div>
            <nav className="sidbar-nav-links">
                <Link to="/contact">Contact</Link>
                <Link to="/about">About</Link>
                <Link to="/">Home</Link>
            </nav>
            <Link style={{ display: "flex", flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} className="add-new-task-link" to="/add-new-task">
                <span>    Add new task
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round" className="lucide lucide-plus">
                    <path d="M5 12h14" /><path d="M12 5v14" /></svg>

            </Link>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
        </header>
    )
}