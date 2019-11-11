import React, { Component } from 'react';
import './App.css';

import { HashRouter as Router, Route, Link} from 'react-router-dom';

import List from './../List/List'
import Details from './../Details/Details'
import Edit from './../Edit/Edit'


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
      backgroundRepeat: "repeat",
			backgroundPosition: "center",
			backgroundSize: "1000px 1100px",
      backgroundAttachment: "fixed",
      backgroundColor: "black",
			height: "%"
    },
    header: {
      backgroundColor: "transparent"
    },
		html: {
			height: "100%",
    },
    h1: {
      textColor: "white",
    }
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
        
        <br/>
          
          <Route exact path="/" component={List}/>
          <Route exact path="/Details" component={Details}/>
          <Route exact path="/Edit" component={Edit}/>
          
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
