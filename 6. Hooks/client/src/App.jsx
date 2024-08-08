import React, { useEffect } from "react";
import useFetch from "./useFetch";
import useToogle from "./useToogle";
import useCounter from "./useCounter";

export default function App() {
    const [kamranProfile, kLoading, kError] = useFetch('https://api.github.com/users/kamranahmedse');
    const [myProfile, mLoading, mError] = useFetch('https://api.github.com/users/webbykacper');
    const [isOn, toogle] = useToogle(false);

    const [count, increment, decrement, reset] = useCounter(4);
    const [aCount, aIncrement, aDecrement, aReset] = useCounter(7);

    useEffect(() => {
        if(kamranProfile)
            console.log(kamranProfile);
    }, [kamranProfile])

    useEffect(() => {
        if(myProfile)
            console.log(myProfile);
    }, [myProfile])

    function displayIsOn() {
        console.log(isOn);
    }

    return (
        <div>
            <p> Current count: {count} </p>
            <p> another count: {aCount} </p>
            <button onClick={increment}> Increment </button>
            <button onClick={decrement}> Decrement </button>
            <button onClick={reset}> Reset </button>
        </div>
    )
}