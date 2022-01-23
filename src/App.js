import './App.css';
import { useEffect, useState , useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddAppointments from './components/AddAppointments';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import Search from './components/Search';
import Appointment from './components/Appointment';

function App() {
  const [appointmentList, setAppointmentList] = useState([]);
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("petName");
  const [orderBy, setOrderBy] = useState('asc');

  const filteredAppoinments = appointmentList.filter(
    item => {
      return(
        item.petName.toLowerCase().includes(query.toLowerCase()) ||
        item.ownerName.toLowerCase().includes(query.toLowerCase()) ||
        item.aptNotes.toLowerCase().includes(query.toLowerCase()) 
      )
    }
  ).sort((a,b) =>{
    let order = (orderBy === 'asc') ? 1 : -1;
    return(
      a[sortBy].toLowerCase() < b[sortBy].toLowerCase()
      ? -1 * order : 1 * order
    )
})

  const fetchData = useCallback(() =>{
    fetch('./data.json')
      .then(response => response.json())
      .then(data =>{
         setAppointmentList(data)
      })
    },[])

  useEffect(() => {
    fetchData()
  },[fetchData]) 
  return (
    <div className="App">
      <h1 className='text-center mb-3 title'>
      <FontAwesomeIcon icon={faCalendarAlt} /> Your Appointments
      </h1>
      <AddAppointments />
      <Search 
        query={query}
        onQueryChange={myQuery=>setQuery(myQuery)}
        orderBy={orderBy}
        onOrderByChange={mySort=>setOrderBy(mySort)}
        sortBy={sortBy}
        onSortByChange={mySort=>setSortBy(mySort)}
      />
      <ul className=''>
      {
      filteredAppoinments.map(appointment =>(
          <Appointment key={appointment.id} appointment={appointment} 
          onDeleteAppointment={
            appointmentId =>
              setAppointmentList(appointmentList.filter(appointment =>
                  appointment.id !==appointmentId
                ))
          }/>
      ))

      }
       
        </ul>
    </div>
  );
}

export default App;
