import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

























































































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