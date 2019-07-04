import { OPEN_MODAL, CLOSE_MODAL } from '../types';

export const openModal = photo => {
    return {
        type: OPEN_MODAL,
        photo
    }
}

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    }
}