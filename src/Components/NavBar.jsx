import React from "react";
import { NavBarContainer } from "./NavBar.style";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <NavBarContainer>
            <ul>
                <li><NavLink key="home-link" to="/">HOME</NavLink></li>
                <li><NavLink key="posters-link" to="/posters">PLAKATER</NavLink></li>
            </ul>
        </NavBarContainer>
    );
};
