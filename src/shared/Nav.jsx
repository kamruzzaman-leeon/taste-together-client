
import { Avatar, Dropdown, Navbar } from 'flowbite-react';

import foodicon from '../assets/icon/food.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    
    const [activeNavItem, setActiveNavItem]=useState('');
    const handleActiveNavItem=item=>{
        setActiveNavItem(item);
    }

       return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        {/* <Link to="/" className="flex items-center"> */}
          <img src={foodicon} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
          <span className=" whitespace-nowrap text-2xl font-bold text-blue-600 ">Taste Together</span>
        {/* </Link>        */}
      </Navbar.Brand>
      <div className="flex md:order-2">
      
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">user</span>
            <span className="block truncate text-sm font-medium">email@address.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Add Food</Dropdown.Item>
          <Dropdown.Item>Manger My Foods</Dropdown.Item>         
          <Dropdown.Item>My Food Request</Dropdown.Item>                  
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link  as={Link} to="/"
         className={`${activeNavItem==='home' ? 'active border-b-4 border-blue-600 text-blue-600 ':'' } hover:outline outline-offset-2 outline-blue-600`} onClick={()=>handleActiveNavItem('home')} >Home</Navbar.Link>

        <Navbar.Link  as={Link} to="/availablefood" 
        className={`${activeNavItem==='availablefood' ? 'active border-b-4 border-blue-600 text-blue-600 ':'' } hover:outline outline-offset-2 outline-blue-600 `} onClick={()=>handleActiveNavItem('availablefood')}>Available Food</Navbar.Link>

        <Navbar.Link  as={Link} to="/signin" 
        className={`${activeNavItem==='signIn' ? 'active border-b-4 border-blue-600 text-blue-600 ':'' } hover:outline outline-offset-2 outline-blue-600 `}onClick={()=>handleActiveNavItem('signIn')}>Login</Navbar.Link>
        
       
      </Navbar.Collapse>
    </Navbar>
  );
      
};

export default Nav;
