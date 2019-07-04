import { combineReducers } from 'redux';
import photos from './photos';
import modal from './modal';

export default combineReducers({
    photos,
    modal
})