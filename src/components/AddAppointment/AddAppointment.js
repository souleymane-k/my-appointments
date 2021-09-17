import {useState} from 'react'

const AddAppointment = () => {
    const [name, setName]= useState('')
    const [date, setDate]= useState('')
    const [description, setDescription]= useState('')
    const [reminder, setReminder]= useState(false)
    
const onSubmit=(e)=>{
    e.preventDefault();
}

    return (
        <form className='form' onSubmit={onSubmit}>
            {/* <h2>Add Appointment</h2> */}
            <div className='form-control'>
              <label>Name</label>
              <input 
              type='text'
              placeholder='Enter Name'
              value={name}
              onChange={(e)=>setName(e.target.value)} />
            </div>
            <div className='form-control'>
              <label>Date</label>
              <input 
              type='text'
              placeholder='Enter Date'
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
            <div className='form-control'>
              <label>Description</label>
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
