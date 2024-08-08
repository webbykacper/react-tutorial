import React, { useState } from "react";

export default function useCounter(initialValue) {
    const [counter, setCounter] = useState(initialValue);

    function increment() {
        setCounter(prevCount => prevCount + 1);
    }

    function decrement() {
        setCounter(prevCount => prevCount - 1);
    }

    function reset() {
        setCounter(0);
    }

    return [counter, increment, decrement, reset];
}