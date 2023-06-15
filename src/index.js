import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {takeLatest, put} from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import logger from 'redux-logger';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeLatest('FETCH_IMAGES' , fetchFav)
    yield takeLatest('POST_IMAGES' , postFav)
}

// Create a Saga that GETs from the server
function* fetchFav(){
    try{
        const favResponse = yield axios.get('/api/favorite')

        yield put({
            type: 'GET_FAVS',
            payload: favResponse.data
        })
    } catch (error){
        console.log('Error in GET /index/fetchFav', error)
    }
}

function* postFav(action){
    try{
        yield axios.post('api/favorite', action.payload)
        console.log('action.payload: ' , action.payload)

        yield put({
            type: 'FETCH_IMAGES'
        })
    } catch (error) {
        console.log('Error in POST /index/postFav' , error)
    }
}

const favoriteList = (state = [], action) => {
    switch (action.type) {
        case 'GET_FAVS':
            return action.payload
        default:
            return state;
    }
};

function* searchGif(action) {
    try {
        console.log('searchAPI dinged with action:', action.payload);
        // hold response from server in elementResponse
        const gifResponse = yield axios.get(`/api/image/${action.payload}`);
        // after server responds, then this generator function/saga continues
        console.log('searchAPI response.data is:', gifResponse.data);
        yield put({ type: 'SET_IMAGES', payload: gifResponse.data })
    } catch (error) {
        console.log('Error with fetchFruits!', error);
    }
}

const sagaMiddleware = createSagaMiddleware();

const storeInstance = createStore(
    combineReducers({
        favoriteList
    }),
    applyMiddleware(sagaMiddleware , logger),
)

sagaMiddleware.run(rootSaga);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>
);
