import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux';
import { MainHeader } from '~common-components/header/MainHeader.jsx';
import { HomePage } from '~pages/home/HomePage.jsx'
import { LeaderPage } from '~pages/leader/LeaderPage.jsx'
import { ContactsPage } from '~pages/contacts/ContactsPage.jsx';
import { ProjectsPage } from '~pages/projects/ProjectsPage.jsx';
import { Techboard } from '~common-components/techboard/Techboard.jsx';

import logo from '~data/images/logo.svg';
import './App.scss';

import store from '~store';

const customHistory = createBrowserHistory();
syncHistoryWithStore(customHistory, store);
class App extends Component {

  render() {
      return (
          <Provider store={store}>
              <Router history={customHistory}>
                  <main className="grey lighten-5">
                      <MainHeader logo={logo}></MainHeader>
                      <Route exact path="/" component={HomePage} a />
                      <Route path="/leader/:id" component={LeaderPage} />
                      <Route path="/contacts" component={ContactsPage} />
                      <Route path="/techboard" component={Techboard} />
                      <Route path="/projects" component={ProjectsPage} />
                  </main>
              </Router>
          </Provider>
      );
  }
}

export default App;
