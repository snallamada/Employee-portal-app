import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Data from "../Data"
import { useParams } from "react-router";
import DashboardCss from "../Dashboard.css"
import Logo from "../assets/frontlogo.png"
import adharPDF from "../assets/adharPDF.pdf"
import {FaHouseUser,FaUser,FaFile,FaFileCsv,FaQuestion} from "react-icons/fa"
import { useNavigate } from "react-router-dom";


const Profile = ()=>{
    const [uname,setUname] = useState('')
  const [ucomp,setUcomp]=useState('')
  const [uDoj,setUDoj]=useState('')
  const [name,setName]=useState('')
  const [mobile,setMobile] = useState('')
  const [mail,setmail] = useState('')
  const [address,setAdd]=useState('')
  const [dob,setDob]=useState('')
  const [bg,setBg]=useState('')
  const [gender,setGender]=useState('')
  const [bankname,setbankname]=useState('')
  const [actnum,setActnum]=useState('')
  const [ifsc,setIfsc]=useState('')
  const [branch,setBranch]=useState('')
  const [adhar,setAdhar]=useState('')
  const [pan,setPan]=useState('')
  const {id} = useParams()
  let navigate = useNavigate()
  const userdata = Data.filter((item)=>item.id == id)
  useEffect(()=>{
    if(userdata){
      setUname(userdata[0].username)
      setUcomp(userdata[0].company)
      setUDoj(userdata[0].doj)
      setName(userdata[0].name)
      setMobile(userdata[0].mobile)
      setmail(userdata[0].email)
      setAdd(userdata[0].address)
      setDob(userdata[0].DOB)
      setBg(userdata[0].bloodgroup)
      setGender(userdata[0].Gender)
        setbankname(userdata[0].bankname)
        setActnum(userdata[0].accountnum)
        setIfsc(userdata[0].IFSC)
        setBranch(userdata[0].branch)
        setAdhar(userdata[0].adharnum)
        setPan(userdata[0].pannum)
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
              Employee Profile 
              </h2>
              <div className="personal-details">
                  <h5 className="p-text">Personal details:</h5>
                  <hr className="line-black" />
                  <div className="details">
                        <h5 className="deatil-field"><span className="label">Name: </span><span className="ans-field">{name}</span></h5>
                        <h5 className="deatil-field"><span className="label">Mobile Number: </span><span className="ans-field">{mobile}</span></h5>
                        <h5 className="deatil-field"><span className="label">DOB: </span><span className="ans-field">{dob}</span></h5>
                        <h5 className="deatil-field"><span className="label">Email-ID: </span><span className="ans-field">{mail}</span></h5>
                        <h5 className="deatil-field"><span className="label">Address: </span><span className="ans-field">{address}</span></h5>
                        <h5 className="deatil-field"><span className="label">Blood-group: </span><span className="ans-field">{bg}</span></h5>
                        <h5 className="deatil-field"><span className="label">Gender: </span><span className="ans-field">{gender}</span></h5>
                        <h5 className="deatil-field"><span className="label">Aadhar Number: </span><span className="ans-field">{adhar}</span></h5>
                        <h5 className="deatil-field"><span className="label">PAN Number: </span><span className="ans-field">{pan}</span></h5>
                       
                  </div>
              </div>
                <div className="bank-details">
                    <h5 className="p-text">Bank Details</h5>
                    <hr className="line-black" />
                    <div className="b-details">
                        <h5 className="deatil-field"><span className="label">Name: </span><span className="ans-field">{name}</span></h5>
                        <h5 className="deatil-field"><span className="label">Bank Name: </span><span className="ans-field">{bankname}</span></h5>
                        <h5 className="deatil-field"><span className="label">Account Number: </span><span className="ans-field">{actnum}</span></h5>
                        <h5 className="deatil-field"><span className="label">IFSC: </span><span className="ans-field">{ifsc}</span></h5>
                        <h5 className="deatil-field"><span className="label">Branch: </span><span className="ans-field">{branch}</span></h5>
                    </div>
                </div>
             
        </Col>
      </Row>
    </div>
  );
}

export default Profile