import React, { useState } from 'react';
import { Route, Link } from "react-router-dom";

import { UserContext } from './contexts/UserContext';

/* START Firebase Config */
import { auth } from './utils/firebase_config';
/* END Firebase Config */

/* START Components */
import Home from './components/home_components/Home';
import Nav from './components/navigation_components/Nav';

import Wallet from './components/wallet/wallet';
import Post from './components/post_components/Post';
import Promos from './components/promo_components/feed_promo/PromoFeed';
import BusinessFeed from './components/business_components/BusinessFeed';
import Notification from './components/notification_components/Notification';
import Business from './components/business_components/Business';
import Profile from './components/profile_components/Profile';

import Footer from './components/navigation_components/Footer';

/* END Components */

/* START CSS */
import './App.css';

/* START Material UI stuff */
import { Button, Input } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
/* END Material UI */

/* END CSS */


function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));



function App() {

  // Begin - Open Sign Up Modal 
  const [openSignUp, setOpenSignUp] = useState(false);
  // End - Sign Up Modal

  // Begin - Open Sign In Modal 
  const [openSignIn, setOpenSignIn] = useState(false);
  // End - Sign Up Modal

  // Begin - Signup Form
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  // End - Signup Form

  // Begin - Auth State
  const [user, setUser] = useState(null);
  // End - Auth State

  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle)

  
  const signUp = e => {
      e.preventDefault();
      auth
      .createUserWithEmailAndPassword(email, password)
      .then( (authUser)=>{ 
          return authUser.user.updateProfile({
              displayName: username
          })
      })
      .catch((error) => alert(error.message))

      setOpenSignUp(false);
  }

  const signIn = e => {
      e.preventDefault();
      auth
      .signInWithEmailAndPassword(email, password)
      .then( (authUser) => { 

        setUser(authUser); 

        console.log("App User: ", authUser)
      })
      .catch((error) => alert(error.message))

      setOpenSignIn(false);
  }

  return (
  
  <>
    <div className="app">
      <UserContext.Provider value={user}> 
        <Nav 
              setOpenSignUp={setOpenSignUp}
              setOpenSignIn={setOpenSignIn}
              setUser={setUser}
          />

        <Route exact path="/" component={Home} />

        <Route exact path="/profile" component={Profile} />

        <Route exact path="/business" component={BusinessFeed} />

        <Route exact path="/business/:businessId" component={Business} />

        {user && <Footer 
            destination1="notification" 
            destination2="promos"
            icon1="bell" 
            icon2="bullhorn" 
            
            />
        }

      </UserContext.Provider>

      
      {/* <Route exact path="/posts" component={Post} />
      <Route exact path="/promos" component={Promos} />
      <Route exact path="/wallet" component={Wallet} />
      
      <Route exact path="/notification" component={Notification} />
      
      <Route exact path="/profile" component={Profile} /> */}
      
  
    </div>

    <Modal 
    open={openSignUp}
    onClose = {() => setOpenSignUp(false)} 
    >
    <div style={modalStyle} className={classes.paper}>
        <form className="app__signup">
            
                <center>
                    <h3>Sign Up</h3>
                </center>

                <Input
                    placeholder="username"
                    type="text"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />

                <Input
                    placeholder="email"
                    type="text"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input
                    placeholder="password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />  

                
                <Button type="submit" onClick={signUp}>Sign Up</Button>
                
            
        </form>
        
    </div>    

    </Modal>


    <Modal 
    open={openSignIn}
    onClose = {() => setOpenSignIn(false)} 
    >
    <div style={modalStyle} className={classes.paper}>
        <form className="app__signup">
            
                <center>
                    <h3>Sign In</h3>
                </center>

                <Input
                    placeholder="email"
                    type="text"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input
                    placeholder="password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />  

                <Button type="submit" onClick={signIn}>Sign In</Button>
                
            
        </form>
        
    </div>    

    </Modal>

  </>
  );
}

export default App;
