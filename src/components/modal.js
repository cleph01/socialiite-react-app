import React, { useState } from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {CopyToClipboard} from 'react-copy-to-clipboard';


const BackdropStyle = styled.div`

    display:flex;
    justify-content: center;
    align-items:center;
    position:fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,0.3);
    padding: 50;

`;


const ModalStyle = styled.div`

    background-color:#fff;
    border-radius:5px;
    width: 500px;
    height: 325px;
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content: space-around;
    padding: 30px;
    position: relative;
`

const Offer = styled.div`

    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;

    background-color: #44adee;
    color: #fff;
`

const Reward = styled.div`

    color: #233479;
    border: 1px solid gold;   
`

const Instructions = styled.div`

    color: #233479;
    background-color: #f1f1f1;
`

const Message = styled.div`

    text-align:center;
    color: #233479;
    font-size: 16px;
`

const Footer = styled.footer`

    display: flex;
    flex-direction: row;
    width: 250px;
    justify-content: space-around;
    align-itmes: center;
    font-size: 40px;
    margin-top: 20px;
`


const ModalClose = styled.button`

    color: #233479;
    width: 100%;
    border: none;
    font-size: 30px;
`





const Modal = props => {

    const onClose = e => {

        props.setmodalVisible(false)
    }


    //Holds Deep Link Msgs
    const [message, setMessage] = useState('Booya');

    const onSMSclick = e => {

        const sms_msg = 'bla';

        const page = "sms:&body="+sms_msg;

        window.location.href = page;
    }

    const onCopyFB = e => {

        const page = 'https://m.facebook.com';   

        window.open(page, '_blank'); 
  
    }

    const onCopyIG = e => {

        window.location.href = 'instagram://'
    }

    const onTwitterclick = e => {

    }

        if(props.modalVisible){

            return (
                    <>
                        <BackdropStyle>

                            
                
                            <ModalStyle>

                            <ModalClose >
                                <div style={{display:'flex', justifyContent:'flex-end', width:'100%'}}>
                                    <FontAwesomeIcon icon='window-close' onClick={onClose}></FontAwesomeIcon>
                                </div>    
                            </ModalClose>
                                
                                <Offer>Share: {props.modalContent.businessName} <p>{props.modalContent.promotion}</p></Offer>

                                <Reward><u>You Get: </u> Need to pull rewards from DB</Reward>

                                <Instructions>
                                    <ol>
                                        <li>
                                            Click an icon below.
                                        </li>
                                        <li>
                                            Click PASTE to auto-populate your promo.
                                        </li>
                                        <li>
                                            Share Promos &amp; Get Paid Instantly!
                                        </li>
                                    </ol>
                                </Instructions>

                                <Message>Combine your wins and get FREE food, 
                                    FREE haircuts, FREE services + More!</Message>

                                <Footer>
                                    <FontAwesomeIcon icon='comment-dollar' style={{color:'#5BC236'}} onClick={onSMSclick} />
                                   
                                    <CopyToClipboard onCopy={onCopyFB} text={message}>
                                        <FontAwesomeIcon icon={['fab','facebook']} style={{color:'#3b5998'}} />
                                    </CopyToClipboard>

                                    <FontAwesomeIcon icon={['fab', 'instagram']} style={{color:'#dd2a7b'}} onClick={onIGclick} />
                                    <FontAwesomeIcon icon={['fab', 'twitter']} style={{color:'#00acee'}} onClick={onTwitterclick} />
                                </Footer>

                            </ModalStyle>

                        </BackdropStyle>
                    </>
                    );

        }else{
            return null;
        }
  
  ;
};

export default Modal;
