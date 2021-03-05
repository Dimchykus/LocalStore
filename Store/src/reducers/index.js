import {combineReducers} from 'redux';
import reducer from './item';
import reducer1 from "./basket"

export default combineReducers({
    MyReducer: reducer,
    CardReducer: reducer1
});
