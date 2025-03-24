import { useState } from 'react'

function useCounter(initialvalue=0) {
    const [count, setCount] = useState(initialvalue)
    function increment() {
        setCount(count + 1)
    }
    function decrement() {
        setCount(count - 1)
    }
    return [count, increment, decrement]
}

export default useCounter
