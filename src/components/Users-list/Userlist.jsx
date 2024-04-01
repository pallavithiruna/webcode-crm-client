import React, { useEffect, useState } from 'react'
import './user.css'
import axios from 'axios'
const Userlist = () => {
const[users,setUsers]=useState([])
useEffect(()=>{
axios.get('https://webcode-crm-server.onrender.com/auth/getAllUser')
.then(res=>{
     setUsers(res.data)
     console.log(res.data)
    
})
.catch(err=>{
  console.log(err)
}
)
},[])

const showData=()=>{
  console.log(users)
  console.log(users[0])
}

  return (
    <div className='border'>
      <h2 onClick={showData}>User-list</h2>
  <table>
  <thead>
    <tr>
    <th>Username:</th>
    <th>Gender:</th>
    <th>Role:</th>
    <th>Email id:</th>
    </tr>
  </thead>
  <tbody>
    {
      users.map(
        (user,idx)=>(
          <tr key={idx} >
            <td>{user.username}</td>
            <td>{user.gender}</td>
           <td>{user.role}</td>
            <td>{user.email}</td>
            
          </tr>
        )
      )
      }
  </tbody>
</table>


{/* {users.map((user, index) => (
          <li key={index}>{user.email}</li>
        ))} */}



</div>
  )
}

export default Userlist
