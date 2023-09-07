import EmployeeModel from "../Models/EmployeeModel";
import axios from "axios";
import appConfig from "../Utils/AppConfig";

class EmployeesService {

    public async getAllEmployees() : Promise<EmployeeModel[]> {
        
        const response = await axios.get<EmployeeModel[]>(appConfig.employeesUrl);
        const employees = response.data;

        return employees;
    }
}

const employeesService = new EmployeesService();

export default employeesService;