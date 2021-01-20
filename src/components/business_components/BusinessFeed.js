import React from 'react'
import { Link, useHistory, useParams } from "react-router-dom"

import Nav from '../navigation_components/Nav'
import Business from './Business'

import '../../lib/css/Business.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import logo from "../../assets/logo/logo_white_text.png"

function BusinessFeed() {

    const history = useHistory();

    //Handle Login Click
    function backHomeClick(){

        history.push("/feed");

    }

    return (
        <div>
            <Nav 
                icon1="home"
                icon2="bullhorn"
                destination1="feed"
                destination2="promos"
            />

            
            <Business />
        </div>
    )
}

export default BusinessFeed
