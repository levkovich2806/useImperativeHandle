"use client"

import React, {useState, forwardRef, useImperativeHandle, useRef, useEffect, useCallback} from "react";

const ChildComponent = forwardRef((props, ref) => {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        console.log("Current count in increment:", count);
        setCount(count + 1);
    }, [count]);

    useImperativeHandle(
        ref,
        () => ({
            increment,
        }),
        [increment] // Array of dependencies include increment function
    );

    return (
        <div>
            <h2>Count: {count}</h2>
        </div>
    );
});

export default function App() {
    const childRef = useRef();

    useEffect(() => {
        if (childRef.current) {
            console.log("Calling increment from useEffect");
            childRef.current.increment();
        }
    }, []); // Called only once, but uses the old version of the function

    return (
        <div>
            <h1>Check Imperative Handle Dependency Issue</h1>
            <ChildComponent ref={childRef}/>
            <button onClick={() => childRef.current.increment()}>
                Increment from Parent
            </button>
        </div>
    );
}


