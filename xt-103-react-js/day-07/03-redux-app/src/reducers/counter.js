import {
    INCREMENT,
    DECREMENT
} from '../actions/constants';

function counterReducer( curState = { counter : 0 }, action ) {
    let newState;

    switch( action.type ) {
        case INCREMENT:
            newState = {
                ...curState,
                counter: curState.counter + 1
            };
            break;
        case DECREMENT:
            newState = {
                ...curState,
                counter: curState.counter - 1
            };
            break;
        default:
            newState = curState;
    }

    console.log( newState );

    return newState;
}

export default counterReducer;