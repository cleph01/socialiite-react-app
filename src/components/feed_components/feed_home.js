import React, { useState } from "react";
import styled from 'styled-components'
import { Link, useHistory } from "react-router-dom";


// Reviews Component
import Reviews from './reviews_feed';

// Promo Component
import Promos from './promo';

//Modal Component
import Modal from '../modal';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import logo from "../../assets/logo/logo_white_text.png"

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
    
`;

const Img = styled.img`
  width:75px;
  height:auto;

`;



const FeedHome = props => {
  
  const history = useHistory();

  //Handle Login Click
  function handleLoginClick(){

    history.push("/login");

  }

  //Handle Checkin Click
  function handleCheckInClick(){

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


//Holds Boolean to Control display of Modal onClick Share & Get Paid
const [modalVisible, setmodalVisible] = useState(false);


//Holds Content for Modal from onClick Share & Get Paid
const [modalContent, setModalContent] = useState({});


//Function to change state & setModalContent -- Passed as prop to promo
const showModal = (promoItem) => {

    setmodalVisible(!modalVisible)

    setModalContent(promoItem)

}

console.log(modalContent, 'modal-content')

  return (
    <>
    
    <div style={{display:'flex', flexDirection:'column', alignItems: 'center', justifyContent:'center'}}>
      
        <Nav>

            <Img src={logo} />

            <FontAwesomeIcon className='bell' icon='bell' />

            <FontAwesomeIcon icon='bullhorn' />

            <FontAwesomeIcon icon='bars' />
    
        </Nav>

        <Reviews />

        <div style={{marginTop:'10px', width:'100%'}}>
            {promos.map((item, index) => (
                <Promos 
                key={index} 
                promo_details={item}
                showModal={showModal}
                setModalContent={setModalContent}
                
                />
            ))}
        </div>

        
    </div>

    <Modal 
        modalVisible={modalVisible}
        setmodalVisible={setmodalVisible}
        modalContent={modalContent}
    >   
    </Modal>
      
    </>
  );
};

export default FeedHome;
