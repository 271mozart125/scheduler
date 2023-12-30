import { useDispatch } from "react-redux";
import { useState } from "react";
import { add_Employee } from "../redux/reducer/firstslice";




const Employees = () => {
    
    const [name, setName] = useState('')
    const [title, setTitle] = useState('')

    const dispatch = useDispatch()
    
    function addEmployee(e:any){
        
        e.preventDefault()

        dispatch(add_Employee({
            
            name: name,
            id: name,
            request: [],
            shift: "AM",
            location: "Bamboo",
            title: title

        }))

        setName("")
                
    }
    
    return (
            <form className = "add-employee-container" id="the-form">
                <div className="employee-input">
                    <input onChange={e => setName(e.target.value)} value={name} className="inputs" placeholder = "Agregar trabajador?" type = "text" ></input>
                </div>
                <div className="employee-title">
                    <select onChange={e => setTitle(e.target.value)}  value={title} className="title-dropdown inputs" >
                        <option value="">Titulo</option>
                        <option value="Estilista">Estilista</option>
                        <option value="Facialista">Facialista</option>
                        <option value="Masajista">Masajista</option>
                        <option value="Pilacion">Pilacion</option>
                        <option value="Technica">Technica de unas</option>
                        
                    </select>
                </div>
                <div className="submit">
                    <button className="button" onClick={addEmployee} type="submit" >Agregar</button>
                </div>
            </form>
        )
}

export default Employees;