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

        this.props.dispatch({ type: 'STORED_MOVIE', payload: movie })
        console.log("storing this movie for view", movie);
        this.goToDetails();
    }


    goToDetails = () => {
        this.props.history.push('/details')
    }

    render() {


        return (

            <>
           
                {this.props.movies.map((movie) => {
                    return (
                        <>
                            <card  id={movie.name}>
                                <media >
                                    <img alt={movie.name} src={movie.poster} onClick={() => this.clickMovie(movie)} />
                                </media>


                                <card
                                
                                    title={movie.title}
                                    subheader={movie.description}
                                />

                            </card>
                            
                        </>
                    );
                })}

                <pre>{JSON.stringify(this.props.reduxState)}</pre>
                
                
            </>

        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(List);