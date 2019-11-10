import React, { Component } from 'react';
//import axios from 'axios';

import {connect} from 'react-redux';

class Edit extends Component {


state = {
  edited: {
      id: '',
      title: '',
      description: '',
}
}
saveThis = (event) => {
    console.log("saving");
    this.props.dispatch({ type: 'EDIT_MOVIES', payload: this.state})
    this.backToDetails();
}

    backToDetails =() => this.props.history.push('/details')
    
    handleNameChange = event => {
      console.log('event happended')
      this.setState({
          edited: {
              ...this.state.edited,
              id: this.props.storedMovie.id,
              [event.target.name]: event.target.value,
          }
      });
  }

  render() {
    return (
      <>
      <div>
        
                    <input type='text' placeholder='title' name='title' value={this.state.edited.title} onChange={this.handleNameChange} />
                    <input type='text' placeholder='description' name='description' value={this.state.edited.description} onChange={this.handleNameChange} />
                    
                
        
        <footer>
        <button onClick={this.backToDetails}>cancel</button>
        <button onClick={this.saveThis}>save</button>
        </footer>
        <div>
                    <pre>{JSON.stringify(this.state)}</pre>
                </div>
                
      </div>
      </>
    );
  }
}

const mapReduxStateToProps=(reduxState)=>{
  return reduxState;
}

export default connect(mapReduxStateToProps)(Edit);