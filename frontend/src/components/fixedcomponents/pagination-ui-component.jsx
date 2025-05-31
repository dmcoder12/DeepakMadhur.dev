// pagination UI component: this component consists all the buttons related to pagination, for ex: first page, last page, prev, next, random, and 1,2,3 pages display.
// in this component you can chose dynamically, only which button you need to use.

import { useState } from "react";
import { BiFirstPage, BiLastPage, BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { FaRandom } from "react-icons/fa";



export const PaginationCtrls = ({ viewMoreBtnReqd, pageBtnsReqd, prevNextBtnsReqd, randomBtnReqd, skipBtnsReqd, currPageDispReqd, goToPageReqd, cardsPerPage, startIndex, setStartIndex, setCardsToDisplay, minDisplayCards, visibleCards, cardsData, viewMoreBtnStyle="", btnHighlightColor="", btnOffColor="", pageBtnStyle="", skipPrevBtnStyle="", currPgDispStyle="", goToPgFieldStyle="" }) => {

    // set these variables in the component where you are going to use these pagination ctrls:- {{
    // const minDisplayCards = 6; // 6 is an example, set this value acc. to your requirement
    // const [startIndex, setStartIndex] = useState(0);
    // const [cardsToDisplay, setCardsToDisplay] = useState(minDisplayCards);
    // const visibleCards = anyXyzJsonData.slice(startIndex, startIndex + cardsToDisplay); //this anyXyzJsonData is the data which is going to be stored in cardsData variable  }}

    // copy of import of this component for easy usability, just copy and paste this and little to modify: 
    // {{  
    //     <PaginationCtrls 
    //             // button toggles here 
    //             viewMoreBtnReqd={true} 
    //             pageBtnsReqd={true} 
    //             prevNextBtnsReqd={true} 
    //             skipBtnsReqd={true} 
    //             randomBtnReqd={true} 
    //             currPageDispReqd={true} 
    //             goToPageReqd={true}

    //             // pagination logic here
    //             cardsPerPage={12} 
    //             startIndex={startIndex} 
    //             setStartIndex={setStartIndex} 
    //             setCardsToDisplay={setCardsToDisplay} 
    //             visibleCards={visibleCards} 
    //             cardsData={portfolioData} 
    //             minDisplayCards={minDisplayCards}
                
    //             // styling here
    //             viewMoreBtnStyle="text-[var(--headingColor)] !bg-[var(--secondaryColor)]"
    //             btnHighlightColor="var(--highlightColor)"
    //             btnOffColor="grey"
    //             skipPrevBtnStyle="!bg-[var(--primaryColor)]"
    //             currPgDispStyle="text-[var(--accentColor2)]"
    //             goToPgFieldStyle=" border-[var(--primaryColor)]  bg-[var(--mediumlightBg)] text-[var(--accentColor1)] "
    //             />
    // }}



    const [goToPage, setGotoPage] = useState(""); // State to store input jump to a page value


    //starts outer data dependent variables
    const totalCards = cardsData.length;
    //ends outer data dependent variables



    //starts independent and fixed variables
    const pagesPerDisplay = 3; //this component is made for 3 pages per display, so this is fixed untill 3 pages are chosen per display, and untill the firstpage, secondpage and thirdpage handlers are being used from this code.
    const cardsPerDispPages = cardsPerPage * pagesPerDisplay;
    const totalVisibleCards = visibleCards.length;
    const totalPages = Math.ceil(totalCards / cardsPerPage);
    const currPage = (startIndex / cardsPerPage) + 1;
    const currpgRemainder = (currPage % pagesPerDisplay);
    const currPageCards = Math.min(cardsPerPage, totalCards - cardsPerPage * (currPage - 1));
    //ends independent and fixed variables


    // logic for view more... and view less handlers

    const handleMoreCards = (e) => {
        e.preventDefault();
        if (totalVisibleCards === minDisplayCards) {
            setCardsToDisplay(cardsPerPage)
        }
        else {
            setCardsToDisplay(minDisplayCards);
        }
    }

    // logic for next page and prev page, valid only when more than one page, i.e. totalCards > cardsPerPage

    // Previous button function
    const handlePrevPage = () => {
        setCardsToDisplay(minDisplayCards);
        if (startIndex - cardsPerPage >= 0) {
            setStartIndex(startIndex - cardsPerPage);
        }
    };

    // Next button function
    const handleNextPage = () => {
        setCardsToDisplay(minDisplayCards);
        if (startIndex + cardsPerPage < totalCards) {
            setStartIndex(startIndex + cardsPerPage);
        }
    };

    // 1st page button function
    const handleFirstPage = () => {
        setCardsToDisplay(minDisplayCards);
        if (!(currpgRemainder === 1)) {
            setStartIndex(
                (currpgRemainder === 2) ? ((currPage - 2) * cardsPerPage) : ((currPage - 3) * cardsPerPage)
            )
        }
    };

    // 2nd page button function
    const handleSecondPage = () => {
        setCardsToDisplay(minDisplayCards);
        if (!(currpgRemainder === 2)) {
            setStartIndex(
                (currpgRemainder === 1) ? (currPage * cardsPerPage) : ((currPage - 2) * cardsPerPage)
            )
        }
    };

    // 3rd page button function
    const handleThirdPage = () => {
        setCardsToDisplay(minDisplayCards);
        if (!(currpgRemainder === 3)) {
            setStartIndex(
                (currpgRemainder === 1) ? ((currPage + 1) * cardsPerPage) : (currPage * cardsPerPage)
            )
        }
    };

    // Random button function

    const handleRandomPage = () => {
        setCardsToDisplay(minDisplayCards);
        const randomstartIndex = Math.floor(Math.random() * totalPages);
        setStartIndex(cardsPerPage * randomstartIndex);
    }

    // Last button function
    const handleLastPage = () => {
        setCardsToDisplay(minDisplayCards);
        if (startIndex + cardsPerPage < totalCards) {
            setStartIndex(
                ((totalCards % cardsPerPage) === 0) ? (totalCards - cardsPerPage) : (totalCards - (totalCards % cardsPerPage))
            )
        }
    };

    // Go to Page input function

    const handleInputChange = (e) => {
        setGotoPage(e.target.value) // Updating state with input valeu
    }

    // function for listening to go to page enter key press

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            const num = parseInt(goToPage);
            if (!isNaN(num) && num > 0) {
                if (num <= totalPages) {
                    setStartIndex((num - 1) * cardsPerPage);
                    setGotoPage("");
                }
                else {
                    setStartIndex((totalPages - 1) * cardsPerPage);
                    setGotoPage("");
                }
            } else {
                alert("Please enter a valid and positive number!");
                setGotoPage("");
            }
        }
    };


    return (
        <>

            {viewMoreBtnReqd && (totalVisibleCards >= minDisplayCards) && (currPageCards > minDisplayCards) && <button className={`!border-1 border-solid !border-black !rounded-3xl drop-shadow-[1px_1px_2px_#929191] h-fit self-center w-60 !mx-15 ${viewMoreBtnStyle}`} onClick={handleMoreCards}>{totalVisibleCards <= minDisplayCards ? "View More..." : "View Less"}</button>}


            {/* pagination buttons container here --------------> */}


            <div className="flex flex-col basis-full gap-5 justify-center">

                {/* First, Second, Third Page buttons container here --------------> */}

                {pageBtnsReqd && <div className="flex gap-5 justify-center">

                    {/* first page button here --------------> */}
                    <button onClick={handleFirstPage} style={{
                        backgroundColor: (startIndex % cardsPerDispPages) === 0 ? btnHighlightColor : btnOffColor
                    }}
                        className={`h-10 self-center !py-0 ${pageBtnStyle}`}>
                        {(Math.ceil((startIndex + 1) / cardsPerDispPages) * pagesPerDisplay) - 2}</button>


                    {/* second page button here --------------> */}
                    <button onClick={handleSecondPage} style={{
                        backgroundColor: (startIndex % cardsPerDispPages) === cardsPerPage ? btnHighlightColor : btnOffColor
                    }} hidden={(startIndex % cardsPerDispPages) === 0 && ((startIndex + cardsPerPage) >= totalCards)}
                        className={`h-10 self-center !py-0 ${pageBtnStyle}`}>
                        {(Math.ceil((startIndex + 1) / cardsPerDispPages) * pagesPerDisplay) - 1}</button>

                    {/* third page button here --------------> */}
                    <button onClick={handleThirdPage} style={{
                        backgroundColor: (startIndex % cardsPerDispPages) === (cardsPerPage * 2) ? btnHighlightColor : btnOffColor
                    }} hidden={(startIndex % cardsPerDispPages) < (cardsPerPage * 2) && (totalCards - startIndex) <= (cardsPerPage * 2) && (totalCards % cardsPerDispPages) > 0 && (totalCards % cardsPerDispPages) <= (cardsPerPage * 2)}
                        className={`h-10 self-center !py-0 ${pageBtnStyle}`}>
                        {Math.ceil((startIndex + 1) / cardsPerDispPages) * pagesPerDisplay}</button>


                </div>}

                {/* Start, Prev, Random, Next, Last Page buttons container here --------------> */}

                <div className="flex flex-wrap gap-5 justify-center">


                    {/* skiptoStart, Prev Page buttons container here --------------> */}

                    <div className="flex gap-5 justify-center" hidden={!(startIndex >= cardsPerDispPages) && !(startIndex - cardsPerPage >= 0)}>
                        {skipBtnsReqd && (startIndex >= cardsPerDispPages) && <button onClick={() => { setStartIndex(0) }}
                            className={`h-10 self-center !py-0 ${skipPrevBtnStyle}`}>
                            <BiFirstPage className="text-2xl" />
                        </button>}


                        {prevNextBtnsReqd && (startIndex - cardsPerPage >= 0) && <button onClick={handlePrevPage} className={`h-10 self-center !py-0 ${skipPrevBtnStyle}`}>
                            <BiLeftArrow className="text-lg" />
                        </button>}
                    </div>


                    {/* Random, Next, Last Page buttons container here --------------> */}

                    <div className="flex gap-5 justify-center" hidden={!(totalCards > (cardsPerDispPages * 2)) && !(startIndex + cardsPerPage < totalCards) && !((startIndex + cardsPerPage < totalCards && totalCards > cardsPerDispPages))}>


                        {randomBtnReqd && (totalCards > (cardsPerDispPages * 2)) && <button onClick={handleRandomPage} className={`h-10 self-center !py-0 ${skipPrevBtnStyle}`}>
                            <FaRandom className="text-xl" />
                        </button>}

                        {prevNextBtnsReqd && (startIndex + cardsPerPage < totalCards) && <button onClick={handleNextPage} className={`h-10 self-center !py-0 ${skipPrevBtnStyle}`}>
                            <BiRightArrow className="text-lg" />
                        </button>}

                        {skipBtnsReqd && (startIndex + cardsPerPage < totalCards && totalCards > cardsPerDispPages) && <button onClick={handleLastPage} className={`h-10 self-center !py-0 ${skipPrevBtnStyle}`}>
                            <BiLastPage className="text-2xl" />
                        </button>}
                    </div>

                </div>

            </div>

            {/* pagination buttons container ends here -----------> */}



            {/* current page no. display and go to page input here -------->  */}

            {currPageDispReqd && <span className= {`font-medium ${currPgDispStyle}`}>Page {currPage} of {Math.ceil(totalCards / cardsPerPage)}</span>}

            {goToPageReqd && <input
                type="number"
                value={goToPage}
                id="go-to-page"
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
                placeholder={"Go to Page"}
                className= {`border-1 border-solid rounded-sm !pl-1 w-30 ${goToPgFieldStyle}`}
                hidden={totalCards <= (cardsPerDispPages)}
            />}
        </>
    )
}