import React, {Component} from "react";
import "./App.css";
import { BrowserRouter, Route, Switch} from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Login from "./components/Login"

import PdfParse from "./components/PdfParse";
import Footer from "./components/Footer";


class App extends Component {
   // constructor() {
   //    super();
   // }

  render() {
     return (
         <BrowserRouter>
            <div>
            <Navigation />

               <Switch>
                  <Route path="/" component={Home} exact />
                  <Route path="/about" component={About} />
                  <Route path="/pricing" component={Pricing} />
                  <Route path="/contact" component={Contact} />
                  <Route path="/pdf" component={PdfParse} />
               </Switch>
               <Footer />
               <Route path="/login" component={Login} />
            </div>
         </BrowserRouter>
      );
   }
}

export default App;
