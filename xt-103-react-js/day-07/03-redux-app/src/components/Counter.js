import React, { Component } from 'react';
import store from '../store';
import {
    increment,
    decrement
} from '../actions/creators';

class Counter extends Component {
    render() {
        return (
            <React.Fragment>
                <button onClick={() => store.dispatch( decrement() )}>-</button>
                <input type="number" />
                <span id="counter">{store.getState().counter.value}</span>
                <button onClick={() => store.dispatch( increment() )}>+</button>
            </React.Fragment>
        );
    }

    componentDidMount() {
        store.subscribe( () => this.forceUpdate() );
    }
}

export default Counter;