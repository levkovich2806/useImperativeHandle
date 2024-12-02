"use client"

import React, {useRef} from "react";
import dynamic from "next/dynamic";

const AnimationWithSound = dynamic(() => import('./animation-with-sound'), {ssr: false});

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
            <h1>Lottie Animation with Sound</h1>
            <AnimationWithSound ref={animationRef}/>
            <button onClick={handleStart}>Start Animation</button>
            <button onClick={handleStop}>Stop Animation</button>
        </div>
    );
}
