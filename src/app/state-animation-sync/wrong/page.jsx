"use client"

import React, {useState, forwardRef, useImperativeHandle, useRef, useCallback} from "react";
import {Player} from '@lottiefiles/react-lottie-player';
import animation from "./animation.json";

const ChildComponent = forwardRef((props, ref) => {
    const [state, setState] = useState("stopped");
    const lottieRef = useRef();

    useImperativeHandle(
        ref,
        () => ({
            startAnimation: () => {
                setState("running");
                // Animation starts before the state changes
                lottieRef.current.play();

            },
            stopAnimation: () => {
                setState("stopped");
                // Animation stops before the state changes
                lottieRef.current.stop();
            },
        }),
        []
    );

    const handleAnimationEvent = useCallback(event => {
        if (event === "play" && state === "running") {
            console.log("Animation is running");
        }
    }, [state])

    return (
        <div>
            <Player
                loop={true}
                autoplay={false}
                src={animation}
                style={{width: 200, height: 200}}
                ref={lottieRef}
                onEvent={handleAnimationEvent}
            />
        </div>
    );
});

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
            <h1>Controlled Lottie Animation</h1>
            <ChildComponent ref={animationRef}/>
            <button onClick={handleStart}>Start Animation</button>
            <button onClick={handleStop}>Stop Animation</button>
        </div>
    );
}
