import React  from 'react';
import axios from 'axios';

function Logout() {
    axios.post("/perform_logout");
    return (
        <h1>You are logged out</h1>
    )
};

export default Logout;