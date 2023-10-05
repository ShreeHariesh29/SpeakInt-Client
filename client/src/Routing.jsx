import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/pages/Dashboard';
import UserActivity from './components/pages/UserActivity';
import UserGroups from './components/pages/UserGroups';
import UserManagement from './components/pages/UserManagement';
import UserUpload from './components/pages/UserUpload';
import Layout from './components/pages/Layout';

function Routing() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path ="/" element={<Login />}/>

      <Route  element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/Usermanage" element={<UserManagement />} />
          <Route path="/Useractivity" element={<UserActivity />} />
          <Route path="/Usergroups" element={<UserGroups />} />
          <Route path="/Userupload" element={<UserUpload />} /> 
     
    </Route>
    </Routes>
     
   </BrowserRouter>
  )
}

export default Routing