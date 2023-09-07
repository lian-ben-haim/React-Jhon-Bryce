import EmployeeModel from "../Models/EmployeeModel";
import axios from "axios";
import appConfig from "../Utils/AppConfig";
import { appStore } from "../Redux/AppState";
import { employeeActions } from "../Redux/EmployeesSlice";

class EmployeesService {

    public async getAllEmployees() : Promise<EmployeeModel[]> {

        let employees = appStore.getState().employees;

        if(employees.length === 0) {
            const response = await axios.get<EmployeeModel[]>(appConfig.employeesUrl);
            employees = response.data;
            appStore.dispatch(employeeActions.setAll(employees));
        }
        
        return employees;
    }
        
}

const employeesService = new EmployeesService();

export default employeesService;