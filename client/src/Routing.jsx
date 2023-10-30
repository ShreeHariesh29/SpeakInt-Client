import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/pages/Dashboard';
import UserActivity from './components/pages/UserActivity';
import UserGroups from './components/pages/UserGroups';
import UserManagement from './components/pages/UserManagement';
import UserUpload from './components/pages/UserUpload';
import Layout from './components/pages/Layout';
import Navbar from './components/Nav and side bar components/Navbar';
import Sidebar from './components/Nav and side bar components/Sidebar';

function Routing() {
  return (
    <BrowserRouter>
    <Routes>
    <div style={{display:'flex'}} >
        <Sidebar />
        <div style={{width:'100%'}}>
        <Navbar />
        <div style={{width:'90vw',height:'90vh'}}>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/Usermanage" element={<UserManagement />} />
        <Route path="/Useractivity" element={<UserActivity />} />
        <Route path="/Usergroups" element={<UserGroups />} />
        <Route path="/Userupload" element={<UserUpload />} /> 

        </div>
        
        </div>

    </div>

    
    </Routes>
     
   </BrowserRouter>
  )
}

export default Routing