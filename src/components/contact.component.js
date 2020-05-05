import React from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const Contact = props => {
    const { state,action } = useStateMachine(updateAction);
  const { register, handleSubmit } = useForm({
    defaultValues: state.yourDetails  
  });
  const onPrevious = data => {
    action(data);
    window.location=process.env.PUBLIC_URL+'/address';
  };
  const onSubmit = data => {
    action(data);
    console.log(state.yourDetails);
    var e="Your name is ";
    e=e+ state.yourDetails.Firstname + " " + state.yourDetails.Lastname;
    e=e+", you live at "+state.yourDetails.Address + ", " + state.yourDetails.City+ " and you can be contacted at " + state.yourDetails.Email + " or " + state.yourDetails.Contactno; 
    e=e+"."
    NotificationManager.info('', e , 10000);

  //window.location='/print';
  };
  return (
    <div style={{position:"absolute", left:"45%", top:"35%"}}>
        <NotificationContainer/>
    <h2>Fill the Form!</h2>
    <form style={{display:"block"}} >
      <div>
      <label>
        Email:
        <input className="form-control rounded-pill" name="Email" ref={register} />
      </label>
      </div>
        <div>
      <label>
        Contact No:
       <input className="form-control rounded-pill" name="Contactno" ref={register} />
      </label>
      </div>
      <div>
      <button className="rounded-pill btn btn-dark" onClick={handleSubmit(onPrevious)}>Previous</button>
      <button className="rounded-pill btn btn-dark" onClick={handleSubmit(onSubmit)}>Submit</button>
      </div>
    </form>
    <br/>
    <br/>
    <button style={{position:"absolute"}} className="rounded-pill btn btn-dark" onClick={(e) => window.location=process.env.PUBLIC_URL+'/print'}>Go to shop</button>
    </div>
  );
};

export default withRouter(Contact);