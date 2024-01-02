import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Data from "./Data"
import { useParams } from "react-router";
import DashboardCss from "../Components/Dashboard.css"
import Logo from "../Components/assets/frontlogo.png"
import {FaHouseUser,FaUser,FaFile,FaFileCsv,FaQuestion} from "react-icons/fa"
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [uname,setUname] = useState('')
  const [ucomp,setUcomp]=useState('')
  const [uDoj,setUDoj]=useState('')
  const [name,setName]=useState('')
  const {id} = useParams()
  let navigate = useNavigate()
  const userdata = Data.filter((item)=>item.id == id)
  useEffect(()=>{
    if(userdata){
      setUname(userdata[0].username)
      setUcomp(userdata[0].company)
      setUDoj(userdata[0].doj)
      setName(userdata[0].name)
      //console.log(userdata)
    }
  })

  const handleHome = ()=>{
    navigate(`/dashboard/${userdata[0].id}`)
  }
  const handleProfile = ()=>{
    navigate(`/profile/${userdata[0].id}`)
  }
  const handleDocs = ()=>{
    navigate(`/documents/${userdata[0].id}`)
  }
  const handlePay = ()=>{
    navigate(`/payslips/${userdata[0].id}`)
  }
  const handleQueries = ()=>{
    navigate(`/queries/${userdata[0].id}`)
  }
  const handleLogout=()=>{
    navigate('/')
  }
  return (
    <div className="dashboard-page">
      <Row className="page-row">
        <Col className="left-col" xs={4} lg={2}>
          <div className="employee-info">
            <img src={Logo} alt={uname} className="page-logo" onClick={handleHome}/>
            <hr />
            <h5 className="name">Name:<span className="emp-name"> {name}</span></h5>
            <h5 className="name">Company:<span className="emp-name"> {ucomp}</span></h5>
            <h5 className="name">DOJ:<span className="emp-name"> {uDoj}</span></h5>
            <hr />
            <div className="page-section">
           <h5 className="menu-tab" onClick={handleHome}><FaHouseUser /> Home</h5>
            <h5 className="menu-tab" onClick={handleProfile}><FaUser /> My Profile</h5>
            <h5 className="menu-tab" onClick={handleDocs}><FaFile /> My Documents</h5>
            <h5 className="menu-tab" onClick={handlePay}><FaFileCsv /> My Payslips</h5>
            <h5 className="menu-tab" onClick={handleQueries}><FaQuestion /> My Queries</h5>
            </div>
            <hr />
            <h4 className="logout-btn" onClick={handleLogout}>Logout</h4>
          </div>
        </Col>
        <Col className="right-col" xs={8} lg={10}>
          <hr className="line"/>
            <h2 className="welcome-text">
              Welcome! {name} 
              </h2>
              <div className="page-fields">
                <div className="field-name"  onClick={handleProfile}>
                  <h5 className="titleText">My Profile</h5>
                  <h5 className="titleIcon"><FaUser /></h5>
                </div>
                <div className="field-name" onClick={handlePay}>
                  <h5 className="titleText">My Payslips</h5>
                  <h5 className="titleIcon"><FaFileCsv /></h5>
                </div>
                <div className="field-name"  onClick={handleDocs}>
                  <h5 className="titleText">My Documents</h5>
                  <h5 className="titleIcon"><FaFile /></h5>
                </div>
                <div className="field-name" onClick={handleQueries}>
                  <h5 className="titleText">My Queries</h5>
                  <h5 className="titleIcon"><FaQuestion /></h5>
                </div>
                
              </div>
            
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
