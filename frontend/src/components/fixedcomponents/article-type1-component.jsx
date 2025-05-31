// Article Type 1 component: this component contains an icon with the heading and the article content

export const Article1 = ({ containerStyle="", headingStyle = "", iconCode, heading = "", children }) => {


    return (

        <article className={`flex flex-col gap-5 ${containerStyle}`}>
            <h4 className={`flex gap-3 items-center text-2xl font-medium ${headingStyle}`}> {iconCode}
                {heading}
            </h4>
            {children}
        </article>
    )
}
