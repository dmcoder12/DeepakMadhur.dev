// Section Component Type 01: centered styled headings and content:
// this completely responsive component contains centered styled headings and content, one or two headings (two headings i.e. one mini heading and one main heading) upon choice with the cards arrangement.

// Use cases: for example, different section consisting like center placed forms, or articles or center placed testimonial cards, skill cards, gallery image cards or any kind of cards responsive arrangement. i.e. any type of content that is center placed.


export const Section02 = ({ children, miniHeadingReqd, id, ref, sectionStyle = "", miniHeading = "", miniHeadingStyle = "", mainHeading = "", mainHeadingStyle = ""}) => {

    const miniHeadingOn = "!pt-5 lg:!pt-10";
    const miniHeadingOff = "!pt-15";

    return (

        <section id={id} ref={ref} className={`flex flex-col items-center ${sectionStyle}`}>
            {miniHeadingReqd &&
                <h3 className={`!pt-10 text-lg font-medium ${miniHeadingStyle}`} >{miniHeading}</h3>}

            <h2 className={`text-3xl lg:text-4xl font-medium ${mainHeadingStyle} ${miniHeadingReqd ? miniHeadingOn : miniHeadingOff} `}>{mainHeading}</h2>

            {/* --------------------children container here----------------- */}
                {children}
        </section>
    )

}