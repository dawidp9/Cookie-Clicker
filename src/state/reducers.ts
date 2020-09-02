import { combineReducers } from 'redux';
import pointsReducer from './points/reduer';
import levelReducer from './level/reduer';
import storeReducer from './store/reduer';

export default combineReducers({
    points: pointsReducer,
    level: levelReducer,
    store: storeReducer,
});
