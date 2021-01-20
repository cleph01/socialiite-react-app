import React, { useState } from "react";
import styled from 'styled-components'
import { Link, useHistory } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import logo from "../../../assets/logo/logo_white_text.png"

import Promo from './Promo';

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

const Container = styled.div`

    color: #516186;
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content: center;
    box-shadow: 0 1px 6px -2px #000;
    margin:15px 0px;
    
    
`;

const LeftWrapper = styled.div`
    width:75px;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    padding: 10px;
    border-right: 1px solid #f1f1f1;
    margin-left: 33%;
`

const RightWrapper = styled.div`
    margin-left: 25px;
    max-width: 210px;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    padding: 10px;
    
`

const PromoTextWrapper = styled.span`
    background-color: #faf8f8;
    border-left: 1px solid #203158;
    border-bottom: 1px solid #203158;
    padding:10px;
    
`

const Button = styled.button`
    color: #ffffff;
    font-size: 20px;
    border-radius: 5px;
    background-color: #037afb;
    padding: 5px;
    margin-top: 10px;
`

const BusinessLink = styled.a`
    padding: 10px;
`

const Img = styled.img`
  width:75px;
  height:auto;

`;




const Promos = props => {


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


    //Handle Login Click
    function handleBusinessClick(business_id){

    history.push(`/business/${business_id}`);

    }

    const handleShareClick = () =>{

    props.showModal(props.promo_details)

    }
  

  return (
    <>
     
    <Nav>

        <Img src={logo} />

        <FontAwesomeIcon className='bell' icon='bell' />

        <FontAwesomeIcon icon='bullhorn' />

        <FontAwesomeIcon icon='bars' />

    </Nav>

    {
            promos.map( ({promo, index}) => (
                
                <Promo 
                    key={index}
                    promo={promo}
                    
                />
            ))
        }
    
      
    </>
  );
};

export default Promos;
