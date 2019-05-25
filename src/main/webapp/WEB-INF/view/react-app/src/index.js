import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './component/Home';
import ContactUs from './component/ContactUs';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import EmployeeList from "./component/EmployeeList";
import Logout from "./component/security/Logout";
import Login from "./component/security/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './component/servicePages/Navbar';
import SignUp from "./component/security/SignUp";

const params = new URLSearchParams(window.location.search)

const router = (
    <Router>
        <div>
            <AppNavbar/>
        </div>

        <div>
            <Switch>
                <Route exact path="/(home|index|welcome)" component={Home}/>
                <Route path="/(contact|about)" component={ContactUs}/>

                <Route exact path="/employees" component={EmployeeList}/>
                {/*id is this.props in the component*/}
                <Route exact path="/employees/:id" component={EmployeeList}/>

                <Route path="/login" component ={Login}/>
                <Route path="/logout" component={Logout}/>
                <Route path="/signUp" component={SignUp}/>

                <Route path="*" render={() => <Redirect to="/home"/>}/>
                {/*// If the routing path wasn't found, rollback to default one*/}
                {/*<Route component={NotFound}/>*/}
            </Switch>
        </div>
    </Router>
);

ReactDOM.render(router, document.getElementById('root'));