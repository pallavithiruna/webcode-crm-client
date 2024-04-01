import React,{useState,useEffect} from 'react'
import '../../App.css'
import Axios from 'axios'
import { Link, useNavigate,useParams } from 'react-router-dom';
import toast from 'react-hot-toast'
import axios from 'axios';

function Updatecontact() {


const{id}=useParams();
const navigate=useNavigate()

const users={
    name: "",
    companyname: "",
    address: "",
    phone: ""
}
  const [value, setValue] = useState(users)
const handlechange = (e) => {
    setValue({
        ...value,
        [e.target.name]: e.target.value
    })

}
useEffect(
    ()=>{
        axios.get(`https://webcode-crm-server.onrender.com/auth/getonecontact/${id}`)
        .then((res)=>{
            setValue(res.data)
        })
        .catch(
            (error)=>{
                console.log(error)
            }
        )
    },[id]
)
const handleOnSubmit = async (e) => {
    e.preventDefault();

    
         await Axios.put(`https://webcode-crm-server.onrender.com/auth/updatecontact/${id}`,value)
        .then(
            (res)=>{
            
                toast.success("Contact updated Succesfully")
                navigate('/contact')
            }
        )
        .catch(err=>console.log(err))
       
  
}


  return (
    <div>
      <h2>Update Contact</h2>
       <div className='add-up-container'>
      <form className='add-up-form' onSubmit={handleOnSubmit}>
        <div>

          <label  htmlFor='name' >Name:</label>
          <input  type="text" placeholder='Name'
          className='input'
          value={value.name} name='name' onChange={handlechange}
        //   onChange={(e)=>setName(e.target.value)}
          />

         <label  htmlFor='companyname' >Companyname:</label>
          <input  type="text" 
          className='input'
          value={value.companyname} name='companyname' onChange={handlechange}
        //   onChange={(e)=>setCompanyname(e.target.value)}
          placeholder='Companyname'
          />

          <label  htmlFor='address' >Address:</label>
          <input  type="text" autoComplete='off' placeholder='Address' 
          className='input'
          value={value.address} name='address' onChange={handlechange}
            //  onChange={(e)=>setAddress(e.target.value)}
           />
          <label  htmlFor='role' >Phone:</label>
          <input  type="text" autoComplete='off' placeholder='Phone' 
          className='input'
          value={value.phone} name='phone' onChange={handlechange}
        //    onChange={(e)=>setPhone(e.target.value)}
           />
           
          <button className='button' type="submit">Update contact</button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default Updatecontact
