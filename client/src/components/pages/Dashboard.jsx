import React, { useState } from 'react';
import logo from './img/profile_icon-removebg-preview.png';
import userlogo from './img/—Pngtree—user vector icon_3788518 (1).png';

import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';



function Dashboard() {
  const [AdminID, setAdminId] = useState([])

  // axios.get(`http://192.168.70.127:8089/upload_admin_date/${AdminID}`)
  // .then((response) =>{ console.log(response.data)})
  

  const data = [
    {
      name: '3/03/23',
      uv: 590,
      pv: 800,
      amt: 1400,
    },
    {
      name: '4/03/23',
      uv: 868,
      pv: 967,
      amt: 1506,
    },
    {
      name: '5/03/23',
      uv: 1397,
      pv: 1098,
      amt: 989,
    },
    {
      name: '6/03/23',
      uv: 1480,
      pv: 1200,
      amt: 1228,
    },
    {
      name: '7/03/23',
      uv: 1520,
      pv: 1108,
      amt: 1100,
    },
    {
      name: '8/03/23',
      uv: 1400,
      pv: 680,
      amt: 1700,
    },
    {
      name: '9/03/23',
      uv: 1000,
      pv: 680,
      amt: 1700,
    },
    {
      name: '10/03/23',
      uv: 1600,
      pv: 680,
      amt: 1700,
    },
    {
      name: '11/03/23',
      uv: 1400,
      pv: 680,
      amt: 1700,
    },
    {
      name: '12/03/23',
      uv: 1500,
      pv: 680,
      amt: 1700,
    },
    {
      name: '13/03/23',
      uv: 1000,
      pv: 680,
      amt: 1700,
    },
    {
      name: '14/03/23',
      uv: 1800,
      pv: 680,
      amt: 1700,
    },
    {
      name: '15/03/23',
      uv: 1500,
      pv: 680,
      amt: 1700,
    },
    {
      name: '16/03/23',
      uv: 1700,
      pv: 680,
      amt: 1700,
    },
    {
      name: '17/03/23',
      uv: 400,
      pv: 680,
      amt: 1700,
    },
    {
      name: '18/03/23',
      uv: 1000,
      pv: 680,
      amt: 1700,
    },
  ];
  return (
    <div style={{ height:'90vh', margin:'10px 10px 10px 10px', borderRadius:'5px',backgroundColor:'white', marginLeft:'10px',border:'1px #c2c2c2 solid', fontFamily:'Arial, Helvetica, sans-serif'}}>
      <div style={{display:'flex',justifyContent:'space-between',marginRight:'25px',marginLeft:'25px',marginTop:'20px'}}>
        <p style={{fontSize:'14px'}}>03/10/2023 - 02:30 pm</p>
        <p>License Date - 29/06/2023</p>
      </div>
      <div style={{display:'flex',}}>
        <div style={{width:'70%',marginTop:'20px',border:'1px #c2c2c2 solid',marginLeft:'20px',height:'45vh', borderRadius:'5px',boxShadow:'2px 2px 4px gray'}}>
          <p style={{fontFamily:'Arial, Helvetica, sans-serif', marginLeft:'3%', marginTop:'2%'}}>Barchart</p>
          <ComposedChart
      width={900}
      height={300}
      data={data}
      margin={{
        top: 30,
        right: 30,
        bottom: 20,
        left: 20
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="name" scale="band" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="uv" barSize={20} fill="#413ea0" />
      <Line type="monotone" dataKey="uv" stroke="#ff7300" />
    </ComposedChart>
        </div>
        <div style={{marginTop:'20px',marginLeft:'10px',height:'45vh',width:'30%',marginRight:'20px'}}>
          <div style={{height:'20%',border:'1px #c2c2c2 solid',display:'flex',justifyContent:'space-between', borderRadius:'5px',boxShadow:'2px 2px 4px gray'}}>
            <div style={{marginLeft:'2px',display:'flex',width:'300px'}}>
            <img style={{height:'50px', marginTop:'8px',marginLeft:'10px'}}  src={logo} alt="" />
              <p style={{marginTop:'5%',marginLeft:'6%'}}>Name of the Admin <br /> Admin </p>
            </div>
            <img style={{height:'40px',marginRight:'20px',marginTop:'10px'}} src={userlogo} alt="" />
            
          </div>
        <div style={{height:'75%',border:'0.5px #c2c2c2 solid',marginTop:'13px', borderRadius:'5px',boxShadow:'2px 2px 4px gray'}}>
          <p style={{marginLeft:'5%',marginTop:'5%', }}>Organization</p>
        </div>
        </div>
        </div>
        <div style={{display:'flex',justifyContent:'space-between',marginRight:'25px',marginLeft:'25px',marginTop:'20px'}}>
          <div style={{width:'30%',borderRadius:'5px',boxShadow:'2px 2px 4px gray',height:'31vh'}}>
            <p style={{fontFamily:'Arial, Helvetica, sans-serif', marginLeft:'3%', marginTop:'3%'}}>Client Activities</p>
            {/* <div style={{width:'90%',margin:'6px',height:'23%',display:'flex',borderRadius:'5px', justifyContent:'space-between'}}>
              <p style={{fontSize:'10px', margin:'5px' , marginLeft:'5px'}}>Total <br /> <span style={{fontSize:'20px',}}>Upload - </span> <span  style={{fontSize:'30px', margin:'5px'}} > 45 </span> </p>
              <p style={{fontSize:'10px', margin:'5px',marginRight:'5px'}}>Total <br /> <span style={{fontSize:'20px'}}>Users - </span><span  style={{fontSize:'30px', margin:'5px'}} > 45 </span> </p>
            </div>
            <div style={{width:'90%',margin:'6px',height:'23%',display:'flex',borderRadius:'5px', justifyContent:'space-between'}}>
              <p style={{fontSize:'10px', margin:'5px' , marginLeft:'5px'}}>Total <br /> <span style={{fontSize:'20px',}}>Upload - </span> <span  style={{fontSize:'30px', margin:'5px'}} > 45 </span> </p>
              <p style={{fontSize:'10px', margin:'5px',marginRight:'5px'}}>Total <br /> <span style={{fontSize:'20px'}}>Users - </span><span  style={{fontSize:'30px', margin:'5px'}} > 45 </span> </p>
            </div>
            <div style={{width:'90%',margin:'6px',height:'23%',display:'flex',borderRadius:'5px', justifyContent:'space-between'}}>
              <p style={{fontSize:'10px', margin:'5px' , marginLeft:'5px'}}>Total <br /> <span style={{fontSize:'20px',}}>Upload - </span> <span  style={{fontSize:'30px', margin:'5px'}} > 45 </span> </p>
              <p style={{fontSize:'10px', margin:'5px',marginRight:'5px'}}>Total <br /> <span style={{fontSize:'20px'}}>Users - </span><span  style={{fontSize:'30px', margin:'5px'}} > 45 </span> </p>
            </div> */}
            <div style={{marginTop:'10px',height:'85%'}}>
            <table style={{width:'90%',marginLeft:'10px',height:'90%', borderRadius:'5px',paddingTop:'5px'}}>
        <thead >
          <tr  >
            <th style={{fontSize:'15px',height:'30px',width:'20%',borderRadius:'5px 0px 0px 5px',borderRight:'1px gray solid'}}>Sl:no</th>
            <th style={{fontSize:'15px',height:'30px',borderRight:'1px gray solid'}}>Actions</th>
            <th style={{fontSize:'15px',height:'30px',borderRadius:'0px 5px 5px 0px'}}>Users</th>
          </tr>
        </thead>
        <tbody style={{width:'90%',textAlign:'center',fontSize:'12px'}}>
          <tr>
            <td>1</td>
            <td>data 1</td>
            <td>data 2</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Data 5</td>
            <td>Data 6</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Data 5</td>
            <td>Data 6</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Data 5</td>
            <td>Data 6</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
            </div>
          </div>
          <div style={{width:'30%',borderRadius:'5px',boxShadow:'2px 2px 4px gray',height:'31vh'}}>
          <p style={{fontFamily:'Arial, Helvetica, sans-serif', marginLeft:'3%', marginTop:'3%'}}>User Groups</p>
          <div style={{marginTop:'10px',height:'85%'}}>
            <table style={{width:'90%',marginLeft:'10px',height:'90%', borderRadius:'5px',paddingTop:'5px'}}>
        <thead >
          <tr  >
            <th style={{fontSize:'15px',height:'30px',width:'20%',borderRadius:'5px 0px 0px 5px',borderRight:'1px gray solid'}}>Sl:no</th>
            <th style={{fontSize:'15px',height:'30px',borderRight:'1px gray solid'}}>Group Name</th>
            <th style={{fontSize:'15px',height:'30px',borderRadius:'0px 5px 5px 0px'}}>No.of Users</th>
          </tr>
        </thead>
        <tbody style={{width:'90%',textAlign:'center',fontSize:'12px'}}>
          <tr>
            <td>1</td>
            <td>data 1</td>
            <td>data 2</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Data 5</td>
            <td>Data 6</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Data 5</td>
            <td>Data 6</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Data 5</td>
            <td>Data 6</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
            </div>
          </div>
          <div style={{width:'30%',borderRadius:'5px',boxShadow:'2px 2px 4px gray',height:'31vh'}}>
          <p style={{fontFamily:'Arial, Helvetica, sans-serif', marginLeft:'3%', marginTop:'3%'}}>Languages</p>
          <div style={{width:'90%', margin:'10px'}}>
            <button style={{width:'30%', height:'30px',marginTop:'10px',textAlign:'center',marginLeft:'10px',borderRadius:'5px',border:'none'}}>Tamil</button>
            <button style={{width:'30%', height:'30px',marginTop:'10px',textAlign:'center',marginLeft:'10px',borderRadius:'5px',border:'none'}}>Tamil</button>
            <button style={{width:'30%', height:'30px',marginTop:'10px',textAlign:'center',marginLeft:'10px',borderRadius:'5px',border:'none'}}>Tamil</button>
            <button style={{width:'30%', height:'30px',marginTop:'10px',textAlign:'center',marginLeft:'10px',borderRadius:'5px',border:'none'}}>Tamil</button>
            <button style={{width:'30%', height:'30px',marginTop:'10px',textAlign:'center',marginLeft:'10px',borderRadius:'5px',border:'none'}}>Tamil</button>
            <button style={{width:'30%', height:'30px',marginTop:'10px',textAlign:'center',marginLeft:'10px',borderRadius:'5px',border:'none'}}>Tamil</button>
          </div>
          </div>
        </div>
      
    </div>
  )
}

export default Dashboard