import React from 'react';
import { BrowserRouter, Route, Routes,  Switch  } from 'react-router-dom';
import './App.css';
import AddUser from './components/User manage components/AddUser';
import Dashboard from './components/pages/Dashboard';
import UserActivity from './components/pages/UserActivity';
import UserGroups from './components/pages/UserGroups';
import UserManagement from './components/pages/UserManagement';
import UserUpload from './components/pages/UserUpload';
import Login from './components/pages/Login';
import Layout from './components/pages/Layout';
import Routing from './Routing';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Layout />}>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/userupload' element={<UserUpload />} />
        <Route path='/usermanagement' element={<UserManagement />} />
        <Route path='/usergroups' element={<UserGroups />} />
          <Route path="/Useractivity" element={<UserActivity />} />
          {/* Add more routes for other pages */}
        </Route>
      </Routes>
   </BrowserRouter>
    
  );
}

export default App;
