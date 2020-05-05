import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Main from "./components/main.component"
import Address from "./components/address.component"
import Contact from "./components/contact.component"
import Print from "./components/print.component"
import Names from "./components/names.component"


function App() {
  return (
    <div className="App">
      <Router>
      <Route path={process.env.PUBLIC_URL + '/'} exact component={Main}/>
     <Route path={process.env.PUBLIC_URL + '/names'} exact component={Names}/>
     <Route path={process.env.PUBLIC_URL + '/print'} exact component={Print}/>
     <Route path={process.env.PUBLIC_URL + '/address'} exact component={Address}/> 
     {<Route path={process.env.PUBLIC_URL + '/contact'} exact component={Contact}/> } 
   </Router>
    </div>
  );
}

export default App;
