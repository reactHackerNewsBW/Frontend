import React from 'react';
import { NavLink } from "react-router-dom"

export default function Navigation() {
    return (
        <div className="App-links">
            <p>
                <NavLink to="/login">Login </NavLink>
            </p>
            <p>
                <NavLink to="/register">Register </NavLink>
            </p>
            <p>
                <NavLink to="/list">Articles</NavLink>
            </p>
        </div>
    );
};
