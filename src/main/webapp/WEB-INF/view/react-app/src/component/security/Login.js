import React from 'react';
import Form from '../html/Form';

const inputs = [{
    name: "username",
    placeholder: "username",
    type: "text"
}, {
    name: "password",
    placeholder: "password",
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