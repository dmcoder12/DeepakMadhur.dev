import { useEffect, useRef, useState } from 'react';
import { AnchorBtnComp } from './fixedcomponents/anchor-btn-component';
import { IoChatbubblesSharp } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import myPic from "../assets/imgs/mypicprimary.png";
import { animate } from 'animejs';


export const Intro = ({ setIsCompHidden, triggerEvent = "", timeoutRef, hidebackDelay = "" }) => {


    const imgRef = useRef(null);
    const topLineRef = useRef(null);


    // animation part
    useEffect(() => {

        if (typeof window !== "undefined") {
            const Timer = setTimeout(() => {
                requestAnimationFrame(() => {

                    // safe to access window, document, DOM
                    const topLine = topLineRef.current;
                    const img = imgRef.current;

                    if (topLine && img) {
                        const topLineFromTop = topLine.getBoundingClientRect().top + window.scrollY;
                        const imgFromTop = img.getBoundingClientRect().top + window.scrollY;
                        const windowWidth = window.innerWidth;

                        animate(".content", {
                            scale: [0, 1],
                            opacity: [0, 1],
                            delay: 600,
                            duration: 1500,
                            easing: "easeOutExpo"
                        });

                        if (imgFromTop < 300) {
                            animate(".image", {
                                x: [-(windowWidth / 2), 0],
                                duration: 1500,
                                delay: 600,
                                easing: "easeOutExpo"
                            });
                        } else {
                            animate(".image", {
                                y: [-(imgFromTop - topLineFromTop), 0],
                                duration: 1500,
                                delay: 600,
                                easing: "easeOutExpo"
                            });
                        }

                    }

                });

            }

                , 100);

            return () => clearTimeout(Timer);

        }
    }, [])


    const textStyle = "text-[var(--headingColor)] font-medium";
    const AnchorButtonStyle = "!p-3 !text-[var(--secondaryColor)] bg-[var(--primaryColor)] hover:shadow-[2px_2px_10px_1px_var(--darktertiaryColor)]";


    const handleShowHide = (e) => {
        e.preventDefault();
        // e.stopPropagation(); //uncomment it when, in case it is inside some other clickable element or component
        setIsCompHidden((prev) => !prev);
    }

    const handleMouseEnter = (e) => {
        e.preventDefault();
        clearTimeout(timeoutRef.current);
        setIsCompHidden(false);

    }

    const handleMouseLeave = (e) => {
        timeoutRef.current = setTimeout(() => {
            setIsCompHidden(true);
        }, hidebackDelay);
        e.preventDefault();
    }

    // for dynamically assigning event prop for flexibility and reusability like onmouseEnter, onClick, noMouseLeave, etc:- 
    const allEvents =
        triggerEvent === "click" ? { onClick: handleShowHide } :
            triggerEvent === "hover" ? { onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave } : {};


    return (
        <section id='home' className="flex flex-wrap justify-center items-center gap-10 bg-[var(--secondaryColor)] w-[100vw] !p-20">
            <div ref={topLineRef} className="flex flex-col w-[80vw] lg:w-[60vw] gap-5 content">
                <h3 className={`${textStyle}`}>Hey, I am Deepak,
                    <br /> a self-taught web developer with an engineering background.</h3>
                <h1 className={`!text-3xl sm:!text-4xl ${textStyle}`}>I build
                    <span className="text-[var(--primaryColor)]"> fast, modern,</span> and
                    <span className="text-[var(--primaryColor)]"> user-friendly websites</span>
                    <span className="flex flex-wrap gap-3 w-fit">powered by
                        <span className="flex gap-3 items-center text-[var(--accentColor2)]">React <FaReact /></span>
                    </span>
                </h1>
                <p className={`${textStyle}`}>Passionate about clean code and great design, I turn ideas into engaging digital experiences.</p>

                <div className="flex gap-5 !py-4">
                    <AnchorBtnComp href="#contact-us" className={`w-30 ${AnchorButtonStyle}`}>Get in Touch</AnchorBtnComp>
                    <AnchorBtnComp className={`flex justify-center w-60 ${AnchorButtonStyle}`} {...allEvents}>Chat with my AI Assistant <IoChatbubblesSharp /></AnchorBtnComp>
                </div>
            </div>
            <img ref={imgRef} src={myPic} alt="mypicloadingerror" className="w-50 sm:w-70 lg:w-90 h-50 sm:h-70 lg:h-90 drop-shadow-[3px_3px_10px_var(--darktertiaryColor)] image" />
        </section>
    )
}