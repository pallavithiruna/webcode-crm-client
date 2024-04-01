import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom';
import axios from 'axios'

function Header() {
  const navigate=useNavigate();
  const handleLogout =()=>{
    axios.get('https://webcode-crm-server.onrender.com/auth/logout')
    .then(res=>{
      if(res.data.status){
       navigate('/')
      }
    })
    .catch(err=>{
      console.log('error')
    })
  }
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">CRM-APP</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           
          </Nav>
          <Nav>
            {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
            <Button variant="primary" onClick={handleLogout}>Log out</Button>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;