import {useState} from 'react'
import Header from './components/Header/Header'
import Appointments from './components/Appointments/Appointments'
import './App.css';

function App() {
  const [appointments, setAppointments] = useState(
    [
       {
         "id": 1,
          "name":"aissatou kone",
          "date": "Feb 15 at 3pm",
          "description":"having lunch",
          "reminder":""
       },
       {
           "id":2,
           "name":"Leyla kone",
           "date": "April 2 at 3pm",
           "description":"celebrating Birthday and braiding her hair",
           "reminder":"false"
        },
        {
          "id":3,
           "name":"Barakatou Kone",
           "date": "Jan 25th at 1pm",
           "description":"Watchinf game together",
           "reminder":""
        },
        {
          "id":4,
           "name":"Ousmane kone",
           "date": "Feb 15 at 3pm",
           "description":"having lunch",
           "reminder":"false"
        }
       ]
 )
// delete appointment
 const deleteAppointment=(id)=>{
   setAppointments(appointments.filter((appointment) => appointment.id !== id))
  
 }
// Toggle Reminder
const toggleReminder=(id)=>{
  setAppointments(appointments.map((appointment)=> 
    appointment.id ===id ?
   {...appointment, reminder:!appointment.reminder}: appointment ))
  console.log(id)
}

// Add Appointment

const AddAppointment=(appointment)=>{
  const id = Math.floor(Math.random()*1000)+1
  const newAppointment = {id, ...appointment}
  setAppointments([appointments, newAppointment]);
  
}

  return (
    <div className="container">
      <Header />
      { appointments.length > 0 ? <Appointments
       appointments={appointments}
       onDelete={deleteAppointment}
       onToggle={toggleReminder}
       onAdd={AddAppointment}/> : 'Please Add An Appointment'}
      
    </div>
  );
}

export default App;
