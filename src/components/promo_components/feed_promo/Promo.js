import React, { useState } from "react";
import styled from 'styled-components'
import '../../../lib/css/Promo.css'
import { Link, useHistory } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Avatar from "@material-ui/core/Avatar";
import { Button, Modal } from "@material-ui/core";
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

    const history = useHistory();
    
    const imageUrl = "https://static01.nyt.com/images/2011/08/10/dining/10DOGS3/10DOGS3-articleLarge.jpg?quality=75&auto=webp&disable=upscale";

    const caption = "Best Franfurter in the Biz"

    // Modal Open State
    const [open, setOpen] = useState(false)

    // Start Modal Styling
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle)
    // End Modal Styling

    //Handle Login Click
    function handleBusinessClick(business_id){

        history.push(`/business/${business_id}`);

    }

    const handleShareClick = () =>{

        props.showModal(props.promo_details)

    }
  
    console.log(props,"Promo props")

  return (
    <>
     
 
            <div className="promo">
                <div className="promo__header">

                    <Avatar
                        className="promo__avatar"
                        // alt="CMoney"
                        alt={props.promo.businessName}
                        src="/static/images/avatar/1.jpg"
                    />
                    <h3>{props.promo.businessName}</h3>
                    
                </div>    
                <img alt="" className="promo__image" src={imageUrl}/>
                {/* image */}

                {/* Liked By  and counter */}

                <h4 className="promo__text">
                    {props.promo.promotion} 
                </h4>

                <h5 className="promo__text">Rating: {props.promo.rating}</h5>

                <Button style={{margin:'10px'}}
                        onClick={handleShareClick}
                        variant="outlined" 
                >
                    Share &amp; Get Paid
                </Button>

                
            </div>

            <Modal 
                open={open}
                onClose = {() => setOpen(false)} 
            >
                <div style={modalStyle} className={classes.paper}>
                    <form className="app__signup">
                        
                            <center>
                                <div>boom</div>
                            </center>

                           

                            <Button>Share and Get Paid</Button>
                            
                        
                    </form>
                    
                </div>    
            
            </Modal>
    
      
    </>
  );
};

export default Promos;
