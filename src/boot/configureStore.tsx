import { createStore, Store } from 'redux';
import reducers from '../state/reducers';

const configureStore = (): Store<any> => {
    const _WINDOW = window as any;
    const reduxDevTools =
        _WINDOW.__REDUX_DEVTOOLS_EXTENSION__ &&
        _WINDOW.__REDUX_DEVTOOLS_EXTENSION__();

    return createStore(reducers, reduxDevTools) as Store<any>;
};

const store = configureStore();

export default store;
