import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { StateMachineProvider, createStore } from "little-state-machine";
import { withRouter } from "react-router-dom";



function Main() {
  return (
      <div>
      <h1>Page Form Wizard</h1>

      {window.location= process.env.PUBLIC_URL + '/names'};
      </div>
  );
}
export default withRouter(Main);

