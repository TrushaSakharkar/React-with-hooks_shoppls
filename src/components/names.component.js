import React from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

const Names = props => {
    const { state,action } = useStateMachine(updateAction);
  const { register, handleSubmit } = useForm({
      defaultValues: state.yourDetails  
  });
  const onNext = data => {
    action(data);
    console.log(data);
 window.location=process.env.PUBLIC_URL +'/address';
  };

  return (
      <div style={{position:"absolute", left:"45%", top:"35%"}}>
          <h2>Fill the Form!</h2>
    <form style={{display:"block"}} >
        <div>
      <label>
        First Name:
        <input className="form-control rounded-pill" name="Firstname" ref={register} />
      </label>
      </div>
        <div>
      <label>
        Last Name:
        <input className="form-control rounded-pill" name="Lastname" ref={register} />
      </label>
      </div>
      <div>
      <button className="rounded-pill btn btn-dark" onClick={handleSubmit(onNext)}>Next</button>
      </div>
      </form>
      </div>

   
  );
};

export default withRouter(Names);