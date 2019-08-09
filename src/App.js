import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import TempSearch from './components/TempSearch';
import Footer from './components/Footer';
import TempCard from './components/TempCard';
import WrongZip from './components/WrongZip';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className='container-fluid'>
          <Header />
          <Router>
            <Route exact path='/' component={ TempSearch }/>
            <Route exact path='/temp-card' component={ TempCard }/>
            <Route exact path='/wrong-zip' component={ WrongZip }/>
          </Router>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
  
}

export default App;
