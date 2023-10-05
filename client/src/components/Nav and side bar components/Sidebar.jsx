import React from 'react'
import  bluelogo from './Nav and sidebar img/SpeakInt-Blue.png'
import './Sidebar.css';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className='sidebar'>
    <img className='sidelogo' src={ bluelogo } alt="" />
        <ul className='list' >
          <Link to="/dashboard"><li className='sidemenu' >DashBoard</li></Link>
          <Link to="/Usermanage"> <li className='sidemenu' >User Management</li></Link>
          <Link to="/Userupload"><li className='sidemenu' >User Upload Details</li></Link>
          <Link to="/Usergroups"> <li className='sidemenu' >User Groups</li></Link>
          <Link to="/Useractivity"><li className='sidemenu' >User Activities</li></Link>    
        </ul>
      
    </div>
  )
}

export default Sidebar