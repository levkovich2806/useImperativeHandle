"use client"

import React, {useImperativeHandle, forwardRef, useRef, useState} from "react";

const ChildComponent = forwardRef((props, ref) => {
    const [count, setCount] = useState(0);

    useImperativeHandle(ref, () => {
        ref.current = { // ref is mutated directly
            increment: () => {
                setCount(prev => prev + 1);
            },
        };
    });


    return <div>Child Count: {count}</div>;
});

export default function App() {
    const childRef = useRef();

    const handleClick = () => {
        if (childRef.current && childRef.current.increment) {
            childRef.current.increment();
        }
    };

    return (
        <div>
            <h1>Ref modification - wrong</h1>
            <ChildComponent ref={childRef}/>
            <button onClick={handleClick}>Increment</button>
        </div>
    );
}
