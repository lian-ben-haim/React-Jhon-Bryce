import { useSelector } from "react-redux";
import EmployeeModel from "../../../Models/EmployeeModel";
import employeesService from "../../../Services/EmployeesService";
import css from "./EmployeesList.module.css";
import { useState, useEffect } from "react";
import { AppState } from "../../../Redux/AppState";

function EmployeesList(): JSX.Element {

    //const [employees, setEmployees] = useState<EmployeeModel[]>([]);

    // useEffect(() => {
    //     employeesService.getAllEmployees()
    //     .then(employees => setEmployees(employees))
    //     .catch(err => alert(err.message))
    // }, [])

    const employees = useSelector((appState : AppState) => appState.employees);

    useEffect(() => {
        employeesService.getAllEmployees().catch(err => alert(err.message));
    })



    function changeColor() : void {
        
    }

    return (
        <div className={css.EmployeesList}>
            <button onClick={changeColor}>click me</button>
			<table>
                <tr className={css.TableTitlesRow}>
                    <td>First Name</td>
                    <td>Second Name</td>
                    <td>Title</td>
                    <td>Country</td>
                    <td>City</td>
                    <td>Birth Date</td>
                    <td>Image</td>
                </tr>
                {employees.map(e => <tr>
                    <td>{e.firstName}</td>
                    <td>{e.lastName}</td>
                    <td>{e.title}</td>
                    <td>{e.country}</td>
                    <td>{e.city}</td>
                    <td>{e.birthDate}</td>
                    <td><img src={e.imageUrl}/></td>
                    
                </tr>)}
            </table>
        </div>
    );
}

export default EmployeesList;
