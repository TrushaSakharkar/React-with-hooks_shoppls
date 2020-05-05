import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { StateMachineProvider, createStore } from "little-state-machine";
import { withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";




function Main() {
  let history = useHistory();

  return (
      <div>
      <h1>Page Form Wizard</h1>
      {history.push("/names")}
      </div>
  );
}
export default withRouter(Main);

