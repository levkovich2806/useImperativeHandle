"use client"

import React, {useImperativeHandle, forwardRef, useRef} from 'react';

const CustomInput = forwardRef((props, ref) => {
    const inputRef = useRef();

    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus();
        },
        clear: () => {
            inputRef.current.value = '';
        },
    }));

    return <input ref={inputRef} {...props} />;
});

export default function App() {
    const inputRef = useRef();

    return (
        <div>
            <CustomInput ref={inputRef}/>
            <button onClick={() => inputRef.current?.focus()}>Focus</button>
            <button onClick={() => inputRef.current?.clear()}>Clear</button>
        </div>
    );
}
