// Card Type 1 Component: this card contains an icon at the top with a heading below and the text content


export const CardType1 = ({containerStyle="", iconCode="", heading="", headingStyle="", textStyle="", children}) => {

    return(
        <>
            <div className={`flex flex-col gap-5 items-start w-80 drop-shadow-[1px_1px_2px_var(--darktertiaryColor)] rounded-md ${containerStyle}`} style={{padding:"2rem"}}>
            {iconCode}

            <h4 className={`self-start text-2xl text-[var(--headingColor)] font-medium ${headingStyle}`}>{heading}</h4>

            <p className={`text-[var(--headingColor)] font-medium ${textStyle}`}>{children}</p>
            </div>
        </>
    )
}