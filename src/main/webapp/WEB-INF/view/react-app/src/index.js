import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import EmployeeManagementApp from './router/EmployeeManagementApp';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import EmployeeList from "./component/EmployeeList";
import Logout from "./component/security/Logout";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/servicePages/Navbar';


const params = new URLSearchParams(window.location.search)

const router = (
    <Router>
        <div>
            <Navbar/>
        </div>

        <div>
            <Switch>
                <Route exact path="/" component={EmployeeManagementApp}/>
                <Route exact path="/employees" component={EmployeeList}/>
                {/*id is this.props in the component*/}
                <Route exact path="/employees/:id" component={EmployeeList}/>
                <Route path="/contact" component={EmployeeList}/>
                <Route path="/logout" component={Logout}/>
                <Route path="*" render={() => <Redirect to="/"/>}/>
                {/*// If the routing path wasn't found, rollback to default one*/}
                {/*<Route component={NotFound}/>*/}
            </Switch>
        </div>
    </Router>
);

ReactDOM.render(router, document.getElementById('root'));