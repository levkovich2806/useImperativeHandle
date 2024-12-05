import React, {forwardRef, memo, useImperativeHandle, useRef, useState} from "react";
import {Player} from '@lottiefiles/react-lottie-player'
import animation from "./animation.json";
import styles from './page.module.css'

export default memo(
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
                if (targetDivRef.current.classList.contains(styles.stop)) {
                    targetDivRef.current.classList.remove(styles.stop);
                }

                targetDivRef.current.classList.add(styles.start);
            } else if (action === "stop") {
                if (targetDivRef.current.classList.contains(styles.start)) {
                    targetDivRef.current.classList.remove(styles.start);
                }

                targetDivRef.current.classList.add(styles.stop);
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
