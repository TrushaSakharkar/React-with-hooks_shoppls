import React, {Component} from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";

import Main from "./components/main.component"
import Address from "./components/address.component"
import Contact from "./components/contact.component"
import Print from "./components/print.component"
import Names from "./components/names.component"


function App() {
  return (
    <div className="App">
      <Router>
      <Route path={'/'} exact component={Main}/>
     <Route path={'/names'} exact component={Names}/>
     <Route path={'/print'} exact component={Print}/>
     <Route path={'/address'} exact component={Address}/> 
     {<Route path= {'/contact'} exact component={Contact}/> } 
   </Router>
    </div>
  );
}

export default App;
