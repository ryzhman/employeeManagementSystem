import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import EmployeeManagementApp from './router/EmployeeManagementApp';
import {BrowserRouter as Router, Link, NavLink, Route, Switch} from 'react-router-dom';
import EmployeeList from "./component/EmployeeList";
import NotFound from "./component/servicePages/NotFound";
import Login from "./component/security/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/servicePages/Navbar';


const params = new URLSearchParams(window.location.search)

const router = (
    <Router>
        <Route path="/" component={Navbar}/>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/employees">View all employees</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path="/" component={EmployeeManagementApp}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/employees" component={EmployeeList}/>
                {/*id is this.props in the component*/}
                <Route exact path="/employees/:id" component={EmployeeList}/>
                <Route path="/contact" component={EmployeeList}/>
                {/*// If the routing path wasn't found, rollback to default one*/}
                <Route component={NotFound}/>
            </Switch>
        </div>
    </Router>
);

ReactDOM.render(router, document.getElementById('root'));