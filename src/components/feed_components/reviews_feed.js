import React, { useState } from "react";
import styled from 'styled-components'
import { Link, useHistory } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Container = styled.div`

    color: #516186;
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content: space-around;
    box-shadow: 0 1px 6px -2px #000;
    
`;

const ReviewText = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    padding: 10px;
`


const BusinessLink = styled.a`
    padding: 10px;
`


const Img = styled.img`
  width:75px;
  height:auto;

`;



const Reviews = props => {
  
  const history = useHistory();


  const [reviews, setReviews] = useState([
    {
        userHandle:'cmoney',
        review:'Best sandwiches around',
        rating:4.89,
        reviewCount:156,
        businessName:'Fratelli Market'
    },
    {
        userHandle:'big_willy',
        review:'Amazing Burger Spot',
        rating:4.96,
        reviewCount:273,
        businessName:'Hubbas'
    },
    {
        userHandle:'Kit_Kat',
        review:'Most Beautiful Rings',
        rating:4.93,
        reviewCount:369,
        businessName:"Papa's Jewelers"
    } 
]);


  //Handle Login Click
  function handleBusinessClick(business_id){

    history.push(`/business/${business_id}`);

  }

  

  return (
    <>
     
        <Container>

            <FontAwesomeIcon icon='user' style={{fontSize:'32px', border:'1px solid #516186', borderRadius:'50%', padding:'12px'}} />

            <ReviewText>
                <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <div>{reviews[0].userHandle}</div>
                    <div>"{reviews[0].review}"</div> 
                    <div>
                        <span>{reviews[0].rating} </span>
                        <FontAwesomeIcon style={{color:'#037afb'}} icon='fire' />
                        <span> ({reviews[0].reviewCount})</span>
                    </div>   
                </div>
            </ReviewText>

            <BusinessLink>{reviews[0].businessName}</BusinessLink>
    
        </Container>
    
      
    </>
  );
};

export default Reviews;
