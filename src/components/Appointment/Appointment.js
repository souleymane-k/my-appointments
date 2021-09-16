import './Appointment.css'

const Appointment = ({text, daty, more}) => {
    return (
        <div className='appointment'>
            <h3>{text}</h3>
            <p>{daty}</p> 
            <p>{more}</p>


        </div>
    )
}

export default Appointment
