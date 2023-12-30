import { useSelector, useDispatch} from "react-redux"
import { openEditMode } from "../redux/reducer/firstslice"
import { useState } from "react"






function EmployeeList() {
    
    const allEmployees = useSelector((state:any) => state.employee.employees)
    const masajistas = allEmployees.filter((emp:any) => emp.title == "Masajista")
    const estilistas = allEmployees.filter((emp:any) => emp.title == "Estilista")
    const facialistas = allEmployees.filter((emp:any) => emp.title == "Facialista") 
    const piliacion = allEmployees.filter((emp:any) => emp.title == "Pilacion")
    const technica = allEmployees.filter((emp:any) => emp.title == "Technica")
    
    

    


    const dispatch = useDispatch()

    const [id, setId] = useState("")
    function editing(e:any){
        setId(e.target.value)
        dispatch(openEditMode(e.target.value))
        setId("")

    }

    
    return(
        <div className="side-list-container">
            <select onChange={editing} value={id}  className="inputs">
                <option className="emp-title" value="">Estilistas</option>
                {
                    estilistas.map((estilista: any) => <option className="emp-names" value={estilista.id}>{estilista.name}</option>)
                }
            </select>
            <select onChange={editing} value={id}  className="inputs">
                <option className="emp-title" value="">Facialistas</option>
                {
                    facialistas.map((facialista:any) => <option className="emp-names" value={facialista.id}>{facialista.name}</option>)
                }
            </select>
            <select onChange={editing} value={id} className="inputs">
                <option className="emp-title" value="">Masajistas</option>
                {
                    masajistas.map((masajista: any) => <option className="emp-names" value={masajista.id}>{masajista.name}</option>)
                }
            </select>
            <select onChange={editing} value={id} className="inputs">
                <option className="emp-title" value="">Pilacion</option>
                {
                    piliacion.map((emp:any) => <option  className="emp-names" value={emp.id}>{emp.name}</option>)
                }
            </select>
            <select onChange={editing} value={id} className="inputs">
                <option className="emp-title" value="">Technica de unas</option>
                {
                    technica.map((tech:any) => <option  className="emp-names" value={tech.id}>{tech.name}</option>)
                }
            </select>
        </div>
    )
}



export default EmployeeList
