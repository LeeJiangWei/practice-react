import {combineReducers} from "redux";
import authReducer from './authReducer';

export default combineReducers({
    auth: authReducer // create a key name 'auth' in redux store. its value is handled by authReducer
})