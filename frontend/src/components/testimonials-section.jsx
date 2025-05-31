
import { CardType2 } from "./fixedcomponents/card-type2-component"
import testimonialData from "../api/testimonialData.json"

export const Testimonials = () => {

    return (
        <section id="testimonials" className="bg-[var(--secondaryColor)] !pt-12">
            <h3 className="self-start !px-10 !pt-10 !ml-5 text-lg text-[var(--headingColor)] font-medium" >Customer Feedback</h3>
            <h2 className="self-start !px-10 !pt-5 lg:!pt-10 !ml-10 text-3xl lg:text-4xl text-[var(--headingColor)] font-medium" >Testimonials</h2>

            {/* --------------------card container here----------------- */}


            <div className="flex justify-center flex-wrap gap-5 w-[100vw] !p-10 lg:!p-20">
                {testimonialData.map((curElem) => {
                    return(
                        <CardType2
                        key={curElem.id}
                        cardStyle="text-[var(--headingColor)] items-center !p-3 w-100 bg-[var(--mediumlightBg)]"
                        ratingStyle="text-[var(--primaryColor)]"
                        rating={curElem.rating}
                        contentStyle="text-center"
                        clientName={curElem.name}
                        clientOrg={curElem.company}
                    >
                        {curElem.text}
                    </CardType2>
                    )
                })}
            </div>
        </section>
    )
}
