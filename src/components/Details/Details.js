import React, { Component } from 'react';
//import axios from 'axios';

import {connect} from 'react-redux';

class Details extends Component {

    backToList =() => this.props.history.push('/')
    edit =() => this.props.history.push('/edit')

  render() {
    return (
      
      <div>
        <footer>
        <button onClick={this.backToList}>Back to List</button>
        
        <button onClick={this.edit}>Edit</button>
        </footer>
      </div>
    );
  }
}

const mapReduxStateToProps=(reduxState)=>{
  return reduxState;
}

export default connect(mapReduxStateToProps)(Details);