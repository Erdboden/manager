import React, {Component} from 'react';
import ReduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyAtJE4RmCMqQ-mHGIIo6IdYXlv9a1UA_TM",
            authDomain: "manager-ef46e.firebaseapp.com",
            databaseURL: "https://manager-ef46e.firebaseio.com",
            projectId: "manager-ef46e",
            storageBucket: "manager-ef46e.appspot.com",
            messagingSenderId: "867650922693"
        };

        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router/>
            </Provider>
        );
    }
}

export default App;