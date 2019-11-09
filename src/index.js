import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';

import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

//////////////////////////////Sagas///////////////////////////////////

//GET SAGA
function* getMovies(action) {
    try
    {const movieResponse = yield axios.get('/movies');
    yield put({ type: 'SET_MOVIES', payload: movieResponse.data });
     console.log('getMovies was hit with an action', action);
    } catch(error){
        console.log('error fetching movies', error);
    }
  }
  //End GET SAGA


  // Create the rootSaga generator function
function* rootSaga() {

    yield takeEvery('GET_MOVIES', getMovies);
   // yield takeEvery('GET_BASKET', getBasket);
    //postPlants
    
    }

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

/////////////////////////////REDUCERS/////////////////////////////

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
