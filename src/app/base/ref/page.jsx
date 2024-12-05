"use client"

import React, {forwardRef, useRef} from 'react';

const CustomInput = forwardRef((props, ref) => {
    // Use forwardRef to pass the ref to the input element
    return <input ref={ref} {...props} />;
});

export default function App() {
    const inputRef = useRef();

    const handleFocus = () => {
        inputRef.current.focus(); // Directly controlling the input
    };

    const handleClear = () => {
        inputRef.current.value = ''; // Directly controlling the input value
    };

    return (
        <div>
            <h1>Base without useImperativeHandle</h1>
            <CustomInput ref={inputRef}/>
            <button onClick={handleFocus}>Focus</button>
            <button onClick={handleClear}>Clear</button>
        </div>
    );
}
