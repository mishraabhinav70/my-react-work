import React, { useReducer } from 'react'

const initialstate = 0;
const reducer = (state, action) => {
    switch (action) {
        case "increment":
            return state + 1
        case "decrement":
            return state - 1
        default:
            return state
    }
}

function Counter() {
    const [count, dispatch] = useReducer(reducer, initialstate)
    return (
        <div>
            <div>count = {count}</div>
            <button onClick={
                () => dispatch("increment")}>increment</button>
            <button onClick={
                () => dispatch("decrement")}>decrement</button>
        </div>
    )
}

export default Counter
