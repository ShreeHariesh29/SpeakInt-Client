import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './userdetail.css';


function UserDetails() {

    // const [client, SetClient] = useState([]);
    // const  [ adminId, SetAdminId] = useState(7);
    // const [adduser, SetAddUser] = useState(false);
    // const [profile, SetProfile] = useState(false);
    // const [password, SetPassword] = useState();
    // const [user_name, SetUser_Name] = useState();

    // const [newuser, setNewUser] = useState({
    //     user_name:'',
    //     password:'',
    // });

    // useEffect(()=>{
    //    getClient() 
    //     console.log(client)
    // },[]);
    

    // const getClient = () => {
    //     axios.get(`http://192.168.70.127:8089/user_created/${adminId}`)
    //     .then((response) =>{ SetClient(response.data)})
    // }

    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    
    //     try {
    //       const response = await axios.post(`http://192.168.70.110:8081/addClient/${adminId}/${user_name}/${password}`,{newuser});

    //       console.log('Response:', response.data);
    //       getClient()
    //     } catch (error) {
    //       console.error('Error:', error);
    //     }
    //   };

    // const handleInputemail = (e) =>{
    //     SetUser_Name(e.target.value)
    // }
    // const handleInputpassword = (e) =>{
    //     SetPassword(e.target.value);
    // }
    
    // // const handleSubmit = () =>{
    // //     console.log(newuser);
    // //     console.log(password);
    // // }

    // const toggleModel =() =>{
    //     SetAddUser(!adduser)
    // }
    // const profileModel =() => {
    //     SetProfile(!profile)
    // }

//   return (
//     <div className='userdetails' style={{width:'100%', height:'92vh'}}>

//         {/* Add User form  */}
//         { adduser && (
//             <div className='adduser'>
//             <div  className='overlay'>
            
//             <div className='adduserform'   style={{backgroundColor:'#D9D9D9'}}>
//                 <button onClick={toggleModel} style={{width:'50px', height:'20px', marginLeft:'10px'}}>close</button>
                
//                 <h3 style={{textAlign:'center', fontSize:'25px', marginTop:'10px', color:'#020136'}}>Add New Users</h3>
//                 <form onSubmit={handleSubmit} >
//                     <div style={{marginTop:'25px',}}>
//                     <label className='form' style={{marginTop:'5px', fontSize: '15px',color:'black'}}>Username:</label> <br />
//                     <input className='form' type="email" name='email' onChange={handleInputemail} value={user_name} style={{width:'90%', borderRadius:'4px', border:'gray 1px solid', height:'25px', paddingLeft:'5px'}} type="text" />
//                     </div>
//                     <div style={{marginTop:'10px',}}>
//                     <label className='form' style={{marginTop:'5px', fontSize: '15px',color:'black'}}>Password:</label> <br />
//                     <input className='form' onChange={handleInputpassword } value={password} style={{width:'90%', borderRadius:'4px', border:'gray 1px solid', height:'25px', paddingLeft:'5px'}} type="text" />
//                     </div>
                    
//                 </form>
//                 <button onClick={handleSubmit}  style={{marginLeft:'37%',marginTop:'10%', width:'80px', height:'30px', backgroundColor:'#002D71', color:'white', borderRadius: '5px', border:'none' }}>Submit
//                 </button>
//             </div>
//             </div>
            
//         </div>

//         )}
//         {/* Add User for ends */}

//         <h1 style={{paddingTop:'3%', paddingLeft:'3%'}}>UserDetails</h1>
//         <div className='butone'><button onClick={toggleModel} style={{color:'white',  width:'120px', height:'40px', backgroundColor:'#002D71', border:'none', margin:'0px', marginLeft: '83%', borderRadius:'5px'}}>Add Users</button></div>

        
//         <div className='maincontainer'>
//             { client.map((value) => {
//                 return <div className='Userprofilecard'>
//                 <div className='profileimg' ><h1 style={{textAlign:'center', paddingTop:'28px', fontSize:'40px' }}>{value.Usernames.slice(0,1).toUpperCase()}</h1></div>
//                  <h3>{value.Usernames}</h3>
//                  <p style={{textAlign:'center'}}>{value.ClientID}</p>
//                  <div className='butdiv'>
//                      <button className='buttwo' style={{borderColor:'#ED2727'}}>Delete</button>
//                      <button className='buttwo'style={{borderColor:'#42F20D', padding:'0px 9px 0px 9px'}}>Edit</button>
//                      <button onClick={profileModel} className='buttwo' style={{borderColor:'#0D49F2'}}>View Profile</button>
//                  </div>
//                  {profile && (
//                      <div className='viewprofilecontainer'>
//                      <h5>{value.Usernames}</h5>
//                      <p></p>
//                   </div>
//                  )}
                
//              </div>
             
//             })}

//         </div>
        
//     </div>
//   )
}

export default UserDetails

// http://192.168.70.127:8089/addClient/${adminId}/${user_name}/${password}`,{newuser}