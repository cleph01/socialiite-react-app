import React, { useState } from "react";
import styled from 'styled-components'
import { Link, useHistory } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import logo from "../../../assets/logo/logo_white_text.png"

import Promo from './Promo';

import { makeStyles } from '@material-ui/core/styles';

const emoji = require("emoji-dictionary");

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


const Promos = props => {

    const classes = useStyles();
    // const [modalStyle] = useState(getModalStyle)

    // //Holds Boolean to Control display of Modal onClick Share & Get Paid
    // const [modalVisible, setmodalVisible] = useState(false);

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

    const handleShareClick = () =>{

    props.showModal(props.promo_details)

    }
  

  return (
    <>
     
    <div style={{display:'flex', flexDirection:'column', alignItems: 'center', justifyContent:'center'}}>
    
        <Nav>

            <Img onClick={backHomeClick} src={logo} />

            <FontAwesomeIcon className='bell' icon='bell' />

            <FontAwesomeIcon onClick={backHomeClick} icon='home' />

            <FontAwesomeIcon icon='bars' />

        </Nav>

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
    </div>
    
      
    </>
  );
};

export default Promos;
