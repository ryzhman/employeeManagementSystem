import React, {Component} from 'react';
import {
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
    UncontrolledDropdown
} from 'reactstrap';

export default class AppNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {isOpen: false};
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <Navbar color="dark" expand="md" sticky={'top'}
                    className="shadow-sm py-0 border-dark border-bottom">
                <div>
                    <NavbarBrand to="/"><img
                        src={"https://res.cloudinary.com/go2it/image/upload/v1557970687/Go2IT_small.png"}/></NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/employees">View all employees</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/contact">Contact us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    href="https://www.facebook.com/Go2IT.ca">@Facebook</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    href="https://github.com/ryzhman/employeeManagementSystem">GitHub</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Profile
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        <NavLink href="/info">Info</NavLink>
                                    </DropdownItem>
                                    <DropdownItem divider/>
                                    <DropdownItem>
                                        <NavLink href="/logout">Logout</NavLink>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        );
    }
}