import React from "react";
import { NavLink } from "react-router-dom";
import mashuptemplate from "..//images/mashuptemplate.svg"

const Navigation = () => {
   return (

   <header>
      <nav className="navbar  navbar-fixed-top navbar-default navbar-expand-lg">
         <div className="container">
            <div className="">
            {/* <button type="button" className="navbar-toggle uarr collapsed" data-toggle="collapse" data-target="#navbar-collapse-uarr">
               <span className="sr-only">Toggle navigation</span>
               <span className="icon-bar"></span>
               <span className="icon-bar"></span>
               <span className="icon-bar"></span>
            </button> */}
            <a className="navbar-brand" href="./index.html" title="">
               <img src={mashuptemplate} className="navbar-logo-img" alt="" />
            </a>
            </div>

            <div className="ml-auto" id="navbar-collapse-uarr">
               <ul className="nav navbar-nav navbar-right">
                  <li><NavLink to="/">Home</NavLink></li>
                  <li><NavLink to="/about">About</NavLink></li>
                  <li><NavLink to="/pricing">Pricing</NavLink></li>
                  <li><NavLink to="/contact">Contact</NavLink></li>
                  <li>
                     <p>
                     <NavLink className="btn btn-primary navbar-btn" to ="/login">Log In</NavLink>
                     </p>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   </header>

   );
};

export default Navigation;