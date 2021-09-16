import {useState} from 'react'
import Header from './components/Header/Header'
import Appointments from './components/Appointments/Appointments'
import './App.css';

function App() {
  const [appointments, setAppointments] = useState(
    [
       {
          "name":"aissatou kone",
          "date": "Feb 15 at 3pm",
          "description":"having lunch"
       },
       {
           "name":"Leyla kone",
           "date": "April 2 at 3pm",
           "description":"celebrating Birthday and braiding her hair"
        },
        {
           "name":"Lesha Cruz",
           "date": "Jan 25th at 1pm",
           "description":"Watchinf game together"
        },
        {
           "name":"aissatou kone",
           "date": "Feb 15 at 3pm",
           "description":"having lunch"
        }
       ]
 )
  return (
    <div className="container">
      <Header />
      <Appointments appointments={appointments} />
      
    </div>
  );
}

export default App;
