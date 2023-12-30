import { openEditMode } from '../redux/reducer/firstslice';
import Employees from './Employee inputs'
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';



function Header(){
    const allEmployees = useSelector((state:any) => state.employee.employees)
    const dispatch = useDispatch()
    const [id, setId] = useState("")

    function editing(e:any){
        e.preventDefault()
        setId(e.target.value)
        dispatch(openEditMode(e.target.value))
        setId("")
    }

    return (
        <div className="header-container">
            <div className="title">
                <h1>Schedule Pata</h1>
            </div>
            <div>
                <select onChange={editing} value={id} className="inputs">
                    <option value="">Buscar</option>
                    {
                        allEmployees.map((emp:any) => <option value={emp.id}>{emp.name}</option>)
                    }
                </select>
            </div>
            <div className="employee-component">
                <Employees />
            </div>
        </div>
    )
};





export default Header; 