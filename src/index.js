import React from 'react';
import ReactDOM from 'react-dom'; 
import './index.css'; 
import App from './Container/App';
import registerServiceWorker from './registerServiceWorker';
import {compose,combineReducers,createStore,applyMiddleware} from 'redux'; 
import thunk from 'redux-thunk';
import {BrowserRouter} from 'react-router-dom'; 
import {Provider} from 'react-redux';


import UserProfileReducer from './Store/Reducer/UserProfileReducer';
import searchBarReducer from './Store/Reducer/searchBar';
import allChatReducer from './Store/Reducer/AllChat';
import chatboxReducer from './Store/Reducer/chatbox';
import sendMessageReducer from './Store/Reducer/SendMessage';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({ 
    allChat: allChatReducer,
    userProfile: UserProfileReducer,
    search: searchBarReducer,
    chatbox: chatboxReducer,
    sendmessage: sendMessageReducer
});

const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
