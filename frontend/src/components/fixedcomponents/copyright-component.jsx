import { FaCopyright } from "react-icons/fa"

export const Copyright = ({containerStyle="", textStyle="", orgName, designedBy}) => {

    return(
        <>
            <div className={`w-[95vw] !py-5 !px-5 !mb-10 flex flex-col items-center ${containerStyle}`}>
                <div className="flex flex-wrap justify-center items-center gap-1">
                    <FaCopyright/>Copyright {orgName} <span>All Rights Reserved</span>
                </div>
                <div>
                    Designed by {designedBy}
                </div>
            </div>
        </>
    )
}