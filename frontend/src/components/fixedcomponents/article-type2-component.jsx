// Article Type 2 component: long content article: this component contains an icon with the heading and a dropdown type button which hide-unhide the article content inside.
// use cases: for a long article, so that if user don't want to read it, so they don't have to scroll above complete article to get to the next.
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";


export const Article2 = ({ containerStyle = "", headingStyle = "", iconCode, heading = "", dropStyle = "", children }) => {

    const [ishidden, setIshidden] = useState(true);

    const handleHideToggle = () => {
        setIshidden((prev) => (!prev));
    }

    return (

        <article className={`flex flex-col ${containerStyle}`}>
            <h4 className={`flex items-center ${headingStyle}`}> {iconCode}
                {heading}
                <FaChevronDown className={`!mx-2 cursor-pointer ${dropStyle}`} onClick={handleHideToggle} />
            </h4>
            {!ishidden && children} {/* here in the children goes inside content code */}
        </article>
    )
}
