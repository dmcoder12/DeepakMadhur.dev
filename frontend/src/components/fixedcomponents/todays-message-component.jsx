/**
 * Today's Message Component: this component contains code for a message to display in the horizontal center. for example, this could be text, quote, message, reminder, mostly at the top of the website, or anywhere.
 * 
 * @param {boolean} headingReqd - this is to display or not to display heading of the quotation or message
 * 
 * useful tags:- 
 * 
 <blockquote> - Purpose: Used for long quotations from external sources
 * @example <blockquote cite="https://example.com">
    “The only limit to our realization of tomorrow is our doubts of today.”
    <footer>— Franklin D. Roosevelt</footer>
  </blockquote>

<q> - Purpose: Used for short, inline quotes.
Display: Typically adds quotation marks automatically.
 * @example <p>He said, <q>Consistency is the key to success.</q></p>

<cite>
Purpose: Used to reference the title of a work or the source of a quote. The <cite> tag defines the title of a creative work (e.g. a book, a poem, a song, a movie, a painting, a sculpture, etc.).
Display: Typically italicized.
 * @example <p><cite>Nelson Mandela</cite></p>

<abbr> (optional for clarity in short phrases) - it will show the full form upon hover on the abbreviation.
Purpose: For abbreviations and expansions, though not for quotes directly.
 * @example <abbr title="World Health Organization">WHO</abbr>

Import example: import it like this or just copy-paste from here and modify & remove unnecessary parts:- 
* @example <TodaysMessage 
      headingReqd
      switchBlockQuote 
      msgCntnrStyle=" !py-5 bg-[var(--accentColor2)] text-[var(--lightBackground)]"
      heading={<>Nation in Solidarity | Honoring Our Brave Heroes at the Border, Fighting in the War Against Terror.<span>#Vande_matram</span></>}
      headingStyle="flex flex-col gap-1"
      blockQuoteOrMsg={<q>When the nation calls, heroes rise—not just at the borders, but in every Indian heart.</q>}
      author={"Inspired by the legacy of our freedom fighters"}
      blockStyle="border-[var(--tertiaryColor)] hidden lg:block"
      switchQuotationText
      quotationText={"Our nation is not the greatest nation, but it have the capability to become one."}
      switchPlainMsg
      quoteStyle="hidden sm:block"
      message={"A Life is that is lived for a purpose"}
      />

 */



export const Message = ({ headingReqd, switchBlockQuote, switchQuotationText, switchPlainMsg, heading, source, blockQuoteOrMsg, author, quotationText, message, msgCntnrStyle = "", headingStyle = "", blockStyle = "", authorStyle = "", quoteStyle = "", msgStyle = "" }) => {

    return (
        <div className={`font-medium w-full flex flex-col items-center gap-5 justify-center !px-10 sm:!px-20  ${msgCntnrStyle}`}>
            {headingReqd && <h6 className={`text-center ${headingStyle}`}>{heading}</h6>}

            {/* blockquote: quote or message with author name and cite or just quote and cite*/}
            {switchBlockQuote &&
                <blockquote cite={source} className={`text-lg italic border-l-4 pl-4 my-4 ${blockStyle}`}>
                    {blockQuoteOrMsg}
                    <footer className={`mt-2 text-right text-sm font-medium ${authorStyle}`}>— {author}</footer>
                </blockquote>}

            {/* quote: simple quote or message within quotations */}
            {switchQuotationText &&
                <q className={`text-lg italic ${quoteStyle}`}
                    style={{ wordBreak: "break-word", hyphens: "manual" }}>{quotationText}
                </q>
            }

            {/* plain message: simple message without quotations*/}
            {switchPlainMsg &&
                <p className={`text-center ${msgStyle}`}>
                    {message}
                </p>
            }

        </div>
    )
}