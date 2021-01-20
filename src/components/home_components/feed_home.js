import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import { Link, useHistory } from "react-router-dom";

import { db, auth } from '../../utils/firebase_config';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

// Begin Components
import PromoStories from '../stories_components/stories_feed';
import Post from '../post_components/Post'; 
import ImageUpload from '../image_upload_components/ImageUpload';
import Nav from '../navigation_components/Nav';
// End Components

import '../../lib/css/Post.css'


import logo from "../../assets/logo/logo_white_text.png"
import { Button, Input } from "@material-ui/core";



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


function FeedHome () {
  
    

  const history = useHistory();

  //Handle Login Click
  function handleLoginClick(){

    history.push("/login");

  }

  //
  function promoFeedClick(){
      
    history.push("/promos");

  }

  //Handle Checkin Click
  const handleCheckInClick = props => {

    history.push("/checkin");

  }


// State to hold post data from Firebase call
const [posts, setPosts] = useState([]);

// Begin - Sign Up Modal 
const [open, setOpen] = useState(false);
// End - Sign Up Modal

// Begin - Upload Modal 
const [openUpload, setOpenUpload] = useState(false);
// End - Upload Modal

// Begin - Sign Up Modal 
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

//Holds Boolean to Control display of Modal onClick Share & Get Paid
const [modalVisible, setmodalVisible] = useState(false);


//Holds Content for Modal from onClick Share & Get Paid
const [modalContent, setModalContent] = useState({});


//Function to change state & setModalContent -- Passed as prop to promo
const showModal = (promoItem) => {

    setmodalVisible(!modalVisible)

    setModalContent(promoItem)

}


useEffect( () => {

    const unsubscribe = 
    auth.onAuthStateChanged((authUser) => {
        if(authUser){
            // user has logged in...
            console.log(authUser, "AuthUser")
            setUser(authUser)
        } else {
            // user has logged out...
            setUser(null)
        }
    })

    return () => {
        // perform some cleanup actions
        unsubscribe();
    }

}, [user, username]);

//every time a new user is added this code fires
useEffect( () => {

    db
    .collection('posts')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
        
        setPosts( snapshot.docs.map( doc => ({
            postId: doc.id,
            post:doc.data()
        })))
        
    })
}, [])

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

    setOpen(false);
}

const signIn = e => {
    e.preventDefault();
    auth
    .signInWithEmailAndPassword(email, password)
    .catch((error) => alert(error.message))

    setOpenSignIn(false);
}

  return (
    <>
    
    <div style={{display:'flex', flexDirection:'column', alignItems: 'center', justifyContent:'center'}}>
      
        <Nav 
            destination1="notification" 
            destination2="promos"
            icon1="bell" 
            icon2="bullhorn" 
            setOpenUpload={setOpenUpload}
        />
            

        <PromoStories />


        <div className="app__posts">

        {user ? (<div>{user.uid}</div>):<div>not yet</div>}

        {
            posts.map( ({post}, index) => (
                <Post 
                    key={index}
                    postId={post.postId}
                    username={post.username} 
                    caption={post.caption}
                    imageUrl={post.imageUrl}
                />
            ))
        }
        </div>

        
        {user ? (
            <Button onClick={() => auth.signOut()}>Logout</Button>
              ):(
                <div className="app__loginContainer">
                    <Button onClick={() => setOpenSignIn(true)}>Sign In</Button>
                    <Button onClick={() => setOpen(true)}>Sign Up</Button>
                </div>
            )
          }

        
        
    </div>


    <Modal 
        open={openUpload}
        onClose = {() => setOpenUpload(false)} 
    >
        <div style={modalStyle} className={classes.paper}>

            {user?.displayName ? (
                <ImageUpload 
                    setOpenUpload={setOpenUpload}
                    username={user.displayName} />
            ) : (
                <h3> Sorry you need to login to upload</h3>
            )}
            
        </div>    
       
    </Modal>

    <Modal 
        open={open}
        onClose = {() => setOpen(false)} 
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
};

export default FeedHome;
