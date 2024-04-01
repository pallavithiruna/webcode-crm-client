

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './contact.css';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'

export default function Contact({Updatecontact}) {
  const navigate=useNavigate();
    const [data, setData] = useState([])

    useEffect(() => {
        async function FeatchData() {
            try {
                const user = await axios.get('https://webcode-crm-server.onrender.com/auth/getcontact')
                const response = user.data
                // console.log(response.users)
                setData(response)
                // console.log(response.data.users.email, 'email')
            } catch (error) {
                console.log(error)
            }
        }
        FeatchData()
    }, [data])
//delete area start
    const handleDelete = async (id) => {
      try {
          const DeleteUser = await axios.delete(`https://webcode-crm-server.onrender.com/auth/deletecontact/${id}`)
          const response = DeleteUser.data
          if (response.success) {
              toast.success(response.message)
              navigate('/contact')
              // FeatchData()
          }
      } catch (error) {
          console.log(error)
      }
  }
//delete area end
    return (
        <>
            <div className='table-position'>
                <div className="table-wrapper">
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Name</th>
                                <th>Father</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.users?.map((elem, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{elem.name}</td>
                                        <td>{elem.companyname}</td>
                                        <td>{elem.address}</td>
                                        <td>{elem.phone}</td>
                                        <td>
                                            {/* <a href="#" className="edit cursor-pointer" data-bs-toggle="modal" data-bs-target="#editEmployeeModal" 
                                            onClick={() => {
                                            
                                              navigate(`/updatecontact/${elem._id}`)
                                            }
                                            }
                                            >
                                            <i class="fa-solid fa-pen"style={{fontSize:'20px'}}></i> 
                                            </a> */}
                                            <Link to={`/updatecontact/${elem._id}`}> <i class="fa-solid fa-pen"style={{fontSize:'20px'}}></i> </Link>
                                            <a href="#" className="delete cursor-pointer" data-bs-toggle="modal" data-bs-target="#deleteEmployeeModal"
                                             onClick={() => handleDelete(elem._id)}
                                             >
                                           <i class="fa-solid fa-trash" style={{fontSize:'20px'}}></i>
                                           </a>
                                           
                                        </td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>
               
            </div >
            <button className='button addcontact' onClick={()=>{navigate('/addcontact')}}>Add contact</button>


        </>
    );
}