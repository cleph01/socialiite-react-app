import React, { useState } from "react";
import styled from 'styled-components'
import { Link } from "react-router-dom";
import api from "../utils/api";

import logo from "../assets/logo/logo.png"


const LoginContainer = styled.div`

    width: 90%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    border-radius: 5px;
    background-color: #FFF;
    border: 1px solid blue;
    
`;

const Img = styled.img`
  width:150px;
  height:auto;
`


const Home = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState();

  const [data, setData] = useState({
    username: "",
    password: ""
  });


  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setIsLoading(true);


    // api()
    //   .post("/api/auth/login", data)
    //     .then( res => {
          
          

          
    //     }
        
    //   );

  };

  return (
    <>
      {isLoading && <div>Loading... </div>}
    <div style={{textAlign:'center'}}>
      <LoginContainer>

        <Img src={logo} />

        <form
          onSubmit={handleSubmit}
          style={{
            background: "#f1f1f1",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            padding: "30px 0px",
            width: "175px"
          }}
        >
          {error && <div className="error">{error}</div>}

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={data.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={data.password}
            onChange={handleChange}
          />

          <button type="submit">Sign In</button>
        </form>
    
    </LoginContainer>
    </div>
      
    </>
  );
};

export default Home;
