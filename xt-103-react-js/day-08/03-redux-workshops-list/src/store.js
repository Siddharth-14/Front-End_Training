import { createStore, combineReducers, applyMiddleware } from 'redux';
import workshopsReducer from './reducers/workshops';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
    combineReducers({
        workshopsList: workshopsReducer
    }),
    composeWithDevTools( applyMiddleware() )
);

export default store;