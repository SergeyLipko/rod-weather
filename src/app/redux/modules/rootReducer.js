import { combineReducers } from 'redux';
import forecast from './forecast';
import price from './price';

const rootReducer = combineReducers({
    forecast,
    price,
});

export default rootReducer;