import {
    WORKSHOPS_LIST_LOADING,
    WORKSHOPS_LIST_ERROR_LOADING,
    WORKSHOPS_LIST_LOADED
} from './constants';

function workshopsLoading() {
    return {
        type: WORKSHOPS_LIST_LOADING
    };
}

function workshopsLoaded( workshops ) {
    return {
        type: WORKSHOPS_LIST_LOADED,
        payload: {
            workshops
        }
    };
}

function workshopsErrorLoading( error ) {
    return {
        type: WORKSHOPS_LIST_ERROR_LOADING,
        payload: {
            error
        }
    };
}

export {
    workshopsLoading,
    workshopsLoaded,
    workshopsErrorLoading
};