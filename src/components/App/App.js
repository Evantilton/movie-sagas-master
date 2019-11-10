import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import { HashRouter as Router, Route, Link} from 'react-router-dom';

import List from './../List/List'
import Details from './../Details/Details'
import Edit from './../Edit/Edit'
import Test from '../Test/Test'

import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";

//React Rain Style
import ReactRain from 'react-rain-animation';

// import all the styles
import "react-rain-animation/lib/style.css";


const styles = theme => ({
	"@global": {
		body: {
			backgroundImage: "url('/images/background.jpg')", 
      backgroundRepeat: "no-repeat",
			backgroundPosition: "center center",
			backgroundSize: "800px",
      backgroundAttachment: "fixed",
      backgroundColor: "black",
			height: "100%"
    },
    header: {
      backgroundColor: "transparent"
    },
		html: {
			height: "100%"
		},
    card: {
        Width: "500px",
      
		},
	}
});
class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <>
      <ReactRain
                   numDrops="20" 
                    />
      <CssBaseline />
        <Router>
         <div className="App">
        <header className="App-header">
          <h1 className="App-title">Rainy Day Movie Suggestions</h1>
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
            <li>
              <Link to="/Test">TEST 4 of 3</Link>
            </li>
            
          </ul>
        <br/>
          
          <Route exact path="/" component={List}/>
          <Route exact path="/Details" component={Details}/>
          <Route exact path="/Edit" component={Edit}/>
          <Route exact path="/Test" component={Test}/>
        </div>
      </Router>
      </>
    );
  }
}
const putReduxStateOnProps = ( reduxStore ) => ({
  reduxStore
 })
 
 export default withStyles(styles)(App);
