import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {MainHeader} from '~common-components/header/MainHeader.jsx';
import {HomePage} from '~pages/home/HomePage.jsx'
import {LeaderPage} from '~pages/leader/LeaderPage.jsx'
import {Techboard} from '~common-components/techboard/Techboard.jsx';

import logo from '~data/images/logo.svg';
import './App.scss';


class App extends Component {

  render() {
    return (
    <Router>
      <main className="grey lighten-5">
        <MainHeader logo={logo}></MainHeader>
        <Route exact path="/" component={HomePage} />
        <Route path="/leader/:id" component={LeaderPage} />
        <Route path="/techboard" component={Techboard} />
      </main>
    </Router>
    );
  }
}

export default App;
