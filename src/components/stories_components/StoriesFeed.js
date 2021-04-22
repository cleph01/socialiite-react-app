import React, { useState } from "react";
import styled from 'styled-components'
import { useHistory } from "react-router-dom";

import Avatar from "@material-ui/core/Avatar";

import { FaPlusCircle } from 'react-icons/fa'


const Container = styled.div`
    margin-top: 50px;
    background-color: #fff;
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content: space-around;
    box-shadow: 0 1px 6px -2px #000;
    position: fixed;
    top:0;
    
    
`;



const Stories = props => {
  
  const history = useHistory();


  const [stories, setStories] = useState([
    {
        userHandle:'cmoney',
        review:'Best sandwiches around',
        rating:4.89,
        reviewCount:156,
        businessName:'Fratelli Market',
        imageUrl:'/static/images/avatar/1.jpg'
    },
    {
        userHandle:'big_willy',
        review:'Amazing Burger Spot',
        rating:4.96,
        reviewCount:273,
        businessName:'Hubbas',
        imageUrl:'/static/images/avatar/1.jpg'
    },
    {
        userHandle:'Kit_Kat',
        review:'Most Beautiful Rings',
        rating:4.93,
        reviewCount:369,
        businessName:"Papa's Jewelers",
        imageUrl:'/static/images/avatar/1.jpg'
    },
    {
        userHandle:'cmoney',
        review:'Best sandwiches around',
        rating:4.89,
        reviewCount:156,
        businessName:'Fratelli Market',
        imageUrl:'/static/images/avatar/1.jpg'
    },
    {
        userHandle:'big_willy',
        review:'Amazing Burger Spot',
        rating:4.96,
        reviewCount:273,
        businessName:'Hubbas',
        imageUrl:'/static/images/avatar/1.jpg'
    },
    {
        userHandle:'Kit_Kat',
        review:'Most Beautiful Rings',
        rating:4.93,
        reviewCount:369,
        businessName:"Papa's Jewelers",
        imageUrl:'/static/images/avatar/1.jpg'
    }  

]);


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


  //Handle Login Click
  function handleStoryClick(business_id){

    history.push(`/business/${business_id}`);

  }

  const [isWatched, setIsWatched] = useState(false)

  

  return (
    <>
     
     

        <Container>

            {/* Need to figure out Capping map output 
            according to screensize*/}
            
            <FaPlusCircle style={{fontSize:"40px", color:"#203158"}} />
            
            {promos.map( (promo, index) => (
                <Avatar 
                    key={index}
                    className="post__avatar"
                    // alt="story.userHandle"
                    alt={promo.businessName}
                    src="/static/images/avatar/1.jpg"
                    onClick={ ()=>handleStoryClick(promo.businessId)}
                    
                />
            ))}
        
    
        </Container>
    
      
    </>
  );
};

export default Stories;
