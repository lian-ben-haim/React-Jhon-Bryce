import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import EmployeeModel from "../Models/EmployeeModel";

function setAll(currentState : EmployeeModel[], action : PayloadAction<EmployeeModel[]>) : EmployeeModel[] {
    const newState = action.payload;

    return newState;
}


// Employees Slice :

const employeesSlice = createSlice({
    name: "employees",
    initialState: [],
    reducers: { setAll }
});


// export all actions:
// (each reducer will create it's own action)
export const employeeActions = employeesSlice.actions;


// export Reducer:
export const employeeReducer = employeesSlice.reducer;