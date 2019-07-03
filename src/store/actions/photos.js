import axios from 'axios';
import { POPULATE_PHOTOS, ADD_COMMENT } from '../types';
import { api } from '../../constants';

const populatePhotos = photos => {
    return {
        type: POPULATE_PHOTOS,
        photos
    }
}

export const fetchPhotos = () => {
    return dispatch => {
        axios.get(`${api}/photos`)
        .then(response => dispatch(populatePhotos(response.data)))
        .catch(err => console.log(err))
    }
}

export const addComment = (id, comment) => {
    return {
        type: ADD_COMMENT,
        id,
        comment
    }
}