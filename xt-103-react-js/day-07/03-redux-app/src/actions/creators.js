import {
    INCREMENT,
    DECREMENT,
    UPDATE_USERNAME
} from './constants';

// action creators
function increment() {
    return {
        type: INCREMENT
    };
}

function decrement() {
    return {
        type: DECREMENT
    };
}

function updateUsername( username ) {
    return {
        type: UPDATE_USERNAME,
        payload: {
            username
        }
    };
}

export {
    increment,
    decrement,
    updateUsername
};