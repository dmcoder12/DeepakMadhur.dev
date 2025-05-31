import React, { useState, useRef } from "react";
import { Section01 } from "./fixedcomponents/section-type1-component"
import { CardType3 } from "./fixedcomponents/card-type3-component"
import { CntnrCard3 } from "./fixedcomponents/cntnr-card3-comp"
import { FaLocationArrow } from "react-icons/fa";
import { PaginationCtrls } from "./fixedcomponents/pagination-ui-component";
import portfolioData from "../api/portfolioData.json"
import { useScrollUp } from "./fixedcomponents/customhooks/scrollUp-target-component";


export const Portfolio = () => {

    const minDisplayCards = 6;
    const [startIndex, setStartIndex] = useState(0);
    const [cardsToDisplay, setCardsToDisplay] = useState(minDisplayCards);
    const visibleCards = portfolioData.slice(startIndex, startIndex + cardsToDisplay);

    // section scrolls up after page changes, code here ---------->
    const portfolioRef = useRef(null);
    useScrollUp({ targetElem: portfolioRef.current, dependencies: [startIndex] });

    return (
        <Section01 id="portfolio"
            ref={portfolioRef}
            miniHeadingReqd={false}
            sectionStyle="bg-[var(--lightBackground)] !pt-10"
            mainHeading="My Portfolio"
            mainHeadingStyle="text-[var(--headingColor)]"
        >
            <CntnrCard3>
                {visibleCards.map((curElem) => {
                    return (
                        <CardType3 key={curElem.id}
                            cardStyle="text-[var(--headingColor)] bg-[var(--mediumlightBg)]"
                            imgSrc={curElem.img_url}
                            imgAlt={curElem.Name}
                            webName={curElem.Name}
                            link={curElem.page_url}
                            linkText={
                                <>
                                    Visit
                                    <FaLocationArrow />
                                </>
                            }
                        >
                            {curElem.Description}
                        </CardType3>
                    )
                })}
                <PaginationCtrls 
                // button toggles here 
                viewMoreBtnReqd={true} 
                pageBtnsReqd={true} 
                prevNextBtnsReqd={true} 
                skipBtnsReqd={true} 
                randomBtnReqd={true} 
                currPageDispReqd={true} 
                goToPageReqd={true}

                // pagination logic here
                cardsPerPage={12} 
                startIndex={startIndex} 
                setStartIndex={setStartIndex} 
                setCardsToDisplay={setCardsToDisplay} 
                visibleCards={visibleCards} 
                cardsData={portfolioData} 
                minDisplayCards={minDisplayCards}
                
                // styling here
                viewMoreBtnStyle="text-[var(--headingColor)] !bg-[var(--secondaryColor)]"
                btnHighlightColor="var(--highlightColor)"
                btnOffColor="grey"
                skipPrevBtnStyle="!bg-[var(--primaryColor)]"
                currPgDispStyle="text-[var(--accentColor2)]"
                goToPgFieldStyle=" border-[var(--primaryColor)]  bg-[var(--mediumlightBg)] text-[var(--accentColor1)] "
                />
            </CntnrCard3>
        </Section01>
    )

}