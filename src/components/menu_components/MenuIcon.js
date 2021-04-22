import React, { useState } from 'react'
import { Menu, MenuItem } from '@material-ui/core'
import { auth } from '../../utils/firebase_config';

function MenuIcon( {anchorEl, handleClose} ) {

    return (
        <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem
                    onClick={handleClose}>Profile</MenuItem>
                <MenuItem
                    onClick={handleClose}>My Account</MenuItem>
                <MenuItem
                    onClick={handleClose}>Logout</MenuItem>

                {/* {true ? (
                    <MenuItem onClick={() => auth.signOut()}>Logout</MenuItem>
                    ):(
                        <div className="app__loginContainer">
                            <MenuItem onClick={() => setOpenSignIn(true)}>Sign In</MenuItem>
                            <MenuItem onClick={() => setOpen(true)}>Sign Up</MenuItem>
                        </div>
                    )
                } */}
            </Menu>
    )
}

export default MenuIcon
