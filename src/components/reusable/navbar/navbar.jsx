import React from "react";
import "./navbar.css";

const  navbarContent = [
    {label:"Home"},
    {label:"Home"},
    {label:"Home"},
    {label:"Home"},
    {label:"Home"},
    {label:"Home"},
]

function Navbar(){
    return (
      <header className="portfolio-header">
        <section className="header-nav-image">
          <span className="header-name-initials">JA</span>
        </section>
        <section className="header-nav-navbar">
            <ul className="navbar-ul">
              {navbarContent.map((navbar) => {
                return <li className="navbar-li">{navbar.label}</li>;
              })}
            </ul>
        </section>
        <section className="header-nav-buttons">
          <button className="open-to-work">Open for work</button>
          <button className="resume">Resume</button>
        </section>
      </header>
    );
}

export default Navbar;