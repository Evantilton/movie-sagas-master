import React, { Component } from 'react';
//import axios from 'axios';

import {connect} from 'react-redux';

class Edit extends Component {

saveThis = () => {
    console.log("saving");
    this.backToDetails();
}

    backToDetails =() => this.props.history.push('/details')
    

  render() {
    return (
      
      <div>
        <footer>
        <button onClick={this.backToDetails}>cancel</button>
        
        <button onClick={this.saveThis}>Save</button>
        </footer>
      </div>
    );
  }
}

const mapReduxStateToProps=(reduxState)=>{
  return reduxState;
}

export default connect(mapReduxStateToProps)(Edit);