// Card Type 2: this card contains rating in stars on the basis of how many rating are given out of 5, then below this the testimonial text, then the name of the the client or professional with their company name

// use cases: like testemonial cards

import { FaStar } from "react-icons/fa"

export const CardType2 = ({ cardStyle="", ratingStyle = "", rating, contentStyle="",  children, clientName="", clientOrg=""}) => {

    return (
        <>
            <div className={`flex flex-col drop-shadow-[1px_1px_2px_var(--darktertiaryColor)] rounded-md ${cardStyle}`}>
                <div className="flex">
                    {Array.from({ length: (rating <= 5 ? rating : 5) }, (_, i) => <FaStar key={i} className={ratingStyle} />)}
                </div>
                <p className={`!py-3 h-full content-center ${contentStyle}`}>{children}</p>
                <strong>{clientName}</strong>
                <h6>{clientOrg}</h6>
            </div>
        </>
    )
}