import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom"

import Menu from '../menu_components/MenuIcon'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import logo from "../../assets/logo/logo_white_text.png"

import '../../lib/css/Nav.css'


function Nav( {icon1, icon2, destination1, destination2, setOpenUpload} ) {

    const history = useHistory();

    //Handle Destination 1 Click
    function handleDestination1Click(){

        history.push(`/${destination1}`);

    }

    //Handle Destination 2 Click
    function handleDestination2Click(){

        history.push(`/${destination2}`);

    }

    
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
       
        <>
            <nav className="nav">
                
                <img 
                    className="nav__logo" 
                    alt="Socialiite Logo" 
                    onClick={ () => history.push('/feed') } 
                    src={logo} 
                />

                <FontAwesomeIcon 
                    onClick={handleDestination1Click}
                    // className='bell' 
                    icon={icon1} />

                <FontAwesomeIcon 
                    onClick={() => setOpenUpload(true)} 
                    icon="plus-square" />

                <FontAwesomeIcon 
                    onClick={handleDestination2Click} 
                    icon={icon2} />

                <FontAwesomeIcon onClick={handleClick} icon='bars' />

            </nav>

            <Menu 
                anchorEl={anchorEl}
                handleClose={handleClose}

            />
        </>
        
    )
}

export default Nav
