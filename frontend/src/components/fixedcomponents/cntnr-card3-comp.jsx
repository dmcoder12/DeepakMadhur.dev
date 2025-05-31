// Container for card type 3 this is the container for grid and tile view formations in card type 3

// default formation: grid

export const CntnrCard3 = ({ formation="", children }) => {

    const gridCntnrStyle = "flex justify-center flex-wrap gap-10 w-[100vw] !p-10 lg:!p-20";

    const tileCntnrStyle = "flex lg:flex-col justify-center items-center flex-wrap gap-10 w-[100vw] !p-10 lg:!px-40 lg:!py-20 ";
    // this style for formation tile is not much need to apply bcz of the card type 3's styling, so apply it only when really needed, otherwise just apply formation tile in the card 3 component and the formation will work fine.


    return (
                <div className={`${formation === "tile" ? tileCntnrStyle : gridCntnrStyle}`}>
                    {children}
                </div>
    )


}