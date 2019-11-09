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
                <h3>This is the movielist. Happy happy movie list</h3>
                <ul>
                    {this.props.movies.map((movie) => {
                        return (
                            <li key={movie.id}>
                                <image>{movie.poster}</image>
                                <h1>{movie.title}</h1>
                                <span> {movie.description}</span>
                                
                            </li>
                        );
                    })}
                </ul>
                <pre>{JSON.stringify(this.props.reduxState)}</pre>
            </div>
      
    );
  }
}

const mapReduxStateToProps=(reduxState)=>{
  return reduxState;
}

export default connect(mapReduxStateToProps)(List);