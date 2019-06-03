import React, {Component} from "react";
import "./App.css";
import { BrowserRouter, Route, Switch} from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./components/Home";
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
                  <Route path="/pdf" component={PdfParse} />
               </Switch>
               <Footer />
            </div>
         </BrowserRouter>
      );
   }
}

export default App;
