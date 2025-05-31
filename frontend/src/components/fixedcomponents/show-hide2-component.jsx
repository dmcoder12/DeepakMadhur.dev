// Show-Hide Component for: when the handleShowHide Button is in the show-hide component itself. use case: hamburger dropdown or anydropdown or icon action upon click

import React, { useState, useRef } from "react";
import { IoIosCloseCircle } from "react-icons/io";

export const ShowHideComp2 = ({ children, overrideHandleShowHide, extralogicHandleShowHide,  triggerEvent = "", hidebackDelay = "", compStyle = "", closeBtnReqd, closeBtnStyle = "", btnStyle = "", btnCode = "" }) => {

    const [isCompHidden, setIsCompHidden] = useState(true);
    const timeoutRef = useRef(null);

    const handleShowHide = (e) => {
        if (overrideHandleShowHide) {
            e.preventDefault();
            overrideHandleShowHide();
            return;
          }

        e.preventDefault();
        // e.stopPropagation(); //uncomment it when, in case it is inside some other clickable element or component
        setIsCompHidden((prev) => !prev);

        if (extralogicHandleShowHide) {
            extralogicHandleShowHide();
          }
    }

    const handleClose = () => {
        setIsCompHidden(true);
    }

    const handleMouseEnter = (e) => {
        e.preventDefault();
        clearTimeout(timeoutRef.current);
        setIsCompHidden(false);

    }

    const handleMouseLeave = (e) => {
        timeoutRef.current = setTimeout(() => {
            setIsCompHidden(true);
        }, hidebackDelay)
        e.preventDefault();
    }


    // for dynamically assigning event prop for flexibility and reusability like onmouseEnter, onClick, noMouseLeave, etc:- 
    const allEvents =
        triggerEvent === "click" ? { onClick: handleShowHide} :
            triggerEvent === "hover" ? { onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave } : {};



    return (
        <>
            <div {...allEvents} className={btnStyle}>{btnCode}</div>
            <div className={`transition-all duration-500 ease-in-out ${!isCompHidden ? 'opacity-100 -translate-y-0 visible' : 'opacity-0 -translate-y-5 invisible'} ${compStyle}`} onMouseEnter={(triggerEvent === "hover") ? handleMouseEnter : undefined} onMouseLeave={(triggerEvent === "hover") ? handleMouseLeave : undefined}>
                {!isCompHidden && (
                    <>
                        {children}
                        {closeBtnReqd && (<button className={`!bg-white !outline-none absolute !p-0 ${closeBtnStyle}`} onClick={handleClose}><IoIosCloseCircle className="transform scale-200" /></button>)}
                    </>
                )}
            </div>
        </>

    )
}