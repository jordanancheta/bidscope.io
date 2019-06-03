import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
   return (
      <header className="container sticky">
         <div className="App">
            <h1>BidScope.io</h1>
         </div>
         <nav className="nav">
            <NavLink to="/" className="home-link">Home</NavLink>
            <NavLink to="/pdf">Pdf Parse</NavLink>
         </nav>
      </header>
   );
};

export default Navigation;