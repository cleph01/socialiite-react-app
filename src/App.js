import React from 'react';
import { Route, Link } from "react-router-dom";

import Home from './components/home';
import Login from './components/login_components/login';
import HomeFeed from './components/home_components/feed_home';
import Wallet from './components/wallet/wallet';
import Post from './components/post_components/Post';
import Promos from './components/promo_components/feed_promo/PromoFeed';
import BusinessFeed from './components/business_components/BusinessFeed';
import Notification from './components/notification_components/Notification';
import Business from './components/business_components/Business';

import './App.css';

//Start Font Awesome Icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHome, faLink, faPlusSquare, faBell, faBullhorn, faBars, faUser, faFire, faPhone, faShoppingCart, faCommentDollar, faWindowClose } from '@fortawesome/free-solid-svg-icons'
 
library.add(fab, faHome, faPlusSquare, faLink, faBell, faBullhorn, faBars, faUser, faFire, faPhone, faShoppingCart, faCommentDollar, faWindowClose)
//End Font Awesome Icons

function App() {
  return (
    
    <div className="app">

      <Route exact path="/" component={Home} />
      <Route exact path="/feed" component={HomeFeed} />
      <Route exact path="/posts" component={Post} />
      <Route exact path="/promos" component={Promos} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/wallet" component={Wallet} />
      <Route exact path="/business" component={BusinessFeed} />
      <Route exact path="/notification" component={Notification} />
      <Route path="/business/:businessId" component={Business} />

    </div>
  );
}

export default App;
