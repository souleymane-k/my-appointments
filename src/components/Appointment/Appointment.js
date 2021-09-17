import {FaTimes} from 'react-icons/fa'

import './Appointment.css'

const Appointment = ({appointment, onDelete, onToggle}) => {
    return (
        <div className={`appointment ${appointment.reminder ? 'reminder': ''}`} onDoubleClick={()=>onToggle(appointment.id)}>
            <h3>{appointment.name}{' '}
            <FaTimes style={{color :'red', marginLeft:'400'}} onClick={()=>onDelete(appointment.id)} /></h3>
            <p>{appointment.date}</p> 
            <p>{appointment.description}</p>

        </div>
    )
}

export default Appointment
