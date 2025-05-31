import { ContactUs } from "./fixedcomponents/contactus-form01-component"
import { Section02 } from "./fixedcomponents/section-type2-component"

export const ContactForm = () => {


    return (
        <>
            <Section02 id="contact-us" sectionStyle="bg-[var(--mediumlightBg)]   !pt-10" mainHeading="Get in Touch"
                mainHeadingStyle="text-[var(--headingColor)]"
            >
                {/* Contact Section */}
                <ContactUs
                    apiUrl={"http://localhost:5000/api/form-submit"}
                    method={"post"}
                    mainColor={`var(--primaryColor)`}
                    fieldBgColor={`var(--mediumlightBg)`}
                    formStyle="bg-[var(--lightBackground)] border-gray-500"
                    // name:-
                    asteriskReqd
                    nameReqd
                    firstNameReqd
                    // gender & (age or dob):-
                    genderDobReqd
                    genderReqd
                    switchGenderSelect
                    genAgeCntnrStyle="grid-cols-1 sm:grid-cols-2"
                    // +++
                    ageDobReqd
                    ageReqd
                    minAge={15}
                    maxAge={100}
                    // email & contactNo.:-
                    emailPhoneReqd
                    emailReqd
                    // +++
                    contactNoReqd
                    phoneCompulsory
                    maxPhoneLen={15}
                    // city & country:-
                    cityCountryReqd
                    cityReqd
                    // // +++
                    countrySelectReqd
                    countryCompulsory
                    // subject:-
                    subjectTextReqd
                    subjectCompulsory
                    textSubjectLabel={"Purpose of Contact"}
                    // message/query/feedback,etc:-
                    msgReqd
                    msgMaxLen={200}
                    msgPlaceholder={"Leave your message"}
                    // submit:-
                    sendBtnText={"Submit"}
                    // greet texts(loading..., error, success):-
                    greetText={"Submitted Successfully. Thanks for connecting"}
                    greetStyle="text-green-500"
                />

            </Section02>
        </>
    )
}