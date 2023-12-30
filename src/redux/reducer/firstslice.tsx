import { createSlice } from "@reduxjs/toolkit";
import { empList } from "../employees/initialState-Employee-list";





const initialState = {
    
    employees: empList,
    editEmployee: false,
    selectedEmployee: "", 
    
}

const employeeSlice = createSlice({
    name: "employee",
    initialState: initialState,
    reducers: {
        add_Employee: (state:any, action) => {
            state.employees.push(action.payload)
        },
        openEditMode: (state:any, action) => {
            const emp = state.employees.find((e:any) => e.id == action.payload);
            state.editEmployee = true;
            state.selectedEmployee = emp

            
        },
        closeEditMode: (state:any) => {
            state.editEmployee = false
        },
        switchShift: (state:any, action) => {
            const emp = state.employees.find((e:any) => e.id == action.payload);
            if(emp.shift === "AM" ){
                emp.shift = "PM";
                state.selectedEmployee = emp
            }

            else if(emp.shift == "PM"){
                emp.shift = "AM";
                state.selectedEmp = emp
            }
        },
        switchLocation: (state:any, action) => {
            const emp = state.employees.find((e:any) => e.id == action.payload);
            if (emp.location == "Terramar"){
                emp.location = "Divino";
                state.selectedEmployee = emp
            }
            else if (emp.location == "Divino"){
                emp.location = "Terramar";
                state.selectedEmployee = emp
            }  
        },
        requestTimeOff: (state:any, action) => {
            const emp = state.employees.find((e:any) => e.id == action.payload.id);
            emp.request.push(action.payload.time)
            
            
        },
        empSelect: (state:any, action) => {
            const emp = state.employees.find((e:any) => e.id == action.payload);
            state.selectedEmployee = emp
        },


    
    }
});


export const {add_Employee, closeEditMode, openEditMode, switchShift, switchLocation, requestTimeOff, empSelect} = employeeSlice.actions
export default employeeSlice


