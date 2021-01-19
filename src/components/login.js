import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'




const Login = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState();

  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setIsLoading(true);


    // api().post("/api/auth/login", credentials)
    //   .then( res => {

        
            
    //         //Set Token in Local Storage
    //         localStorage.setItem("token", res.data.token);

    //         //Set Username in Local Storage
    //         localStorage.setItem("socialiite_username", res.data.user.username);

    //         setIsLoading(true);
  
    //     })
    //     .catch(err => {
    //         // setError(err.response.data.message)
    //         console.log(err);
    //       });
    }

  return (
    <>
      {isLoading && <div>Loading... </div>}

      <div
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "30px",
          height: "150px"
        }}
      >
        <h1>Login</h1>

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
            value={credentials.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
          />

          <button type="submit">Sign In</button>
        </form>
      </div>
    </>
  );
};

export default Login;
