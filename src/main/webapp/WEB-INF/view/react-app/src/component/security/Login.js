import React, {Component} from 'react';
import AuthService from "../../service/AuthService";
import LoginForm from "../html/LoginForm";

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

class Login extends Component{
    constructor(props) {
        super(props);
        this.authService = AuthService;
    }

    // handleLogin = (response, history) => {
    //     if (response.status === 200) {
    //         let result = this.authService.handleLogin(response);
    //         if (result) {
    //             //redirect to the main page
    //             history.replace("/");
    //         }
    //     } else {
    //
    //     }
    // };

    render() {
        // this.props.handleLogin = this.handleLogin;
        return (
            <LoginForm {...props} error={params.get('error')}/>
        )
    }
}

export default Login;