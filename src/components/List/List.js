import React, { Component } from 'react';
//import axios from 'axios';

import { connect } from 'react-redux';

class List extends Component {

    componentDidMount() {
        this.getMovies();
    }

    getMovies() {
        this.props.dispatch({ type: 'GET_MOVIES' });
    }

    clickMovie(movie) {
        
        this.props.dispatch({ type: 'STORED_MOVIE', payload: movie})
        console.log("storing this movie for view", movie);
        this.goToDetails();
    }
        

    goToDetails =() =>  {
        this.props.history.push('/details')
    }

    render() {
        
        
        return (

            <>
                <div>
                    <h3>This is the movielist. Happy happy movie list</h3>
                    <div>
                        {this.props.movies.map((movie) => {
                            return (
                                <>

                                    {/* <div key={movie.id} onClick={()=> this.clickMovie(movie)}> */}
                                        <img alt={movie.name} src={movie.poster} onClick={()=> this.clickMovie(movie)}/>
                                        <h1>{movie.title}</h1>
                                        <span> {movie.description}</span>

                                    {/* </div> */}
                                </>
                            );
                        })}
                    </div>
                    <pre>{JSON.stringify(this.props.reduxState)}</pre>
                </div>
            </>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(List);