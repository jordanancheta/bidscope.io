import React from "react";
import { NavLink } from "react-router-dom";
import "../css/main.css";
import mashuptemplate from "..//images/mashuptemplate.svg"

const Navigation = () => {
   return (

   <header>
      <nav className="navbar  navbar-fixed-top navbar-default">
         <div className="container">
            <div className="navbar-header">
            <button type="button" className="navbar-toggle uarr collapsed" data-toggle="collapse" data-target="#navbar-collapse-uarr">
               <span className="sr-only">Toggle navigation</span>
               <span className="icon-bar"></span>
               <span className="icon-bar"></span>
               <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="./index.html" title="">
               <img src={mashuptemplate} className="navbar-logo-img" alt="" />
            </a>
            </div>

            <div className="collapse navbar-collapse" id="navbar-collapse-uarr">
               <ul className="nav navbar-nav navbar-right">
                  <li><NavLink to="/" className="home-link">Home</NavLink></li>
                  {/* <li><a href="./about.html" title=""> About</a></li>
                  <li><a href="./pricing.html" title=""> Pricing </a></li>
                  <li><a href="./contact.html" title="">Contact</a></li> */}
                  <li><NavLink to ="/pdf">Pdf Parse</NavLink></li>
                  <li>
                     <p>
                     <button href="" className="btn btn-primary navbar-btn" title="">Sign In</button>
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