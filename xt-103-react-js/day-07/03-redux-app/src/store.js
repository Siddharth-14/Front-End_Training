import { createStore, combineReducers } from 'redux';
import counterReducer from './reducers/counter';
import formReducer from './reducers/form';

const store = createStore( 
    combineReducers({
        counter: counterReducer,
        form: formReducer
    })
);

/*
    // shape of the state tree
    {
        counter: {
            value: 0
        },
        form: {
            name: ''
        }
    }
*/

export default store;