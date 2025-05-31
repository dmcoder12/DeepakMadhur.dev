// Card Type 3 Component: this card contains an image then a heading, then some text, then a link button.

// VIEW: Grid and Tiles (default formation: grid)

// Use case: for example portfolio section: where a screenshot of the work, then the heading for the work, then some text about the work and then a visit button with link to the work


export const CardType3 = ({ formation = "", cardStyle = "", imgSrc, imgAlt, imgStyle = "", jrCardStyle="", webName, contentStyle = "", children, link, linkStyle = "", linkText = "" }) => {

    // grid styles
    const gridCardStyle = "flex flex-col drop-shadow-[1px_1px_2px_#929191] rounded-md overflow-hidden w-90";
    const gridImgStyle = "w-full sm:h-45";

    

    // tile styles
    const tileCardStyle = "flex flex-col lg:flex-row drop-shadow-[1px_1px_2px_#929191] rounded-md lg:items-center min-h-50 overflow-hidden w-[80vw] sm:w-[60vw] lg:w-[70vw]";
    const tileImgStyle = "w-full lg:w-[20vw] lg:h-full";


    return (
        <div className={`${cardStyle} ${formation === "tile" ? tileCardStyle : gridCardStyle}`}>
            <img src={imgSrc} alt={imgAlt} className={`${imgStyle} ${formation === "tile" ? tileImgStyle : gridImgStyle}`} />
            <div className={`flex flex-col !p-5 h-full ${jrCardStyle}`}>
                <h3><strong>{webName}</strong></h3>
                <p className={`!py-3 h-full content-center ${contentStyle}`}>{children}</p>
                <a href={link} target="blank" className={`flex items-center gap-2 ${linkStyle}`}>{linkText}</a>
            </div>

        </div>
    )
}