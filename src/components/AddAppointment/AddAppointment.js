import {useState} from 'react'
import './AddAppointment.css'

const AddAppointment = ({onAdd}) => {
    const [name, setName]= useState('')
    const [date, setDate]= useState('')
    const [description, setDescription]= useState('')
    const [reminder, setReminder]= useState(false)
    
const onSubmit=(e)=>{
    e.preventDefault();
    if(!name){
        alert('Please add text')
        return 
    }
    onAdd({name, date, description,reminder})
    setName('')
    setDate('')
    setDescription('')
    setReminder(false)
}

    return (
        <form className='add-form' onSubmit={onSubmit}>
            
            <div className='form-control'>
              <label>Name</label>
              <input 
              type='text'
              placeholder='Enter Name'
              value={name}
              onChange={(e)=>setName(e.target.value)} />
            </div>
            <div className='form-control'>
              <label>Date And Time</label>
              <input 
              type='text'
              placeholder='Enter Date And Time'
              value={date} 
              onChange={(e)=>setDate(e.target.value)}/>
            </div>
            <div className='form-control'>
              <label>Description</label>
              <input 
              type='text'
              placeholder='Enter Description'
              value={description} 
              onChange={(e)=>setDescription(e.target.value)}/>
            </div>
            <div className='form-control form-control-check'>
              <label>Reminder</label>
              <input 
              type='checkbox'
              checked={reminder}
              placeholder='Enter Description'
              value={description} 
              onChange={(e)=>setReminder(e.currentTarget.checked)}/>
            </div>
            <input type='submit' value='Save Appointment' className='btn btn-block'/>
        </form>
    )
}

export default AddAppointment
