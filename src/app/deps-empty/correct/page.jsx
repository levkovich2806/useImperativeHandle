"use client"

import React, {useState, forwardRef, useImperativeHandle, useRef} from "react";

const ChildComponent = forwardRef((props, ref) => {
    const [count, setCount] = useState(0);
    
    useImperativeHandle(ref, () => {
        // There is might be a difficult task
        console.log("useImperativeHandle calculated again");

        return {
            increment: () => setCount((prev) => prev + 1),
        };
    }, []); // Array of dependencies is incorrect

    return <div>Count: {count}</div>;
});

export default function App() {
    const [parentCount, setParentCount] = useState(0);
    const childRef = useRef();

    const handleParentClick = () => {
        setParentCount((prev) => prev + 1);
    };

    const handleChildClick = () => {
        if (childRef.current) {
            childRef.current.increment();
        }
    };

    return (
        <div>
            <h1>Demo: Missing Dependencies in useImperativeHandle</h1>
            <ChildComponent ref={childRef}/>
            <button onClick={handleChildClick}>Increment Child Count</button>
            <button onClick={handleParentClick}>Re-render Parent ({parentCount})</button>
        </div>
    );
}
