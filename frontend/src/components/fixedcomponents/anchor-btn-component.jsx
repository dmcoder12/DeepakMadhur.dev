// this is to create a button that actually is an anchor tag with its original functionality but in the looks of a button

import "../../App.css"

export const AnchorBtnComp = ({ href = "#", className = "", children, onClick, onMouseEnter, onMouseLeave }) => {

    return(
        <>
            <a href={href} className={`flex flex-row gap-1 items-center rounded-sm ${className}`} onClick={onClick} onMouseEnter={onMouseEnter}  onMouseLeave={onMouseLeave}>{children}</a>
        </>
    )
}