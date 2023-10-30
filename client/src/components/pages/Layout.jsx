import React from 'react'
import Sidebar from '../Nav and side bar components/Sidebar'
import Navbar from '../Nav and side bar components/Navbar'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <div style={{display:'flex'}} >
        <Sidebar />
        <div style={{width:'100%'}}>
        <Navbar />
        <div style={{width:'90vw',height:'90vh'}}>
        <Outlet />
        </div>
        
        </div>

    </div>
  )
}

export default Layout