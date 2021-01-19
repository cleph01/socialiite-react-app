import React from 'react';
import { Route, Link } from "react-router-dom";

import Home from './components/home';
import Login from './components/login';
import FeedHome from './components/feed_components/feed_home';
import Wallet from './components/wallet/wallet';
import Post from './components/feed_components/Post';

import './App.css';

//Start Font Awesome Icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBell, faBullhorn, faBars, faUser, faFire, faPhone, faShoppingCart, faCommentDollar, faWindowClose } from '@fortawesome/free-solid-svg-icons'
 
library.add(fab, faBell, faBullhorn, faBars, faUser, faFire, faPhone, faShoppingCart, faCommentDollar, faWindowClose)
//End Font Awesome Icons

function App() {
  return (
    
    <div className="app">

      <Route exact path="/" component={Home} />
      <Route exact path="/post" component={Post} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/feed" component={FeedHome} />
      <Route exact path="/wallet" component={Wallet} />

    </div>
  );
}

export default App;
