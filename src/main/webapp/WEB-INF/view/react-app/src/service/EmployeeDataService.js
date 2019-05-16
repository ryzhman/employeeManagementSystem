import axios from 'axios';

const SERVER_URL = "localhost:8080";
const SERVER_API = `http://${SERVER_URL}/api`;

class EmployeeDataService {
    fetchAllEmployees() {
        // return axios.get(`${SERVER_API}/employees`);
        return axios.get(`/api/employees`);
    }

}

export default EmployeeDataService;