import React from "react";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {props.IsRegistered === true && <input type="password" placeholder="Confirm Password" />}
      <button type="submit">{props.IsRegistered ? "Login" : "Register"}</button>
    </form>
  );
}

export default Form;
//code manipulate if user is registered or not meaning true or false (in app)
