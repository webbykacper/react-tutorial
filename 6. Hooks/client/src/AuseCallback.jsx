import React, { useCallback, useState } from "react";

export default function AuseCallback() {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => { // -> useCallback zapamietuje funkcje i nie tworzy jej po kolejnych renderach tego komponentu
        setCount(prevCount => prevCount + 1);
    })

    return (
        <div>
            <h1> Couter: {count} </h1>
            <button onClick={increment}> Increment </button>
        </div>
    )
}