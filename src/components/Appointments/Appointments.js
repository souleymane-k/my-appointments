
 import Appointment from '../Appointment/Appointment'
 import './Appointments.css'

const Appointments = ({appointments}) => {

   
    return (
        <div className='appointments'>
            {appointments.map((appointment)=> (
            <Appointment 
            text={appointment.name} 
            daty={appointment.date} 
            more={appointment.description}/> 
            ))}
        </div>
    )
}

export default Appointments
