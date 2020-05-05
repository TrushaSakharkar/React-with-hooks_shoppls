import React from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";
import rootElement from "../index.js";

const Address = props => {
    const { state,action } = useStateMachine(updateAction);
    const { register, handleSubmit } = useForm({
      defaultValues: state.yourDetails  
    });
  const onPrevious = data => {
    action(data);
    console.log(state);
    // window.STATE_MACHINE_GET_STORE()
   window.location=process.env.PUBLIC_URL+'/names';
  };
  const onNext = data => {
    action(data);
    window.location=process.env.PUBLIC_URL +'/contact';
  };
  return (
    <div style={{position:"absolute", left:"45%", top:"35%"}}>
    <h2>Fill the Form!</h2>
    <form style={{display:"block"}}>
        <div>
      <label>
        Address:
        <input className="form-control rounded-pill" name="Address" ref={register} />
      </label>
      </div>
      <div>
      <label>
        City:
        <input className="form-control rounded-pill" name="City" ref={register} />
      </label>
      </div>
      <div>
      <button className="rounded-pill btn btn-dark" onClick={handleSubmit(onPrevious)}>Previous</button>
      <button className="rounded-pill btn btn-dark" onClick={handleSubmit(onNext)}>Next</button>
      </div>
      </form>
      </div>
  );
};

export default withRouter(Address);