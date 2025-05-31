// Top-Bottom scroll component: this component have the functionality of adding top and bottom scroll buttons on the screen which scrolls the window to middle then to the top and bottom of the window respectively 
// (add this component into app.jsx of the file or into the page where you want to add this functionality)

// use case: whenever there is a long page that takes time to scroll between top and bottom.

import React, {useState, useEffect} from "react";
import { FaAnglesDown, FaAnglesUp } from "react-icons/fa6";

export const TopBottomScroll = ({topBtnStyle="", bottomBtnStyle=""}) => {

    // Track scroll position to hide/show page scroll buttons

    const [isAtTop, setIsAtTop] = useState(true);
    const [isAtBottom, setIsAtBottom] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollDownHeight = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            setIsAtTop(scrollDownHeight === 0);
            setIsAtBottom(scrollDownHeight + windowHeight >= documentHeight - 1);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Call initially to set correct state

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const bodyScrollHeight = document.body.scrollHeight;

    const scrollToTop = () => {
        isAtBottom ? window.scrollTo({ top: (bodyScrollHeight / 2), behavior: "smooth" }) : window.scrollTo({ top: 0, behavior: "smooth" })
    };

    const scrollToBottom = () => {
        isAtTop ? window.scrollTo({ top: (bodyScrollHeight / 2), behavior: "smooth" }) : window.scrollTo({ top: bodyScrollHeight, behavior: "smooth" })
    };



    return (
        <>

            {/* page scroll up and down code here ---------> */}

            {!isAtTop && (
                <button onClick={scrollToTop} className={`fixed top-[15vh] left-[90vw] z-50 ${topBtnStyle}`}>
                    <FaAnglesUp />
                </button>
            )
            }

            {
                !isAtBottom && (
                    <button onClick={scrollToBottom} className={`fixed top-[90vh] left-[90vw] z-50 ${bottomBtnStyle}`}>
                        <FaAnglesDown />
                    </button>
                )
            }
        </>
    )
}
