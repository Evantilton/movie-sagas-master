import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import { HashRouter as Router, Route, Link} from 'react-router-dom';

import List from './../List/List'
import Details from './../Details/Details'
import Edit from './../Edit/Edit'
class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      
        <Router>
         <div className="App">
        <header className="App-header">
          <h1 className="App-title">MOVIES!</h1>
          <h4><i>YEAH MOVIES!</i></h4>
        </header>
        <ul>
            <li>
              <Link to="/">Home 1 of 3</Link>
            </li>
            <li>
              <Link to="/Details">Details 2 of 3</Link>
            </li>
            <li>
              <Link to="/Edit">Edit 3 of 3</Link>
            </li>
            
          </ul>
        <br/>
          
          <Route exact path="/" component={List}/>
          <Route exact path="/Details" component={Details}/>
          <Route exact path="/Edit" component={Edit}/>
          
        </div>
      </Router>
      
    );
  }
}
const putReduxStateOnProps = ( reduxStore ) => ({
  reduxStore
 })
 
 export default connect(putReduxStateOnProps)(App);
