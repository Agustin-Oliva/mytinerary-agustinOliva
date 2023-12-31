import Dropdown from 'react-bootstrap/Dropdown';
import { Link as RouterLink } from 'react-router-dom'
import './ButtonDropdown.css'



function ButtonDropdown() {
  
  return (
    <div className='nav-dropdown'>
    <Dropdown >
      <Dropdown.Toggle variant="success" id="dropdown-basic" className='dropdown-btn'>
        Menu
      </Dropdown.Toggle>

      <Dropdown.Menu className='dropdown-list'>
      <Dropdown.Item as={RouterLink} to={'/'} className='dropdown-link'>Home</Dropdown.Item>
      <Dropdown.Item as={RouterLink} to={'/Cities'} className='dropdown-link'>Cities</Dropdown.Item>
      <Dropdown.Item as={RouterLink} to={"#"} className='dropdown-link'>Login</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
  );
}

export default ButtonDropdown;
