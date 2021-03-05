import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './store';
import App from './components/App';
import 'semantic-ui-css/semantic.min.css'
import CreateStore from "./store"

ReactDOM.render(
    <Provider store={CreateStore}>
        <App />
    </Provider>
    ,
    document.getElementById('root')
);
