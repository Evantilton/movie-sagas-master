import React, { Component } from 'react';
import { connect } from 'react-redux';

class Edit extends Component {

  // local state allows for easy change of the inputs 
  state = {
    edited: {
      id: '',
      title: '',
      description: '',
    }
  }//end local state
  //saveThis saves the users changes and sends them off to the database and to the stored movie
  saveThis = (event) => {
    console.log("saving");
    this.props.dispatch({ type: 'EDIT_MOVIES', payload: this.state })
    this.props.dispatch({ type: 'STORED_MOVIE', payload: this.state.edited })
    this.backToDetails();
  }// end saveThis

  //backToDetails returns the users back to the details route
  backToDetails = () => this.props.history.push('/details')
  //end back to details

  //handleNameChange handles the input changes as the user types in the input fields
  handleNameChange = event => {
    console.log('event happended')
    this.setState({
      edited: {
        ...this.state.edited,
        id: this.props.storedMovie.id,
        [event.target.name]: event.target.value,
      }
    });
  }// end handleNameChange

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
        </div>
      </>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
}
export default connect(mapReduxStateToProps)(Edit);