import React, { useState } from "react";

export default function useToogle( current ) {
    const [value, setValue] = useState(current);

    const toogleValue = () => {
        setValue(prevValue => !prevValue);
    }
    
    return [value, toogleValue]
}