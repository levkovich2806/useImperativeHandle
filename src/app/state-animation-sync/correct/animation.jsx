import React, {forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState} from "react";
import {Player} from "@lottiefiles/react-lottie-player";
import animation from "@/app/state-animation-sync/correct/animation.json";

export default forwardRef((props, ref) => {
    const [state, setState] = useState("stopped");
    const lottieRef = useRef();

    // Following useEffect will start or stop the animation based on the state
    useEffect(() => {
        if (state === "running" && lottieRef.current) {
            lottieRef.current.play();
        } else if (state === "stopped" && lottieRef.current) {
            lottieRef.current.stop();
        }
    }, [state]); // Triggered when the state changes

    useImperativeHandle(
        ref,
        () => ({
            startAnimation: () => {
                setState("running");
            },
            stopAnimation: () => {
                setState("stopped");
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
