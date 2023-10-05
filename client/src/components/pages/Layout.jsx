import React from 'react'
import Sidebar from '../Nav and side bar components/Sidebar'
import Navbar from '../Nav and side bar components/Navbar'

function Layout() {
  return (
    <div style={{display:'flex'}} >
        <Sidebar />
        <div style={{width:'100%'}}>
        <Navbar />
        <div style={{width:'90vw',height:'90vh'}}>
        
        </div>
        
        </div>

    </div>
  )
}

export default Layout