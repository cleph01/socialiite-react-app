import React, { useState } from "react";
import styled from 'styled-components'
import { Link, useHistory } from "react-router-dom";


import logo from "../assets/logo/logo.png"


const LoginContainer = styled.div`

    margin-top: 25px;
    width: 250px;
    height: 350px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    border-radius: 25px;
    background-color: #FFF;
    border: 1px solid blue;
    
`;

const Img = styled.img`
  width:150px;
  height:auto;

`;

const LoginBtn = styled.button`
  background-color: #15a9dc;
  font-family: 'Quicksand';
  color: #ffffff;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  border: none;
  font-size: 20px;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  -webkit-animation: glowing 1500ms infinite;
  -moz-animation: glowing 1500ms infinite;
  -o-animation: glowing 1500ms infinite;
  animation: glowing 1500ms infinite;
  margin-top: 50px;

  @-webkit-keyframes glowing {
    0% { background-color: #15a9dc; -webkit-box-shadow: 0 0 3px #15a9dc; }
    50% { background-color: #15a9dc; -webkit-box-shadow: 0 0 40px #15a9dc; }
    100% { background-color: #15a9dc; -webkit-box-shadow: 0 0 3px #15a9dc; }
  }

  @-moz-keyframes glowing {
    0% { background-color: #15a9dc; -moz-box-shadow: 0 0 3px #15a9dc; }
    50% { background-color: #15a9dc; -moz-box-shadow: 0 0 40px #15a9dc; }
    100% { background-color: #15a9dc; -moz-box-shadow: 0 0 3px #15a9dc; }
  }

  @-o-keyframes glowing {
    0% { background-color: #15a9dc; box-shadow: 0 0 3px #15a9dc; }
    50% { background-color: #15a9dc; box-shadow: 0 0 40px #15a9dc; }
    100% { background-color: #15a9dc; box-shadow: 0 0 3px #15a9dc; }
  }

  @keyframes glowing {
    0% { background-color: #15a9dc; box-shadow: 0 0 3px #15a9dc; }
    50% { background-color: #15a9dc; box-shadow: 0 0 40px #15a9dc; }
    100% { background-color: #15a9dc; box-shadow: 0 0 3px #15a9dc; }
  }

`;

const CheckInBtn = styled.button`
  background-color: #233479;
  font-family: 'Quicksand';
  color: #ffffff;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  border: none;
  font-size: 20px;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  -webkit-animation: glowing-dark 1500ms infinite;
  -moz-animation: glowing-dark 1500ms infinite;
  -o-animation: glowing-dark 1500ms infinite;
  animation: glowing-dark 1500ms infinite;
  margin-top: 25px;

  @-webkit-keyframes glowing-dark {
    0% { background-color: #233479; -webkit-box-shadow: 0 0 3px #233479; }
    50% { background-color: #233479; -webkit-box-shadow: 0 0 40px #233479; }
    100% { background-color: #233479; -webkit-box-shadow: 0 0 3px #233479; }
  }

  @-moz-keyframes glowing-dark {
    0% { background-color: #233479; -moz-box-shadow: 0 0 3px #233479; }
    50% { background-color: #233479; -moz-box-shadow: 0 0 40px #233479; }
    100% { background-color: #233479; -moz-box-shadow: 0 0 3px #233479; }
  }

  @-o-keyframes glowing-dark {
    0% { background-color: #233479; box-shadow: 0 0 3px #233479; }
    50% { background-color: #233479; box-shadow: 0 0 40px #233479; }
    100% { background-color: #233479; box-shadow: 0 0 3px #233479; }
  }

  @keyframes glowing-dark {
    0% { background-color: #233479; box-shadow: 0 0 3px #233479; }
    50% { background-color: #233479; box-shadow: 0 0 40px #233479; }
    100% { background-color: #233479; box-shadow: 0 0 3px #233479; }
  }
`;

const Home = props => {
  
  const history = useHistory();

  //Handle Login Click
  function handleLoginClick(){

    history.push("/login");

  }

  //Handle Checkin Click
  function handleCheckInClick(){

    history.push("/checkin");

  }


  return (
    <>
    
    <div style={{display:'flex', justifyContent:'center'}}>
      
      <LoginContainer>

        <Img className='' src={logo} />

        <LoginBtn className='btn' onClick={handleLoginClick}>Log In</LoginBtn>

        <CheckInBtn>Check In</CheckInBtn>
    
    </LoginContainer>
    </div>
      
    </>
  );
};

export default Home;
