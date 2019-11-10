import React, { Component } from 'react';
//import axios from 'axios';

import { connect } from 'react-redux';

// material-ui

import Card from '@material-ui/core/Card';

import CardMedia from '@material-ui/core/CardMedia';

import CardHeader from '@material-ui/core/CardHeader';


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
                            <Card id={movie.name}>
                                <CardMedia>
                                    <img alt={movie.name} src={movie.poster} onClick={() => this.clickMovie(movie)} />
                                </CardMedia>


                                <CardHeader
                                    title={movie.title}
                                    subheader={movie.description}
                                />

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