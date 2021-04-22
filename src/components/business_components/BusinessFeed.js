import React from 'react'
import { Link, useHistory, useParams, useLocation } from "react-router-dom"

import Nav from '../navigation_components/Nav'
import Business from './Business'

import PromoStories from '../stories_components/StoriesFeed';

import '../../lib/css/Business.css'

import logo from "../../assets/logo/logo_white_text.png"

function BusinessFeed() {

    const history = useHistory();

    //Handle Login Click
    function backHomeClick(){

        history.push("/feed");

    }

    const location = useLocation();

    console.log("Path: ", location.pathname)
    
    return (
        <div>
            <Business />
        </div>
    )
}

export default BusinessFeed
