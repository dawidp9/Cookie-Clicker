import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import * as serviceWorker from './boot/serviceWorker';
import { RootStateProvider } from './state/RootStateContext';

ReactDOM.render(
    <RootStateProvider>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </RootStateProvider>,
    document.getElementById('root'),
);

serviceWorker.unregister();
