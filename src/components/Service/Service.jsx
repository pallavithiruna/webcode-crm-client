import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Service.css';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'

export default function Service() {
  const navigate=useNavigate();
    const [data, setData] = useState([])

    useEffect(() => {
        async function FeatchData() {
            try {
                const user = await axios.get('https://webcode-crm-server.onrender.com/auth/getservice')
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
          const DeleteUser = await axios.delete(`https://webcode-crm-server.onrender.com/auth/deleteservice/${id}`)
          const response = DeleteUser.data
          if (response.success) {
              toast.success(response.message)
              navigate('/service')
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
                                <th>Company</th>
                                <th>Service Request</th>
                                <th>Details</th>
                                <th>Request Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.users?.map((elem, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{elem.company}</td>
                                        <td>{elem.servicerequest}</td>
                                        <td>{elem.details}</td>
                                        <td>{elem.requestdate}</td>
                                        <td>
                                            
                                            <Link to={`/updateservice/${elem._id}`}> <i class="fa-solid fa-pen"style={{fontSize:'20px'}}></i> </Link>
                                            
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
            <button className='button addcontact' onClick={()=>{navigate('/addservice')}}>Add service</button>


        </>
    );
}