import { useSelector} from "react-redux"






const Calendar = () => {
    
    const allEmployees = useSelector((store:any) => store.employee.employees)
    const terramarAmLunes = allEmployees.filter((emp: any) => emp.location == "Terramar" && emp.shift == "AM" && emp.request.indexOf("LunesAM") < 0 && emp.request.indexOf("Lunes") < 0 ).concat(allEmployees.filter((emp:any) => emp.request.indexOf("LunesPM") >= 0))
    const terramarPmLunes = allEmployees.filter((emp: any) => emp.location == "Terramar" && emp.shift == "PM" && emp.request.indexOf("LunesPM") < 0 && emp.request.indexOf("Lunes") < 0).concat(allEmployees.filter((emp:any) => emp.request.indexOf("LunesAM") >= 0))
    const terramarAmMartes = allEmployees.filter((emp: any) => emp.location == "Terramar" && emp.shift == "AM" && emp.request.indexOf("MartesAM") < 0 && emp.request.indexOf("Martes") < 0)
    const terramarPmMartes = allEmployees.filter((emp: any) => emp.location == "Terramar" && emp.shift == "PM" && emp.request.indexOf("MartesPM") < 0 && emp.request.indexOf("Martes") < 0)
    const terramarAmMiercoles = allEmployees.filter((emp: any) => emp.location == "Terramar" && emp.shift == "AM" && emp.request.indexOf("MiercolesAM") < 0 && emp.request.indexOf("Miercoles") < 0)
    const terramarPmMiercoles = allEmployees.filter((emp: any) => emp.location == "Terramar" && emp.shift == "PM" && emp.request.indexOf("MiercolesPM") < 0 && emp.request.indexOf("Miercoles") < 0)
    const terramarAmJueves = allEmployees.filter((emp: any) => emp.location == "Terramar" && emp.shift == "AM" && emp.request.indexOf("JuevesAM") < 0 && emp.request.indexOf("Jueves") < 0)
    const terramarPmJueves = allEmployees.filter((emp: any) => emp.location == "Terramar" && emp.shift == "PM" && emp.request.indexOf("JuevesPM") < 0 && emp.request.indexOf("Jueves") < 0)
    const terramarAmViernes = allEmployees.filter((emp: any) => emp.location == "Terramar" && emp.shift == "AM" && emp.request.indexOf("ViernesAM") < 0 && emp.request.indexOf("Viernes") < 0)
    const terramarPmViernes = allEmployees.filter((emp: any) => emp.location == "Terramar" && emp.shift == "PM" && emp.request.indexOf("ViernesPM") < 0 && emp.request.indexOf("Viernes") < 0)
    const terramarAmSabado = allEmployees.filter((emp: any) => emp.location == "Terramar" && emp.shift == "AM" && emp.request.indexOf("SabadoAM") < 0 && emp.request.indexOf("Sabado") < 0)
    const terramarPmSabado = allEmployees.filter((emp: any) => emp.location == "Terramar" && emp.shift == "PM" && emp.request.indexOf("SabadoPM") < 0 && emp.request.indexOf("Sabado") < 0)
    const terramarAmDomingo = allEmployees.filter((emp: any) => emp.location == "Terramar" && emp.shift == "AM" && emp.request.indexOf("DomingoAM") < 0 && emp.request.indexOf("Domingo") < 0)
    const terramarPmDomingo = allEmployees.filter((emp: any) => emp.location == "Terramar" && emp.shift == "PM" && emp.request.indexOf("DomingoAM") < 0 && emp.request.indexOf("Domingo") < 0)
    
    // Divinoo //

    const divinoAmLunes = allEmployees.filter((emp: any) => emp.location == "Divino" && emp.shift == "AM" && emp.request.indexOf("LunesAM") < 0 && emp.request.indexOf("Lunes") < 0)
    const divinoPmLunes = allEmployees.filter((emp: any) => emp.location == "Divino" && emp.shift == "PM" && emp.request.indexOf("LunesPM") < 0 && emp.request.indexOf("Lunes") < 0)
    const divinoAmMartes = allEmployees.filter((emp: any) => emp.location == "Divino" && emp.shift == "AM" && emp.request.indexOf("MartesAM") < 0 && emp.request.indexOf("Martes") < 0)
    const divinoPmMartes = allEmployees.filter((emp: any) => emp.location == "Divino" && emp.shift == "PM" && emp.request.indexOf("MartesPM") < 0 && emp.request.indexOf("Martes") < 0)
    const divinoAmMiercoles = allEmployees.filter((emp: any) => emp.location == "Divino" && emp.shift == "AM" && emp.request.indexOf("MiercolesAM") < 0 && emp.request.indexOf("Miercoles") < 0)
    const divinoPmMiercoles = allEmployees.filter((emp: any) => emp.location == "Divino" && emp.shift == "PM" && emp.request.indexOf("MiercolesPM") < 0 && emp.request.indexOf("Miercoles") < 0)
    const divinoAmJueves = allEmployees.filter((emp: any) => emp.location == "Divino" && emp.shift == "AM" && emp.request.indexOf("JuevesAM") < 0 && emp.request.indexOf("Jueves") < 0)
    const divinoPmJueves = allEmployees.filter((emp: any) => emp.location == "Divino" && emp.shift == "PM" && emp.request.indexOf("JuevesPM") < 0 && emp.request.indexOf("Jueves") < 0)
    const divinoAmViernes = allEmployees.filter((emp: any) => emp.location == "Divino" && emp.shift == "AM" && emp.request.indexOf("ViernesAM") < 0 && emp.request.indexOf("Viernes") < 0)
    const divinoPmViernes = allEmployees.filter((emp: any) => emp.location == "Divino" && emp.shift == "PM" && emp.request.indexOf("ViernesPM") < 0 && emp.request.indexOf("Viernes") < 0)
    const divinoAmSabado = allEmployees.filter((emp: any) => emp.location == "Divino" && emp.shift == "AM" && emp.request.indexOf("SabadoAM") < 0 && emp.request.indexOf("Sabado") < 0)
    const divinoPmSabado = allEmployees.filter((emp: any) => emp.location == "Divino" && emp.shift == "PM" && emp.request.indexOf("SabadoPM") < 0 && emp.request.indexOf("Sabado") < 0)
    const divinoAmDomingo = allEmployees.filter((emp: any) => emp.location == "Divino" && emp.shift == "AM" && emp.request.indexOf("DomingoAM") < 0 && emp.request.indexOf("Domingo") < 0)
    const divinoPmDomingo = allEmployees.filter((emp: any) => emp.location == "Divino" && emp.shift == "PM" && emp.request.indexOf("DomingoAM") < 0 && emp.request.indexOf("Domingo") < 0)
    
    
    

    




    return (
        <div className="calendar-wrapper">
            <div className="calendar">
                <div className="days" id="monday">
                    <h4>Terramar Lunes</h4>
                    <ul className="modal-lists">
                        <p>**AM**</p>
                        {
                            terramarAmLunes.map((emp:any) => <li key={emp.id} value={emp.id}>{emp.name}</li>)
                        }
                        <p>**PM**</p>
                        {
                            terramarPmLunes.map((emp:any) => <li key={emp.id} value={emp.id}>{emp.name}</li>)
                        }
                    </ul>
                </div>
                <div className="days" id="tuesday">
                    <h4>Martes</h4>
                <ul className="modal-lists">
                        <p>**AM**</p>
                        {
                            terramarAmMartes.map((emp:any) => <li key={emp.id} value={emp.id}>{emp.name}</li>)
                        }
                        <p>**PM**</p>
                        {
                            terramarPmMartes.map((emp:any) => <li key={emp.id} value={emp.id}>{emp.name}</li>)
                        }
                    </ul>
                </div>
                <div className="days" id="wedensday">
                    <h4>Miercoles</h4>
                <ul className="modal-lists">
                        <p>**AM**</p>
                        {
                            terramarAmMiercoles.map((emp:any) => <li key={emp.id} value={emp.id}>{emp.name}</li>)
                        }
                        <p>**PM**</p>
                        {
                            terramarPmMiercoles.map((emp:any) => <li key={emp.id} value={emp.id}>{emp.name}</li>)
                        }
                    </ul>
                </div>
                <div className="days" id="thursday">
                    <h4>Jueves</h4>
                <ul className="modal-lists">
                        <p>**AM**</p>
                        {
                            terramarAmJueves.map((emp:any) => <li key={emp.id} value={emp.id}>{emp.name}</li>)
                        }
                        <p>**PM**</p>
                        {
                            terramarPmJueves.map((emp:any) => <li key={emp.id} value={emp.id}>{emp.name}</li>)
                        }
                    </ul>
                </div>
                <div className="days" id="friday">
                    <h4>Viernes</h4>
                <ul className="modal-lists">
                        <p>**AM**</p>
                        {
                            terramarAmViernes.map((emp:any) => <li key={emp.id} value={emp.id}>{emp.name}</li>)
                        }
                        <p>**PM**</p>
                        {
                            terramarPmViernes.map((emp:any) => <li key={emp.id} value={emp.id}>{emp.name}</li>)
                        }
                    </ul>
                </div>
                <div className="days" id="saturday">
                    <h4>Sabado</h4>
                <ul className="modal-lists">
                        <p>**AM**</p>
                        {
                            terramarAmSabado.map((emp:any) => <li key={emp.id} value={emp.id}>{emp.name}</li>)
                        }
                        <p>**PM**</p>
                        {
                            terramarPmSabado.map((emp:any) => <li key={emp.id} value={emp.id}>{emp.name}</li>)
                        }
                    </ul>
                </div>
                <div className="days" id="sunday">
                    <h4>Domingo</h4>
                <ul className="modal-lists">
                        <p>**AM**</p>
                        {
                            terramarAmDomingo.map((emp:any) => <li key={emp.id} value={emp.id}>{emp.name}</li>)
                        }
                        <p>**PM**</p>
                        {
                            terramarPmDomingo.map((emp:any) => <li key={emp.id} value={emp.id}>{emp.name}</li>)
                        }
                    </ul>
                </div>
            </div>
            <div className="calendar">
                <div className="days" id="monday">
                    <h4>Divino Lunes</h4>
                <ul className="modal-lists">
                        <p>**AM**</p>
                        {
                            divinoAmLunes.map((emp:any) => <li key={emp.id} value={emp.id}>{emp.name}</li>)
                        }
                        <p>**PM**</p>
                        {
                            divinoPmLunes.map((emp:any) => <li key={emp.id} value={emp.id}>{emp.name}</li>)
                        }
                    </ul>
                </div>
                <div className="days" id="tuesday">
                    <h4>Martes</h4>
                <ul className="modal-lists">
                        <p>**AM**</p>
                        {
                            divinoAmMartes.map((emp:any) => <li key={emp.id} value={emp.id}>{emp.name}</li>)
                        }
                        <p>**PM**</p>
                        {
                            divinoPmMartes.map((emp:any) => <li key={emp.id} value={emp.id}>{emp.name}</li>)
                        }
                    </ul>
                </div>
                <div className="days" id="wedensday">
                    <h4>Miercoles</h4>
                <ul className="modal-lists">
                        <p>**AM**</p>
                        {
                            divinoAmMiercoles.map((emp:any) => <li key={emp.id} value={emp.id}>{emp.name}</li>)
                        }
                        <p>**PM**</p>
                        {
                            divinoPmMiercoles.map((emp:any) => <li key={emp.id} value={emp.id}>{emp.name}</li>)
                        }
                    </ul>
                </div>
                <div className="days" id="thursday">
                    <h4>Jueves</h4>
                <ul className="modal-lists">
                        <p>**AM**</p>
                        {
                            divinoAmJueves.map((emp:any) => <li key={emp.id} value={emp.id}>{emp.name}</li>)
                        }
                        <p>**PM**</p>
                        {
                            divinoPmJueves.map((emp:any) => <li key={emp.id} value={emp.id}>{emp.name}</li>)
                        }
                    </ul>
                </div>
                <div className="days" id="friday">
                    <h4>Viernes</h4>
                <ul className="modal-lists">
                        <p>**AM**</p>
                        {
                            divinoAmViernes.map((emp:any) => <li key={emp.id} value={emp.id}>{emp.name}</li>)
                        }
                        <p>**PM**</p>
                        {
                            divinoPmViernes.map((emp:any) => <li key={emp.id} value={emp.id}>{emp.name}</li>)
                        }
                    </ul>
                </div>
                <div className="days" id="saturday">
                    <h4>Sabado</h4>
                <ul className="modal-lists">
                        <p>**AM**</p>
                        {
                            divinoAmSabado.map((emp:any) => <li key={emp.id} value={emp.id}>{emp.name}</li>)
                        }
                        <p>**PM**</p>
                        {
                            divinoPmSabado.map((emp:any) => <li key={emp.id} value={emp.id}>{emp.name}</li>)
                        }
                    </ul>
                </div>
                <div className="days" id="sunday">
                    <h4>Domingo</h4>
                <ul className="modal-lists">
                        <p>**AM**</p>
                        {
                            divinoAmDomingo.map((emp:any) => <li key={emp.id} value={emp.id}>{emp.name}</li>)
                        }
                        <p>**PM**</p>
                        {
                            divinoPmDomingo.map((emp:any) => <li key={emp.id} value={emp.id}>{emp.name}</li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
        
    )
}




export default Calendar