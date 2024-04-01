import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './Sidenav.css'
import { Link } from 'react-router-dom';

const Sidenav = () => {
  return (
    <div className='d-flex'>
    <div className='col-auto'>
    <div className='sidenav d-flex flex-column  bg-primary text-white p-4 vh-100' >
      <div>
      <ul className='nav nav-pills flex-column p-0 m-0'>
        <li className='nav-item p-1'>
            <Link to="/home" className='nav-link text-white'>
            <i className="fa-solid fa-house me-2 fs-5"></i>
                <span className=' space-font'>About-us</span>
            </Link>
        </li>
        <li className='nav-item p-1'>
            <Link to="/admin" className='nav-link text-white'>
            <i className="fa-solid fa-u me-2 fs-5"></i>
                <span className='space-font'>Add-Users</span>
            </Link>
        </li>
         <li className='nav-item p-1'>
            <Link to="/service" className='nav-link text-white'>
            <i className="fa-solid fa-s me-2 fs-5"></i>
                <span className='space-font'>Service Request</span>
            </Link>
        </li>
        <li className='nav-item p-1'>
            <Link to="/contact" className='nav-link text-white'>
            <i className="fa-solid fa-c me-2 fs-5"></i>
                <span className='space-font'>Contacts</span>
            </Link>
        </li>
        <li className='nav-item p-1'>
            <Link to="/user-list" className='nav-link text-white'>
            <i className="fa-solid fa-users me-2 fs-5"></i>
                <span className='space-font'>Users</span>
            </Link>
        </li>
        <li className='nav-item p-1'>
        <Link to="/about" className='nav-link text-white'>
        <i className="fa-solid fa-user me-2 fs-5"></i>
        <span className='space-font'>Help?</span>
        </Link>
        </li>
      </ul>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Sidenav
