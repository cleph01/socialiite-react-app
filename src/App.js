import React from 'react';
import { Route, Link } from "react-router-dom";

import Home from './components/home';
import Login from './components/login_components/login';
import FeedHome from './components/home/feed_home';
import Wallet from './components/wallet/wallet';
import Post from './components/post_components/Post';
import Promos from './components/promo_components/feed_promo/PromoFeed';

import './App.css';

//Start Font Awesome Icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHome, faBell, faBullhorn, faBars, faUser, faFire, faPhone, faShoppingCart, faCommentDollar, faWindowClose } from '@fortawesome/free-solid-svg-icons'
 
library.add(fab, faHome, faBell, faBullhorn, faBars, faUser, faFire, faPhone, faShoppingCart, faCommentDollar, faWindowClose)
//End Font Awesome Icons

function App() {
  return (
    
    <div className="app">

      <Route exact path="/" component={Home} />
      <Route exact path="/feed" component={FeedHome} />
      <Route exact path="/posts" component={Post} />
      <Route exact path="/promos" component={Promos} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/wallet" component={Wallet} />

    </div>
  );
}

export default App;
