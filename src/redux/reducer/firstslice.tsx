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
            emp.request.push(action.payload.time);
            /* add a way to select random emp with oppsing shift to add opposite request */
            const theSwap = state.employees.filter((e:any) => e.location == emp.location && e.shift != emp.shift && e.id != emp.id && e.title != "Encargada");
            const randomEmp = Math.floor(Math.random() * theSwap.length);
            switch(action.payload.time){
                case "LunesAM":
                    theSwap[randomEmp].request.push("LunesPM");
                        break;
                case "LunesPM":
                    theSwap[randomEmp].request.push("LunesAM");
                        break;
                case "MartesAM":
                    theSwap[randomEmp].request.push("MartesPM");
                        break;
                case "MartesPM":
                    theSwap[randomEmp].request.push("MartesAM");
                        break;
                case "MiercolesAM":
                    theSwap[randomEmp].request.push("MiercolesPM");
                        break;
                case "MiercolesPM":
                    theSwap[randomEmp].request.push("MiercolesAM");
                        break;
                case "JuevesAM":
                    theSwap[randomEmp].request.push("JuevesPM");
                        break;
                case "JuevesPM":
                    theSwap[randomEmp].request.push("JuevesAM");
                        break;
                case "ViernesAM":
                    theSwap[randomEmp].request.push("ViernesPM");
                        break;
                case "ViernesPM":
                    theSwap[randomEmp].request.push("ViernesAM");
                        break;
                case "SabadoAM":
                    theSwap[randomEmp].request.push("SabadoPM");
                        break;
                case "SabadoPM":
                    theSwap[randomEmp].request.push("SabadoAM");
                        break;
                case "DomingoAM":
                    theSwap[randomEmp].request.push("DomingoPM");
                        break;
                case "DomingoPM":
                    theSwap[randomEmp].request.push("DomingoAM");
                        break;
                                                                                                                              
            }
            

            
            
        },
        empSelect: (state:any, action) => {
            const emp = state.employees.find((e:any) => e.id == action.payload);
            state.selectedEmployee = emp
        },


    
    }
});


export const {add_Employee, closeEditMode, openEditMode, switchShift, switchLocation, requestTimeOff, empSelect} = employeeSlice.actions
export default employeeSlice


