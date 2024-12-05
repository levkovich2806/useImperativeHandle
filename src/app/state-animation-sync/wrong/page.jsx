"use client"

import React, {useRef} from "react";
import dynamic from "next/dynamic";

const Animation = dynamic(() => import('./animation'), {ssr: false});

export default function App() {
    const animationRef = useRef();

    const handleStart = () => {
        animationRef.current.startAnimation();
    };

    const handleStop = () => {
        animationRef.current.stopAnimation();
    };

    return (
        <div>
            <h1>State animation sync - wrong</h1>
            <Animation ref={animationRef}/>
            <button onClick={handleStart}>Start Animation</button>
            <button onClick={handleStop}>Stop Animation</button>
        </div>
    );
}
