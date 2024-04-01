import React from 'react'
import Paper from '@mui/material/Paper'
import img from '../../assets/crm.jpg'
import './Home.css'
export const Home = () => {

  return (
    <div className='home-layout'>
      <Paper elevation={2} style={{padding:"5px"}}>
        <h1>Welcome to CRM Application</h1>
        <div style={{}}>
          <hr/>
          <h3 style={{textAlign:"left"}}>CRM(Customer Relationship Management)</h3>
          <p style={{textAlign:"left"}}>Customer relationship management (CRM) is the combination of practices, strategies and technologies that companies use to manage and analyze customer interactions and data throughout the customer lifecycle. The goal is to improve customer service relationships and assist in customer retention and drive sales growth. CRM systems compile customer data across different channels, or points of contact, between the customer and the company, which could include the company's website, telephone, live chat, direct mail, marketing materials and social networks. CRM systems can also give customer-facing staff members detailed information on customers' personal information, purchase history, buying preferences and concerns.</p>
        </div>
        <img src={img} alt="" className='styleImg'/>
      </Paper>
    </div>
    // <>
    // <h1>Welcome to CRM Application</h1>
    // </>
  )
}