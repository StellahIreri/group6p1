import React from "react";
import { findDOMNode } from "react-dom";
function Form(){
    return(
        <>
      <h1>Login Form</h1>
      <form>
        <input type="email" name="email" placeholder="type your email"/>
        <input type="password" name="password" placeholder="enter your password"/>
        <button type="submit">Login</button>
    </form>
    </>
    )
}
export default Form