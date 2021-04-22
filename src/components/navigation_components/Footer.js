import React, { useState } from 'react'
import { useHistory } from "react-router-dom"

import { FaHome, FaBell, FaUser, FaBullhorn, FaPlusSquare } from 'react-icons/fa'

import '../../lib/css/Footer.css'


function Footer( {icon1, icon2, destination1, destination2, setOpenUpload} ) {

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
            <footer className="footer">
                
                <FaHome
                    onClick={handleDestination1Click}
                    // className='bell' 
                    />

                <FaBell
                    onClick={() => setOpenUpload(true)} 
                    />

                <FaPlusSquare />
                
                <FaBullhorn 
                    onClick={handleDestination2Click} 
                />

                <FaUser 
                    onClick={()=> history.push('/profile')} 
                />

            </footer>

        </>
        
    )
}

export default Footer
