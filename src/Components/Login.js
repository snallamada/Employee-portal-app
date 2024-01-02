import React, { useState } from "react";
import LoginCss from "./Login.css";
import { Card, Container, Form, Button } from "react-bootstrap";
import Logo from "./assets/frontlogo.png";
import Image1 from "./assets/img1.png";
import Data from "./Data"
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";


const Login = () => {
  const [uname,setusername]=useState('')
  const [upass,setPassword]=useState('')
  const [error,setError] = useState('')

  let navigate = useNavigate()
  const userData = Data.filter((user)=>user.username===uname && user.password===upass)[0]

  const handleSubmit=(e)=>{
    e.preventDefault()
    // console.log(uname,upass)
    if(userData){
      // console.log(uname,upass)
      //console.log(userData.id)
      navigate(`/dashboard/${userData.id}`)
    }   else{
        setError('Please enter correct username and password')
    } 
    if(uname===""||upass===""){
      setError('Please fill the details')
    }
  }
  return (
    <div className="login-page">
      <Container>
        <Card className="login-card">
          <div className="row">
            <div className="col left-col1">
              <img src={Logo} alt="kriya-logo" className="logo-image"/>
              <img src={Image1} alt="Image-1"className="display-image"/>
            </div>
            <div className="col right-col2">
              <Container>
                <h2 className="title">Welcome to KRiYA Kreations LLP</h2>
                <Form>
                  <Form.Group className="mb-3 inputName" controlId="formBasicEmail" >
                    <Form.Control type="email" placeholder="Username" onChange={(e)=>setusername(e.target.value)} value={uname}/>
                  </Form.Group>

                  <Form.Group className="mb-3 inputPassword" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} value={upass}/>
                  </Form.Group>
                      <div className="error-block">{error}</div>
                  <Button variant="primary" type="submit" className="login-btn mb-3" onClick={handleSubmit}>
                    Login
                  </Button>
                </Form>
                <hr />
                <h6 className="help">Facing Login Issue?</h6>
                <h6 className="dial">Connect with us at: 9090909090 | contact@employeeportal.com </h6>
              </Container>
            </div>
          </div>
          <div className="footer"></div>
        </Card>
      </Container>
      <div className="credentials">
        <p className="userpass">
          Try any one of these credentials to Login
          <ul>
            <li>User1,Password1</li>
            <li>User2,Password2</li>
            <li>User3,Password3</li>
            <li>User4,Password4</li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default Login;
