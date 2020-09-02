import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import * as serviceWorker from './boot/serviceWorker';
import { Provider } from 'react-redux';
import store from './boot/configureStore';

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById('root'),
);

serviceWorker.unregister();
