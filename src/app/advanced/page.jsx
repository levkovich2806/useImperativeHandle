"use client"

import React, {useRef, useState, useImperativeHandle, forwardRef, memo} from "react";
import {Player} from '@lottiefiles/react-lottie-player'
import animation from "./animation.json";

const AnimationWithSound = memo(
    forwardRef((props, ref) => {
        const [isAnimating, setIsAnimating] = useState(false);
        const animationRef = useRef(null);
        const targetDivRef = useRef(null);

        useImperativeHandle(
            ref,
            () => ({
                startAnimation: () => {
                    setIsAnimating(true);
                    animationRef.current?.play()
                    updateStyles("start");
                },
                stopAnimation: () => {
                    animationRef.current?.stop()
                    updateStyles("stop");
                },
            }),
            []
        );

        const updateStyles = (action) => {
            if (typeof window === 'undefined' || !targetDivRef.current) return;
            if (action === "start") {
                targetDivRef.current.style.backgroundColor = "green";
                targetDivRef.current.style.color = "white";
            } else if (action === "stop") {
                targetDivRef.current.style.backgroundColor = "red";
                targetDivRef.current.style.color = "black";
            }
        };

        return (
            <div>
                <Player
                    src={animation}
                    loop={isAnimating}
                    autoplay={false}
                    style={{width: 200, height: 200}}
                    ref={animationRef}
                />
                <div ref={targetDivRef} className="target-div">
                    This div changes styles
                </div>
            </div>
        );
    })
);

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
