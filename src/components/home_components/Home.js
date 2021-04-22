import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";

import { UserContext } from '../../contexts/UserContext';

import { db, auth } from '../../utils/firebase_config';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

// Begin Components
import PromoStories from '../stories_components/StoriesFeed';
import Post from '../post_components/Post'; 
import ImageUpload from '../image_upload_components/ImageUpload';
import Nav from '../navigation_components/Nav';
import Footer from '../navigation_components/Footer';
// End Components

import '../../lib/css/Post.css'
import '../../lib/css/Home.css';

import { Button, Input } from "@material-ui/core";

import logo from "../../assets/logo/logo.png"


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

  
function Home () {
  
    // Context API
    const user = useContext(UserContext);

    console.log("Home User: ", user);

    // State to hold post data from Firebase call
    const [posts, setPosts] = useState([]);

    
    // Begin - Upload Modal 
    const [openUpload, setOpenUpload] = useState(false);
    // End - Upload Modal

    
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);


    //every time a new post is added this code fires
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

    console.log("Posts: ", posts)



    const location = useLocation();

    console.log("Home Path: ", location.pathname);

  return (
    <>
    
    <div style={{display:'flex', flexDirection:'column', alignItems: 'center', justifyContent:'center'}}>
      
       

        {user && <PromoStories />}            

        <div className="home__posts">

            {user ? (
                
                posts.map( ({postId, post}, index) => (
                    
                    <Post 
                        key={index}
                        postId={postId}
                        username={post.username} 
                        caption={post.caption}
                        imageUrl={post.imageUrl}
                        user={user}
                    />
                ))
            ):<div className="home__loggedout">
                    <div>
                        <img alt="logo" src={logo} />
                    </div>
                    <div className="home__message">Social Media That Pays</div>
                </div>}

        </div>
        
    </div>

    

    <Modal 
        open={openUpload}
        onClose = {() => setOpenUpload(false)} 
    >
        <div style={modalStyle} className={classes.paper}>

            {user?.displayName ? (
                <ImageUpload 
                    setOpenUpload={setOpenUpload}
                    username={user.displayName}
                    userId={user.uid} />
            ) : (
                <h3> Sorry you need to login to upload</h3>
            )}
            
        </div>    
       
    </Modal>

    
      
    </>
  );
};

export default Home;
