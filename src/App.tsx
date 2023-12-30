import Header from './Components/Header'
import './App.css'
import EmployeeList from './Components/list';
import Calendar from './Components/calendar';
import { useSelector } from 'react-redux';
import EditModal from './Components/editModal';



function App(){

  const {editEmployee} = useSelector((store:any) => store.employee)
  
 return(
  <div className="app-container">
      {editEmployee && <EditModal />}
      <Header />
      <div className="schedule-list-container">
        <EmployeeList />
        <Calendar />
      </div>
  </div>    
 )
}


export default App;