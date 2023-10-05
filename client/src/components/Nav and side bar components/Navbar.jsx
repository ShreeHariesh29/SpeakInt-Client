import React from 'react'
import './Nav.css'
function Navbar() {
  return (
    <div className='nav'>
        <div>welcome Admin</div>
        <div>
            <ul className='navlist'>
                <li>info</li>
                <li>notification</li>
                <li>profile</li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar