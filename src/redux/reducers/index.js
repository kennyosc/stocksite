import { combineReducers } from 'redux'
import userAuth from './authReducers'

const Appreducer = combineReducers({
    userAuth
});

export default Appreducer;