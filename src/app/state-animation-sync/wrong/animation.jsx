import React, {forwardRef, useCallback, useImperativeHandle, useRef, useState} from "react";
import {Player} from "@lottiefiles/react-lottie-player";
import animation from "@/app/state-animation-sync/wrong/animation.json";

export default forwardRef((props, ref) => {
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
