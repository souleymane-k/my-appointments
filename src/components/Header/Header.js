import Button from '../Button/Button'
import './Header.css'
const Header = ({ title, onAdd, showAdd}) => {
    return (
        <header className='header'>
              <h1>{title}</h1>
              <Button
              color={showAdd?'red':'green'} 
              text={showAdd ? 'Close':'Add Appointment'}
              onClick={onAdd} />
        </header>
    )
}
// default props
Header.defaultProps = {
    title: 'My Appointments'
}

export default Header
