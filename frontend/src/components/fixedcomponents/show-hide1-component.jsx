// Show-Hide Component for: when the handleShowHide Button is outside in some other component and this component is of use as a component when only there is one such element which have to be toggled show-hide, when there are more than one such elements then create a new component with this same code but a different state variable name, because both the components can't have same state variables and if it would be then upon changing the state variable value, both components will have its effect.

import React from "react";
import { IoIosCloseCircle } from "react-icons/io";

export const ShowHideComp1 = ({ setIsCompHidden, compStyle="", children, timeoutRef, hidebackDelay="", triggerEvent = "", closeBtnReqd, closeBtnStyle = "" }) => {
    
    // paste these line of code in the common parent of (this ShowHideComp and the component which consists the handleShowHide button):-
    // const [isCompHidden, setIsCompHidden] = useState(true);
    // const clickOrhover = "click"; //Or "hover"(in case of hover effect). use this value to control triggerEvent
    // const timeoutRef = useRef(null);
    // const delay = "200"; //value of this can be changed according to requirement. use this value to control hidebackDelay

    // let suppose this is the handleShowHide button: 
    // <Button onClick={handleShowHide}>Show-Hide Toggle</Button>

    // paste this code in the component which consists the handleShowHide button:- 

    //for the showHide button:
    // const handleShowHide = (e) => {
    //     e.preventDefault();
    //     // e.stopPropagation(); //uncomment it when, in case it is inside some other clickable element or component
    //     setIsCompHidden((prev) => !prev);
    // }

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
        }, hidebackDelay);
        e.preventDefault();
    }

    // paste this code in that component too, which consists the handleShowHide button:- when hover effect is set instead of click effect:

    // const handleMouseEnter = (e) => {
    //     e.preventDefault();
    //     clearTimeout(timeoutRef.current);
    //     setIsCompHidden(false);
    // }

    // const handleMouseLeave = (e) => {
    //     timeoutRef.current = setTimeout(() => {
    //         setIsCompHidden(true);
    //     }, hidebackDelay)
    //     e.preventDefault();
    // }

    
    // paste this code in the component which consists the handleShowHide button: 

    // for dynamically assigning event prop for flexibility and reusability like onmouseEnter, onClick, noMouseLeave, etc:
    // const allEvents =
    //     triggerEvent === "click" ? { onClick: handleShowHide } :
    //         triggerEvent === "hover" ? { onMouseEnter: handleMouseEnter , onMouseLeave: handleMouseLeave } : {};

    // use this as spread syntax in the button for setting the event function:
    // for ex: <AnchorBtnComp className={`flex justify-center w-60} {...allEvents}>Chat with my AI Assistant</AnchorBtnComp>


    return (
        <>
            <div className={compStyle} onMouseEnter={(triggerEvent === "hover") ? handleMouseEnter : undefined} onMouseLeave={(triggerEvent === "hover") ? handleMouseLeave : undefined}>
                    {closeBtnReqd && (<button className={`!bg-white !outline-none !p-0 ${closeBtnStyle}`} onClick={handleClose}><IoIosCloseCircle className="transform scale-200" /></button>)}
                    {children}
            </div>
        </>

    )
}