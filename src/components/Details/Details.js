import React, { Component } from 'react';
//import axios from 'axios';
import {connect} from 'react-redux';

//material-ui

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

class Details extends Component {

  componentDidMount() {
    this.getMovies();
}

getMovies() {
    this.props.dispatch({ type: 'GET_MOVIES' });
}

    backToList =() => this.props.history.push('/')
    edit =() => this.props.history.push('/edit')

  render() {
    return (
      
      <div>
         <>
         <Card>
      <CardHeader
        title={this.props.storedMovie.title}
        subheader={this.props.storedMovie.description}
      />
      </Card>
          </>
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