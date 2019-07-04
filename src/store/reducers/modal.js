import { OPEN_MODAL, CLOSE_MODAL, ADD_COMMENT } from '../types';

const initialState = {
    open: false,
    photo: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                open: true,
                photo: action.photo
            };
    
        case CLOSE_MODAL:
            return initialState;

        case ADD_COMMENT:
            return {
                ...state,
                photo: {
                    ...state.photo,
                    comments: [...state.photo.comments, action.comment]
                }
            }
        
        default:
            return state;
    }
}