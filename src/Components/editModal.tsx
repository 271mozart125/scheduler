import { useDispatch, useSelector } from "react-redux"
import { closeEditMode } from "../redux/reducer/firstslice"
import { switchShift, switchLocation, requestTimeOff, empSelect } from "../redux/reducer/firstslice"
import { useState } from "react"



const EditModal = () => {
    
    const dispatch = useDispatch()
    const allEmployees = useSelector((store:any) => store.employee.employees)
    const selectedEmp = useSelector((store:any) => store.employee.selectedEmployee)
    const amShiftBamboo = allEmployees.filter((emp:any) => emp.shift == "AM" && emp.location == "Terramar")
    const pmShiftBamboo = allEmployees.filter((emp:any) => emp.shift == "PM" && emp.location == "Terramar")
    const amShiftDivino = allEmployees.filter((emp:any) => emp.shift == "AM" && emp.location == "Divino")
    const pmShiftDivino = allEmployees.filter((emp:any) => emp.shift == "PM" && emp.location == "Divino")
    const [id, setId] = useState(selectedEmp.id)
    const [requestDay, setRequestDay] = useState("")
    const [request, setRequest] = useState("")


    

    

    

    function shiftSwitch(e:any) {

        e.preventDefault()

        setId(e.target.value)
        
        dispatch(switchShift(e.target.value))



    }

    function locationSwitch(e:any) {
        e.preventDefault()

        setId(e.target.value)

        dispatch(switchLocation(e.target.value))
    }

    function requester(e:any){

        setRequest(requestDay + e.target.value)
        
    }

    function submitRequest(e:any){
        e.preventDefault()
        if (request){
            dispatch(requestTimeOff({
                id: id,
                time: request
            }))
        }

        else{
            dispatch(requestTimeOff({
                id: id,
                time: requestDay
            }))
        }        
    }

    function selectEmp(e:any) {
        setId(e.target.value)
        dispatch(empSelect(e.target.value))
    }
    

    return (
        <aside>
            <div className="modal-container">
                <div className="modal-buttons">
                    <button onClick={() => dispatch(closeEditMode())}  className="exit-modal">X</button>
                </div>
                <div className="schedule-map">
                    <div className="terramar-container">
                        <p>Terramar</p>
                        <ul className="modal-lists">
                            <p>**AM**</p>
                            {
                                amShiftBamboo.map((emp:any) => <li className="modal-li" key={emp.id}><span>{emp.name}</span><button className="shift-location-button" value={emp.id} onClick={shiftSwitch}>Turno</button><button className="shift-location-button" onClick={locationSwitch} value={emp.id}>Ubi</button><button onClick={selectEmp} className="shift-location-button" value={emp.id}>Selectar</button></li>)
                            }
                            <p>**PM**</p>
                            {
                                pmShiftBamboo.map((emp:any) => <li className="modal-li" key={emp.id}><span>{emp.name}</span><button className="shift-location-button" value={emp.id} onClick={shiftSwitch}>Turno</button><button className="shift-location-button" onClick={locationSwitch} value={emp.id}>Ubi</button><button onClick={selectEmp} className="shift-location-button" value={emp.id}>Selecionar</button></li>)
                            }
                        </ul>
                    </div>
                    <div className="divino-container">
                        <p>Divino</p>
                        <ul className="modal-lists">
                            <p style = {{textAlign: "center"}}>**AM**</p>
                            {
                                amShiftDivino.map((emp:any) => <li className="modal-li" key={emp.id}><span>{emp.name}</span><button className="shift-location-button" value={emp.id} onClick={shiftSwitch}>Turno</button><button className="shift-location-button" onClick={locationSwitch} value={emp.id}>Ubi</button><button onClick={selectEmp} className="shift-location-button" value={emp.id}>Selecionar</button></li>)
                            }
                            <p>**PM**</p>
                            {
                                pmShiftDivino.map((emp:any) => <li className="modal-li" key={emp.id}><span>{emp.name}</span><button className="shift-location-button" value={emp.id} onClick={shiftSwitch}>Turno</button><button className="shift-location-button" onClick={locationSwitch} value={emp.id}>Ubi</button><button onClick={selectEmp} className="shift-location-button" value={emp.id}>Selecionar</button></li>)
                            }
                        </ul>
                    </div>
                    <div className="modal-form-div">
                        <form className="modal-form">
                            <h2>Editar</h2>
                            <div className="edit-employee">
                                <p>Nombre: {selectedEmp.name}</p>
                                <p>Titulo: {selectedEmp.title}</p>
                                <p> Pedicion: <span>{selectedEmp.request.join(", ")}</span></p>
                                <select className="inputs">
                                    <option value ="">Titulo</option>
                                    <option>Estilista</option>
                                    <option>Facialist</option>
                                    <option>Masajista</option>
                                    <option>Pilacion</option>
                                    <option>Technica de unas</option>
                                </select>
                                <button className="inputs">Editar</button>
                            </div>
                        </form>
                        <form className="modal-form">
                            <h2>Pedicion</h2>
                            <select onChange={e => setRequestDay(e.target.value)} className="inputs">
                                <option value="">Dia</option>
                                <option value="Lunes">Lunes</option>
                                <option value="Martes">Martes</option>
                                <option value="Miericoles">Miericoles</option>
                                <option value="Jueves">Jueves</option>
                                <option value="Viernes">Viernes</option>
                                <option value="Sabado">Sabado</option>
                                <option value="Domingo">Domingo</option>
                            </select>
                            <select onChange={requester} className="inputs">
                                <option value="">Turno</option>
                                <option value="AM">AM</option>
                                <option value="PM">PM</option>
                            </select>
                            <button onClick={submitRequest} className="inputs">Pedir</button>
                        </form>
                    </div>
                </div>
            </div>    
        </aside>
    )
}



export default EditModal