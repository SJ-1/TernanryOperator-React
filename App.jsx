import React from "react";
import "./index.css";
import Login from "./Login";

const isLoggedIn = true;

let App = () => {
    return(
    <div className="container">
        {isLoggedIn ? <h1>Hello</h1> : <Login/>} 
    </div>
  );
}

export default App;

// {isLoggedIn ? <h1>Hello</h1> : <Login/>} 
//   condition ?  do_If_True    : do_If_False 
