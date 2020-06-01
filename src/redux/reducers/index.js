import { combineReducers } from 'redux'
import userAuth from './authReducers'
import inquiryList from './inquiryReducers'

const Appreducer = combineReducers({
    userAuth,
    inquiryList

});

export default Appreducer;