import React from 'react'
import Header from './Header/Header'
import Sidenav from './Sidenav/Sidenav'


const Dashboard = ({children}) => {
  return (
    <>
       <Header/>
    <div style={{display:"flex"}}>
      <Sidenav/>
      {children}
    </div>
    </>
  )
}

export default Dashboard
