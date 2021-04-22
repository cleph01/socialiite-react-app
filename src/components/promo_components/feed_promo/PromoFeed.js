import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import logo from "../../../assets/logo/logo_white_text.png"

import Promo from './Promo';

import Nav from '../../navigation_components/Nav'
import PromoStories from '../../stories_components/StoriesFeed';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";

const emoji = require("emoji-dictionary");


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


const Promos = props => {

    // Hold Modal Open variable
    const [open, setOpen] = useState(false)

    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle)

    // //Holds Boolean to Control display of Modal onClick Share & Get Paid
    // const [modalVisible, setmodalVisible] = useState(false);

        //Hold Details of Promotions -- Will be Redux/API call
const [promos, setPromos] = useState([
    {
        promoId:1,
        businessId:'papas',
        emoji:'ring',
        rating:4.98,
        businessName:'Papas Gold City Jewelers',
        promotion:'30% OFF ALL Jewelry (Mon 11-5pm)'
    },
    {
        promoId:2,
        businessId:'fratelli',
        emoji:'spaghetti',
        rating:4.86 ,
        businessName:'Fratelli Market',
        promotion:'20% OFF Any Frozen Tray (Mon Only)'
    },
    {
        promoId:3,
        businessId:'hubbas',
        emoji:'cup_with_straw',
        rating:4.53,
        businessName:"Hubba's",
        promotion:'FREE Sm Drink w/ Wedge: M-W(9-5)'
    },
    {
        promoId:4,
        businessId:'hubbas',
        emoji:'hotdog',
        rating:4.49,
        businessName:"Hubba's",
        promotion:'FREE Dog w/ 2 Wedges: M-W(9-5)'
    },
    {
        promoId:5,
        businessId:'fratelli',
        emoji:'canned_food',
        rating:4.26,
        businessName:'Fratelli Market',
        promotion:'FREE Sauce w/ Purch 2 Ravioli Boxes (Sun Only)'
    },
    {
        promoId:5,
        businessId:'hubbas',
        emoji:'taco',
        rating:4.99,
        businessName:"Hubba's",
        promotion:'FREE Taco w/ Order of 6 Tacos: M-W(9-5)'
    }    
]);
  
    const history = useHistory();


    //Handle Home Click
    // function backHomeClick(business_id){

    //     history.push(`/feed/${user_id}`);
    // }

    function backHomeClick(business_id){

        history.push(`/feed`);
    }

    //Handle Login Click
    function handleBusinessClick(business_id){

    history.push(`/business/${business_id}`);

    }

  

  return (
    <>
     
    <div style={{display:'flex', flexDirection:'column', alignItems: 'center', justifyContent:'center'}}>
    
        
        <PromoStories />

        <div className="promo__posts">
            {
                promos.map( (promo, index) => (
                    
                    <Promo 
                        key={index}
                        promo={promo}
                        
                    />
                    
                ))
            }
        </div>

        <Modal 
            open={open}
            onClose = {() => setOpen(false)} 
        >
            <div style={modalStyle} className={classes.paper}>
                <form className="app__signup">
                    
                        <center>
                            <img 
                                className="nav__log" 
                                src={logo}
                                alt="Sociallite Logo" 
                                style={{backgroundColor:'midnightblue', padding:'10px'}}
                                
                            />
                        </center>

                        

                        <Button>Share and Get Paid</Button>
                        
                    
                </form>
                
            </div>    
        
        </Modal>
    </div>
    
      
    </>
  );
};

export default Promos;
