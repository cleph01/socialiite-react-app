import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import { Link, useHistory } from "react-router-dom";

import { db, auth } from '../../utils/firebase_config';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

// Reviews Component
import PromoStories from './reviews_feed';

// Promo Component
import Promos from './Promo';


// Post Component
import Post from './Post'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import logo from "../../assets/logo/logo_white_text.png"
import { Button, Input } from "@material-ui/core";

const Nav = styled.nav`

    width: 100%;
    height: 50px;
    color: #ffffff;
    padding: 20px;
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content:space-around;
    background-color: #203158;
    position: fixed;
    top:0;
    box-shadow: 0 1px 6px -2px #000;
    object-fit: contain;
    
`;

const Img = styled.img`
  width:75px;
  height:auto;

`;

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

  //Handle Checkin Click
  const handleCheckInClick = props => {

    history.push("/checkin");

  }

  //Hold Details of Promotions -- Will be Redux/API call
  const [promos, setPromos] = useState([
    {
        promoId:1,
        emoji:'ring',
        rating:4.98,
        businessName:'Papas Gold City Jewelers',
        promotion:'30% OFF ALL Jewelry (Mon 11-5pm)'
    },
    {
        promoId:2,
        emoji:'spaghetti',
        rating:4.86 ,
        businessName:'Fratelli Market',
        promotion:'20% OFF Any Frozen Tray (Mon Only)'
    },
    {
        promoId:3,
        emoji:'cup_with_straw',
        rating:4.53,
        businessName:"Hubba's",
        promotion:'FREE Sm Drink w/ Wedge: M-W(9-5)'
    },
    {
        promoId:4,
        emoji:'hotdog',
        rating:4.49,
        businessName:"Hubba's",
        promotion:'FREE Dog w/ 2 Wedges: M-W(9-5)'
    },
    {
        promoId:5,
        emoji:'canned_food',
        rating:4.26,
        businessName:'Fratelli Market',
        promotion:'FREE Sauce w/ Purch 2 Ravioli Boxes (Sun Only)'
    },
    {
        promoId:5,
        emoji:'taco',
        rating:4.99,
        businessName:"Hubba's",
        promotion:'FREE Taco w/ Order of 6 Tacos: M-W(9-5)'
    }    
]);

// State to hold post data from Firebase call
const [posts, setPosts] = useState([]);

// Begin - Sign Up Modal 
const [open, setOpen] = useState(false);
// End - Sign Up Modal

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
            console.log(authUser)
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

    db.collection('posts').onSnapshot(snapshot => {
        
        setPosts( snapshot.docs.map( doc => ({
            id: doc.id,
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
      

        <Nav>

            <Img src={logo} />

            <FontAwesomeIcon className='bell' icon='bell' />

            <FontAwesomeIcon icon='bullhorn' />

            <FontAwesomeIcon icon='bars' />
    
        </Nav>

        <PromoStories />

        {/* <div style={{marginTop:'10px', width:'100%'}}>
            {promos.map((item, index) => (
                <Promos 
                key={index} 
                promo_details={item}
                showModal={showModal}
                setModalContent={setModalContent}
                
                />
            ))}
        </div> */}

        {/* I want to have... */}
        {/* Caption input */}
        {/* File Picker */}
        {/* Post button */}



        <div style={{marginTop:'150px'}}>
        {
            posts.map( ({post, id}) => (
                <Post 
                    key={id}
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
        open={open}
        onClose = {() => setOpen(false)} 
    >
        <div style={modalStyle} className={classes.paper}>
            <form className="app__signup">
                
                    <center>
                        <Img 
                            src={logo}
                            alt="Sociallite Logo" 
                            style={{backgroundColor:'midnightblue', padding:'10px'}}
                            
                        />
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
                        <Img 
                            src={logo}
                            alt="Sociallite Logo" 
                            style={{backgroundColor:'midnightblue', padding:'10px'}}
                            
                        />
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
