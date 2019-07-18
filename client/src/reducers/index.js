import {combineReducers} from "redux";
import { reducer as formReducer} from 'redux-form';
import authReducer from './authReducer';
import streamReducer from './streamReducer';

export default combineReducers({
    auth: authReducer, // create a key name 'auth' in redux store. its value is handled by authReducer
    form: formReducer,
    streams: streamReducer
})