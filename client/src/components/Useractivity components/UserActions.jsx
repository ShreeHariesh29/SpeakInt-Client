import axios from 'axios';
import React, { useState } from 'react';
import './useractions.css';


function UserActions() {

  const [useractivity, setUserActivity] = useState([]);
  const [AdminID, setAdminID] = useState(sessionStorage.getItem("AdminID"));
  const [ClientID, setClientID] = useState(sessionStorage.getItem("ClientID"));
  const [Category, setCategory] = useState(sessionStorage.getItem("Category"));


  const getUserActivity = () => {
    axios.get(``)
    .then((response) =>{ setUserActivity(response.data)})
}
  return (
    <div style={{paddingBottom:'10px'}}>
      <h1 style={{paddingLeft:'20px'}}>User Actions</h1>
      <div className='table'>
        <table style={{backgroundColor:'white', width:'100%', borderRadius:'10px'}}>
          <thead className='tablefield'>
            <tr>
              <th style={{borderRadius:'10px 0px 0px 10px '}}>Sl:No</th>
              <th >Actions</th>
              <th >Type</th>
              <th >User Name</th>
              <th style={{borderRadius:'0px 10px 10px 0px '}} >Date and time</th>
            </tr>
          </thead>
          <tbody>
            <tr >
                <td ><b>1</b></td>
                <td >crime of norcotics</td>
                <td >upload media</td>
                <td >shreehariesh@gmail.com</td>
                <td ><b>29-06-2023</b><br /> <span style={{fontSize:'10px', marginLeft:'15px'}}>06:23 PM</span> </td>
            </tr>
            <tr>
                <td ><b>2</b></td>
                <td >crime of norcotics</td>
                <td >upload media</td>
                <td >shreehariesh@gmail.com</td>
                <td ><b>29-06-2023</b><br /> <span style={{fontSize:'10px', marginLeft:'15px'}}>06:23 PM</span> </td>
            </tr>
        </tbody>
        </table>
      </div>
    </div>
  )
}

export default UserActions