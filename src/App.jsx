import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import './App.css'
import Signup from './components/Signup'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import ForgotPassword from './components/ForgotPassword'
import ResetPassword from './components/ResetPassword'
import { Home } from './components/Home/Home'
import Header from './components/Header/Header'
import Sidenav from './components/Sidenav/Sidenav'
import Admin from './components/Admin/Admin'
import Userlist from './components/Users-list/Userlist'
import Manager from './components/Manager/Manager'
import { About } from './components/About'
import Add from './components/Adduser/Add'
import Contact from './components/Contact/Contact'
import Addcontact from './components/Contact/Addcontact'
import Updatecontact from './components/Contact/Updatecontact'
import cookie from 'js-cookie';
import Service from './components/Service/Service'
import Addservice from './components/Service/Addservice'
import Updateservice from './components/Service/Updateservice'

function App() {
  return (
  <BrowserRouter>
  <Routes>
     <Route  path="/dashboard"    element={<Dashboard/>} />
    <Route  path="/signup"    element={<Signup/>} />
    <Route  path="/"    element={<Login/>} />
    <Route  path="/forgotpassword"    element={<ForgotPassword/>} />
    <Route  path="/resetpassword/:token"    element={<ResetPassword/>} />
    <Route  path="/header" element={<Header/>} />
    <Route  path="/sidenav" element={<Sidenav/>} />

    {/* <Route  path="/home" element={<Protectedroute><Dashboard><Home/></Dashboard></Protectedroute>} />
    <Route path="/admin" element={<Protectedroute><Dashboard><Admin/></Dashboard></Protectedroute>}/>
    <Route path="/user-list" element={<Protectedroute><Dashboard><Userlist/></Dashboard></Protectedroute>}/>
    <Route path="/manager" element={<Protectedroute><Dashboard><Manager/></Dashboard></Protectedroute>}/>
    <Route path="/about" element={<Protectedroute><Dashboard><About/></Dashboard></Protectedroute>}/>
    <Route path="/add" element={<Protectedroute><Dashboard><Add/></Dashboard></Protectedroute>}/>
    <Route path="/contact" element={<Protectedroute><Dashboard><Contact/></Dashboard></Protectedroute>}/>
    <Route path="/addcontact" element={<Protectedroute><Dashboard><Addcontact/></Dashboard></Protectedroute>}/>
    <Route path="/updatecontact/:id" element={<Protectedroute><Dashboard><Updatecontact/></Dashboard></Protectedroute>}/>
    <Route path="/service" element={<Protectedroute><Dashboard><Service/></Dashboard></Protectedroute>}/>
    <Route path="/addservice" element={<Protectedroute><Dashboard><Addservice/></Dashboard></Protectedroute>}/>
    <Route path="/updateservice/:id" element={<Protectedroute><Dashboard><Updateservice/></Dashboard></Protectedroute>}/> */}


    <Route  path="/home" element={<Dashboard><Home/></Dashboard>} />
    <Route path="/admin" element={<Dashboard><Admin/></Dashboard>}/>
    <Route path="/user-list" element={<Dashboard><Userlist/></Dashboard>}/>
    <Route path="/manager" element={<Dashboard><Manager/></Dashboard>}/>
    <Route path="/about" element={<Dashboard><About/></Dashboard>}/>
    <Route path="/add" element={<Dashboard><Add/></Dashboard>}/>
    <Route path="/contact" element={<Dashboard><Contact/></Dashboard>}/>
    <Route path="/addcontact" element={<Dashboard><Addcontact/></Dashboard>}/>
    <Route path="/updatecontact/:id" element={<Dashboard><Updatecontact/></Dashboard>}/>
    <Route path="/service" element={<Dashboard><Service/></Dashboard>}/>
    <Route path="/addservice" element={<Dashboard><Addservice/></Dashboard>}/>
    <Route path="/updateservice/:id" element={<Dashboard><Updateservice/></Dashboard>}/>



  </Routes>
  </BrowserRouter>
  )
}

export default App

// function Protectedroute({children}){
//   const token=cookie.get("token");
//   console.log(token)
//   return(
//     <>
//     {token?children : <Navigate to="/"/> }
//     </>
//   )
// }