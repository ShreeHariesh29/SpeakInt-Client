import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './components/User manage components/AddUser';
import Dashboard from './components/pages/Dashboard';
import UserActivity from './components/pages/UserActivity';
import UserGroups from './components/pages/UserGroups';
import UserManagement from './components/pages/UserManagement';
import UserUpload from './components/pages/UserUpload';
import Login from './components/pages/Login';
import Layout from './components/pages/Layout';

function App() {
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
    
  );
}

export default App;
