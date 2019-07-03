import { combineReducers } from 'redux';
import { POPULATE_PHOTOS, ADD_COMMENT } from '../types';

const photoIds = (state = [], action) => {
    switch (action.type) {
        case POPULATE_PHOTOS:
            return action.photos.map(photo => photo.id);
    
        default:
            return state;
    }
}

const photosById = (state = {}, action) => {
    switch (action.type) {
        case POPULATE_PHOTOS:
            return action.photos.reduce((obj, photo) => {
                return {
                    ...obj,
                    [photo.id]: photo
                }
            }, {});
    
        case ADD_COMMENT:
            const commentedOn =  {
                ...state[action.id],
                comments: [...state[action.id].comments, action.comment]
            }
            return {
                ...state,
                [action.id]: commentedOn
            }

        default:
            return state;
    }
}

export default combineReducers({
    photoIds,
    photosById
})