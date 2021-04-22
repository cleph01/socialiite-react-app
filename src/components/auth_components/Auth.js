import React, {useContext} from 'react';

import { auth } from '../../utils/firebase_config';

import { UserContext } from '../../contexts/UserContext';

import '../../lib/css/Auth.css';


function Auth( { setUser, setOpenSignUp, setOpenSignIn }) {

    // Context API
    const user = useContext(UserContext);

    console.log("NavBar User: ", user)

    return (
        <div>
            
            {user ? (
                            <div className="auth__loginContainer">
                                
                                <button
                                    className="auth__loginContainer_button"                                    
                                    onClick={() => {auth.signOut().then((result)=>{setUser(null); console.log("signout result: ", result )})}}
                                >
                                    Logout
                                </button>
                                
                            </div>
                            ):(
                                <div className="auth__loginContainer">
                                    
                                    <button
                                        className="auth__loginContainer_button"
                                        onClick={() => setOpenSignIn(true)}>
                                            Sign In
                                    </button>
                                    
                                    <button
                                        className="auth__loginContainer_button"                                        
                                        onClick={() => setOpenSignUp(true)}>
                                            Sign Up
                                    </button>
                                    
                                </div>
                            )
                        }

        </div>
    )
}

export default Auth
