// Section Component Type 01: this completely responsive component contains one or two headings (two headings i.e. one mini heading and one main heading) upon choice with the cards arrangement.

// Use cases: for example, different section consisting like testimonial cards, skill cards, gallery image cards or any kind of cards responsive arrangement.


export const Section01 = ({ children, miniHeadingReqd, id, ref, sectionStyle = "", miniHeading = "", miniHeadingStyle = "", mainHeading = "", mainHeadingStyle = ""}) => {

    const miniHeadingOn = "!pt-5 lg:!pt-10";
    const miniHeadingOff = "!pt-15";

    return (

        <section id={id} ref={ref} className={sectionStyle}>
            {miniHeadingReqd &&
                <h3 className={`self-start !px-10 !pt-10 !ml-5 text-lg font-medium ${miniHeadingStyle}`} >{miniHeading}</h3>}

            <h2 className={`self-start !px-10 !ml-10 text-3xl lg:text-4xl font-medium ${mainHeadingStyle} ${miniHeadingReqd ? miniHeadingOn : miniHeadingOff} `}>{mainHeading}</h2>

            {/* --------------------card container here----------------- */}
                {children}
        </section>
    )

}