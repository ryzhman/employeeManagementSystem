import React from "react";
import Form from "../html/Form";

const inputs = [{
        name: "name",
        placeholder: "Enter your name",
        type: "text"
    },
    {
        name: "username",
        placeholder: "Enter your login id",
        type: "text"
    },
    {
        name: "email",
        placeholder: "Enter your email",
        type: "text"
    },
    {
        name: "password",
        placeholder: "password",
        type: "password"
    },
    {
        name: "password2",
        placeholder: "password",
        type: "password"
    },
    {
        type: "submit",
        value: "Sign up",
        className: "btn"
    }];

const props = {
    name: 'signUpForm',
    method: 'POST',
    action: '/api/auth/user',
    inputs: inputs
};

function SignUp() {
    return <Form {...props}/>;
}

export default SignUp;