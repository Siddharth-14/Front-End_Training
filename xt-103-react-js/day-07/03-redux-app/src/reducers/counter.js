import {
    INCREMENT,
    DECREMENT
} from '../actions/constants';

function counterReducer( curState = { value : 0 }, action ) {
    let newState;

    switch( action.type ) {
        case INCREMENT:
            newState = {
                ...curState,
                value: curState.value + 1
            };
            break;
        case DECREMENT:
            newState = {
                ...curState,
                value: curState.value - 1
            };
            break;
        default:
            newState = curState;
    }

    console.log( newState );

    return newState;
}

export default counterReducer;