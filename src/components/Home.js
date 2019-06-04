import React from "react";
import "../css/main.css";
var bg = require("..//images/img-home.jpg")


const Home = () => {
   return (

   <div>
      <div className="white-text-container background-image-container" style={ { backgroundImage: "url("+bg+")" } }>
         <div className="container">
            <div className="row">
                  <div claclassNamess="col-md-6">
                     <h1>Bidscope.io</h1>
                     <h4>This is the future of bid scoping. A better way to mangage bids. <br/> Create more accurate scope sheets. <br/> Get more accurate bids. </h4>
                     <a href="./download.html" title="" className="btn btn-lg btn-primary">Find Out More</a>
                  </div>
            </div>
          </div>
   </div>


   <div className="section-container border-section-container">
      <div className="container">
         <div className="row">
            <div className="col-md-12 section-container-spacer">
               <div className="text-center">
                  <h2>Bid Scoping Reimagined</h2>
                  <p> Auctor augue mauris augue neque. Posuere lorem ipsum dolor sit amet consectetur adipiscing.<br /> Porta non 
                        pulvinar neque laoreet. Viverra ipsum nunc aliquet bibendum. </p>
               </div>
            </div>

            <div className="col-md-4">
               <div className="fa-container">
                  <i className="fa fa-comment-o fa-3x" aria-hidden="true"></i>
               </div>
               <div className="text-center">
                  <h3>Communicate</h3>
               </div>
               <div>
                  <p>Auctor augue mauris augue neque. Posuere lorem ipsum dolor sit amet consectetur adipiscing. Porta
                        non pulvinar neque laoreet. Viverra ipsum nunc aliquet bibendum. Iaculis urna id volutpat lacus.
                        Turpis egestas pretium aenean pharetra magna ac.
                  </p>
               </div>
            </div>
            <div className="col-md-4">
               <div className="fa-container">
                  <i className="fa fa-heart-o fa-3x" aria-hidden="true"></i>
               </div>
               <div className="text-center">
                  <h3>Track</h3>
               </div>
               <div>
                  <p>Auctor augue mauris augue neque. Posuere lorem ipsum dolor sit amet consectetur adipiscing. Porta
                        non pulvinar neque laoreet. Viverra ipsum nunc aliquet bibendum. Iaculis urna id volutpat lacus.
                        Turpis egestas pretium aenean pharetra magna ac.
                  </p>
               </div>
            </div>
            <div className="col-md-4">
               <div className="fa-container">
                  <i className="fa fa-bell-o fa-3x" aria-hidden="true"></i>
               </div>
               <div className="text-center">
                  <h3>Alerts</h3>
               </div>
               <div>
                  <p>Auctor augue mauris augue neque. Posuere lorem ipsum dolor sit amet consectetur adipiscing. Porta
                        non pulvinar neque laoreet. Viverra ipsum nunc aliquet bibendum. Iaculis urna id volutpat lacus.
                        Turpis egestas pretium aenean pharetra magna ac. 
                  </p>
               </div>
            </div>
         </div>
      </div>
   </div>


   <div className="section-container background-color-container white-text-container">
      <div className="container">
        <div className="row">
            <div className="col-xs-12">
                <div className="text-center">
                    <h2>Vivamus laoreet</h2>
                    <p> Auctor augue mauris augue neque. Posuere lorem ipsum dolor sit amet consectetur adipiscing. Porta non
                        pulvinar neque laoreet. Viverra ipsum nunc aliquet bibendum. Iaculis urna id volutpat lacus. Turpis
                        egestas pretium aenean pharetra magna ac. Id cursus metus aliquam eleifend mi. </p>
                    <a href="./download.html" title="" className="btn btn-primary btn-lg">Check It Out</a>
                </div>
            </div>
        </div>
     </div>
   </div>

 </div>

   );
};

export default Home;