
 import Appointment from '../Appointment/Appointment'
 import './Appointments.css'

const Appointments = ({appointments, onDelete, onToggle}) => {

   
    return (
        <div className='appointments'>
            {appointments.map((appointment)=> (
            <Appointment 
            key={appointment.id}
            appointment={appointment}
            onDelete={onDelete}
            onToggle={onToggle}
            /> 
            ))}
        </div>
    )
}

export default Appointments
