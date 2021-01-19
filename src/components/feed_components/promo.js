import React, { useState } from "react";
import styled from 'styled-components'
import { Link, useHistory } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const emoji = require("emoji-dictionary");

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
     
        <Container>
 
            <div>

                <LeftWrapper>
                    <div>{emoji.getUnicode(props.promo_details.emoji)}</div>
                    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}><span>Rating:</span><span>{props.promo_details.rating}</span></div>
                </LeftWrapper>
            </div>
            <div>
                <RightWrapper>

                    <PromoTextWrapper>
                        <div>{props.promo_details.businessName}</div>   
                        <div>{props.promo_details.promotion}</div>
                    </PromoTextWrapper>

                    <Button
                        onClick={handleShareClick}
                    >
                        Share &amp; Get Paid
                    </Button>

                </RightWrapper>

            </div>

        </Container>
    
      
    </>
  );
};

export default Promos;
