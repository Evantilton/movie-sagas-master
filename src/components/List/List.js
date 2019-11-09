import React, { Component } from 'react';
//import axios from 'axios';

import {connect} from 'react-redux';

class List extends Component {

    componentDidMount() {
        this.getMovies();  
      }
  
      getMovies() {
          this.props.dispatch({ type: 'GET_MOVIES'});
      }

  render() {
    return (
      
      <div>
        
      </div>
    );
  }
}

const mapReduxStateToProps=(reduxState)=>{
  return reduxState;
}

export default connect(mapReduxStateToProps)(List);