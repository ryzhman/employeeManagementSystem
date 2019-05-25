import React from 'react';
import Form from '../html/Form';

const inputs = [{
    name: "userLogin",
    placeholder: "Enter your email address",
    type: "text"
}, {
    name: "password",
    placeholder: "Enter your password",
    type: "password"
}, {
    type: "submit",
    value: "Submit",
    className: "btn"
}];

const props = {
    name: 'loginForm',
    method: 'POST',
    action: '/api/auth',
    inputs: inputs
};

const params = new URLSearchParams(window.location.search);

function Login() {
    return <Form {...props} error={params.get('error')}/>;
}

export default Login;