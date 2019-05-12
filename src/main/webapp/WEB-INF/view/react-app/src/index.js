import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Form from './component/Form'

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
    action: '/perform_login',
    inputs: inputs
};

const params = new URLSearchParams(window.location.search);

ReactDOM.render(
    //If credentials are not valid, Spring Security redirects us to
    //index.html?error=true and we handle this request param in Form component
    <Form {...props} error={params.get('error')}/>,
    document.getElementById('container'));