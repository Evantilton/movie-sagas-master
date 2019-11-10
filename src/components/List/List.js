import React, { Component } from 'react';
//import axios from 'axios';

import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
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
                            <Card class="card" id={movie.name}>
                                <img img alt={movie.name} src={movie.poster} onClick={() => this.clickMovie(movie)} />

                                <h1 text='white'>{movie.title}</h1>
                                <p text='white'>{movie.description}</p>
                            </Card>
                            
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