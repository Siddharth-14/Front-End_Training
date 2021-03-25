import React, { Component, createRef } from 'react';

function Counter( { increment, decrement, value } ) {
    let inputRef = createRef();

    return (
        <React.Fragment>
            <button onClick={() => decrement( parseInt( inputRef.current.value ) )}>-</button>
            <input type="number" ref={inputRef} defaultValue="1" />
            <span id="counter">{value}</span>
            <button onClick={() => increment( parseInt( inputRef.current.value ) )}>+</button>
        </React.Fragment>
    );
}

export default Counter;