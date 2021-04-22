import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom"

import Auth from "../../components/auth_components/Auth"

import logo from "../../assets/logo/logo_white_text.png"

import '../../lib/css/Nav.css'


function Nav( { setUser, setOpenSignUp, setOpenSignIn } ) {

    const history = useHistory();
    
    return (
       
        <>
            <nav className="nav">
                
                <img 
                    className="nav__logo" 
                    alt="Socialiite Logo" 
                    onClick={ () => history.push('/feed') } 
                    src={logo} 
                />

                <Auth 
                    setOpenSignUp={setOpenSignUp}
                    setOpenSignIn={setOpenSignIn}
                    setUser={setUser}
                />

            </nav>


        </>
        
    )
}

export default Nav
