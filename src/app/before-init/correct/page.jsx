"use client"

import React, {useImperativeHandle, forwardRef, useState, useRef, useCallback} from "react";

const ChildComponent = forwardRef((props, ref) => {
    const [count, setCount] = useState(0);

    useImperativeHandle(ref, () => ({
        increment: () => setCount((prev) => prev + 1),
    }));

    return <div>Child Count: {count}</div>;
});

export default function App() {
    const childRef = useRef();
    const [visible, setVisible] = useState(false)

    const increment = useCallback(() => {
        // Call with checking if the ref is initialized and increment method exists
        if (childRef.current?.increment) {
            childRef.current.increment()
        }
    }, [])

    return (
        <div>
            <h1>Before init - correct</h1>
            <div>
                <button onClick={() => setVisible(prevVisible => !prevVisible)}>Toggle visible</button>
            </div>
            <div>
                <button onClick={increment}>Increment in Child</button>
            </div>
            {visible && <ChildComponent ref={childRef}/>}
        </div>
    );
}
