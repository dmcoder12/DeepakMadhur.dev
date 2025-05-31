/**
 * Form type1 component: Simple Contact Us Form: 
 * this fixed width and responsive component consists of a form with fields: firstname, lastname, email, phoneno, message and accept the term and policy checkbox (the text with this checkbox could be altered dynamically using props, for ex: accept the terms, accept the terms and conditions, i've read the terms, etc. and an option to render or not to render this checkbox at all), and reset and submit button.
 * @param {string} mainColor: this sets the primary color of all the fields of this complete form. text, borders.
 * @param {string} fieldBgColor: this sets the background color of all the fields of this form.
 * @example - this is how you have to import this component in the code: just paste this and modify accordingly:
 * @param {JSX.Element} ContactUs - this is how to import this contact form component:
 * Example usage:
 * <ContactUs
 *                  apiUrl={"http://localhost:5000/api/form-submit"}
                    action={"forms/contact.php"}
                    method={"post"}
                    mainColor={`var(--primaryColor)`}
                    fieldBgColor={`var(--mediumlightBg)`}
                    formStyle="bg-[var(--lightBackground)] border-gray-500"

                    // name:-

                    asteriskReqd
                    nameReqd
                    firstNameReqd
                    middleNameReqd
                    lastNameReqd
                    // nameCntnrStyle

                    // gender & (age or dob):-

                    genderDobReqd
                    genderReqd
                    switchGenderText
                    // switchGenderSelect

                    // +++

                    ageDobReqd
                    ageReqd
                    minAge={18}
                    maxAge={200}
                    ageCompulsory
                    dobReqd
                    minDob={new Date(new Date().setFullYear(new Date().getFullYear() - 30)).toISOString().split('T')[0]}
                    maxDob={new Date(new Date().setFullYear(new Date().getFullYear() - 18)).toISOString().split('T')[0]} //lets say only a person of age between 18-30 is allowed, so min dob would be 30 years back from today and max would be 18 yrs back from today
                    // genAgeCntnrStyle="grid-cols-1 2xl:grid-cols-2"

                    // email & contactNo.:-

                    emailPhoneReqd
                    emailReqd
                    emailCompulsory

                    // +++

                    contactNoReqd
                    phoneCompulsory
                    maxPhoneLen={15}
                    // emailPhoneCntnrStyle

                    // city & country:-

                    cityCountryReqd
                    cityReqd
                    cityCompulsory

                    // // +++

                    countryTextReqd
                    countrySelectReqd
                    countryCompulsory
                    // cityCountryCntnrStyle

                    // international type address:-
                    
                    maxPinLen={999999999999}
                    intlAddrReqd
                    switchIntlCountryText
                    switchIntlCountrySelect
                    // intlAddrCntnrStyle

                    // indian type address:-

                    indAddrReqd
                    switchIndCountryText
                    switchIndCountrySelect
                    // indAddrCntnrStyle

                    // uploads:-

                    // uploadReqd
                    uploadCompulsory
                    uploadLabel={"Upload an Image:"}
                    uploadFileType={"image/*"}
                    maxUploadSize={1 * 400 * 1024}
                    maxSize={"400KB"}
                    maxFiles={2}
                    multipleUpload
                    allowedTypes={['image/png', 'image/jpeg']} // Adjust as needed
                    // 5 * 1024 * 1024; // i.e. 5 MB
                    // other VALUES to uploadFileType: ".pdf" ,"image/*" ,"image/jpg","image/png, image/jpeg" , "video/mp4","video/*" , "audio/*" ,"audio/mp3", "application/pdf"
                    // uploadCntnrStyle

                    // subject:-

                    subjectTextReqd
                    subjectSelectReqd
                    subjectCompulsory
                    textSubjectLabel={"Enter a service"}
                    outerSubjectLabel={"Select a service"}
                    innerSubjectLabel={"Available services:"}
                    optionsTray={
                        <>
                            <option value="Web Design">Web Design</option>
                            <option value="Graphic Design">Graphic Design</option>
                            <option value="Logo Design">Logo Design</option>
                            <option value="Website Maintenance">Website Maintenance</option>
                        </>
                    }

                    // message/query/feedback,etc:-

                    msgReqd
                    msgCompulsory
                    msgMaxLen={300}
                    msgPlaceholder={"Leave us your feedback or message"}
                    // msgCntnrStyle

                    // terms/consent:-

                    consentReqd
                    consentHeadingReqd
                    consent1Reqd
                    consent2Reqd
                    consent3Reqd
                    optionalConsentReqd
                    consentLine1={"I agree to the above Terms and Policy"}
                    consentLine2={"The information provided above is all true to my knowledge."}
                    consentLine3={"Have you checked all boxes."}
                    optConsentLine={"You want to sent advertisements to your email from our side"}
                    consent1PreAgree={true}
                    consent2PreAgree={false}
                    consent3PreAgree={false}
                    optConsentPreAgree={false}
                    consentHeading={"**Terms and Policy"}
                    termsPageReqd
                    termsPage={<>Terms Component Comes here</>}
                    // consentCntnrStyle

                    // submit:-

                    sendBtnText={"Submit"}

                    // greet texts(loading..., error, success):-

                    greetText={"Submitted Successfully. Thanks for connecting!"}
                    greetStyle="text-green-500"
                />
 */

import { useState, useEffect } from 'react';
import { capitalizeAll, capitalizeFirstLetters } from '../../utilities/string.utils';
import { sanitizeInput } from '../../utilities/sanitization.utils';
import { calculateAgeFromDob } from '../../utilities/math.utils';
import { validateFormData } from '../../utilities/validateFormData';
import { getNonEmptyValues } from '../../utilities/getNonEmptyValue.utils'
import { resetObjValues } from '../../utilities/object.utils'

export const ContactUs = ({

    action,
    apiUrl,
    method,
    mainColor,
    fieldBgColor,
    formStyle = "",
    // name
    asteriskReqd,
    nameReqd,
    firstNameReqd,
    middleNameReqd,
    lastNameReqd,
    nameCntnrStyle = "",
    // gender & age or dob
    genderDobReqd,
    genderReqd,
    switchGenderText,
    switchGenderSelect,
    // +++
    ageDobReqd,
    ageReqd,
    minAge,
    maxAge,
    ageCompulsory,
    dobReqd,
    minDob,
    maxDob,
    genAgeCntnrStyle = "",
    // email & contactNo.
    emailPhoneReqd,
    emailReqd,
    emailCompulsory,
    // +++
    contactNoReqd,
    phoneCompulsory,
    maxPhoneLen,
    emailPhoneCntnrStyle = "",
    // city & country
    cityCountryReqd,
    cityReqd,
    cityCompulsory,
    // +++
    countryTextReqd,
    countrySelectReqd,
    countryCompulsory,
    cityCountryCntnrStyle = "",
    // international type address
    maxPinLen,
    intlAddrReqd,
    switchIntlCountryText,
    switchIntlCountrySelect,
    intlAddrCntnrStyle = "",
    // indian type address
    indAddrReqd,
    switchIndCountryText,
    switchIndCountrySelect,
    indAddrCntnrStyle = "",
    // uploads
    uploadReqd,
    uploadCompulsory,
    uploadLabel,
    uploadFileType,
    maxUploadSize,
    maxSize,
    maxFiles,
    multipleUpload,
    allowedTypes,
    uploadCntnrStyle = "",
    // subject
    subjectTextReqd,
    subjectSelectReqd,
    subjectCompulsory,
    textSubjectLabel,
    outerSubjectLabel,
    innerSubjectLabel,
    optionsTray,
    // message/query/feedback,etc
    msgReqd,
    msgCompulsory,
    msgMaxLen,
    msgPlaceholder,
    msgCntnrStyle = "",
    // terms/consent
    consentReqd,
    consentHeadingReqd,
    consent1Reqd,
    consent2Reqd,
    consent3Reqd,
    optionalConsentReqd,
    consent1PreAgree,
    consent2PreAgree,
    consent3PreAgree,
    optConsentPreAgree,
    consentHeading,
    termsPageReqd,
    termsPage,
    consentLine1,
    consentLine2,
    consentLine3,
    optConsentLine,
    consentCntnrStyle = "",
    // submit
    sendBtnText,
    // greet texts(loading..., error, success)
    greetText,
    greetStyle = "",

}) => {

    // form updation

    const [formData, setFormData] = useState({
        fullName: '',
        firstName: '',
        middleName: '',
        lastName: '',
        gender: '',
        fullAge: '',
        age: '',
        dob: '',
        email: '',
        fullPhone: '',
        countryCode: '',
        phone: '',
        city: '',
        country: '',
        state: '',
        fullAddress: '',
        streetAddress: '',
        street: '',
        landmark: '',
        addressLine1: '',
        addressLine2: '',
        postalCode: '',
        file: null, //remaining
        subject: '',
        message: '',
        consent: '',
        optConsent: '',
    });

    const [errors, setErrors] = useState({});

    // uploads
    // const [files, setFiles] = useState([]);

    const handleFileUpload = async () => {
        //     if (!files || files.length === 0) return alert("No file selected");

        //     for (const file of files) {
        //         console.log('Uploading:', file.name);

        //         // FormData here to send to backend

        //         // const formData = new FormData();
        //         // formData.append("myFile", file); // Must match backend field name

        //         // try {
        //         //     const response = await fetch('/upload', {
        //         //         method: 'POST',
        //         //         body: formData,
        //         //     });
        //         //     const result = await response.json();
        //         //     console.log("Success:", result);
        //         // } catch (error) {
        //         //     console.error("Upload failed for", file.name, ":", error);
        //         // }
        //     };
    };

    const handleUploadChange = (e) => {
        //     const fileArray = Array.from(e.target.files); // Convert FileList to array
        //     setFiles(fileArray);

        //     // input safety methods, setting limited no. of files upload
        //     if (fileArray.length > maxFiles) {
        //         alert(`You can upload up to ${maxFiles} files only.`);
        //         return;
        //     }

        //     for (let file of fileArray) {
        //         // Size validation: input safety methods, setting limited size of upload
        //         if (file.size > maxUploadSize) {
        //             alert(`File "${file.name}" is too large. Maximum allowed size is ${maxSize}.`);
        //             return;
        //         }
        //         // Type validation: input safety methods, setting limited types of upload
        //         if (!allowedTypes.includes(file.type)) {
        //             alert(`File "${file.name}" is not an allowed type.`);
        //             return;
        //         }
        //     }
    };

    // terms/consent
    const [isTermsVisible, setIsTermsVisible] = useState(false);
    const [consent1Agreed, setConsent1Agreed] = useState(consent1PreAgree);
    const [consent2Agreed, setConsent2Agreed] = useState(consent2PreAgree);
    const [consent3Agreed, setConsent3Agreed] = useState(consent3PreAgree);
    const [optConsentAgreed, setOptConsentAgreed] = useState(optConsentPreAgree);


    // submit

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const [errorStatus, setErrorStatus] = useState('');

    // greet texts(loading..., error, success)
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        const { firstName, middleName, lastName, dob, countryCode, phone, street, streetAddress, addressLine1, addressLine2, landmark, city, state, postalCode, country } = formData;

        //fullName
        const fullName = capitalizeFirstLetters(
            sanitizeInput(firstName) +
            (sanitizeInput(middleName) ? (" " + sanitizeInput(middleName)) : "") +
            (sanitizeInput(lastName) ? (" " + sanitizeInput(lastName)) : "")
        );

        //fullAge
        const fullAge = dobReqd ? calculateAgeFromDob(dob) : '';

        //fullPhone
        const fullPhone = (countryCode + "-" + sanitizeInput(phone));

        //fullAddress
        const strtAdd = capitalizeFirstLetters(sanitizeInput(streetAddress));
        const strt = capitalizeFirstLetters(sanitizeInput(street));
        const addr1 = capitalizeFirstLetters(sanitizeInput(addressLine1));
        const addr2 = sanitizeInput(addressLine2);
        const lmark = sanitizeInput(landmark);
        const cty = capitalizeFirstLetters(sanitizeInput(city));
        const stt = capitalizeFirstLetters(sanitizeInput(state));
        const pcode = sanitizeInput(postalCode);
        const cntry = capitalizeFirstLetters(sanitizeInput(country));

        const parts = [];
        // International address block
        if (intlAddrReqd && strtAdd) parts.push(strtAdd);
        // Indian address block
        if (indAddrReqd) {
            if (strt) parts.push(strt);
            if (addr1) parts.push(addr1);
            if (addr2) parts.push(addr2);
            if (lmark) parts.push(lmark);
        }
        // Common fields
        if (cty) parts.push(cty);
        if (stt) parts.push(stt);
        if ((intlAddrReqd || indAddrReqd) && pcode) parts.push(pcode);
        if (cntry) parts.push(cntry);
        // joined address
        const fullAddress = parts.join(', ');

        //consent & optional consent
        const consent = consentReqd ? ((consent1Agreed && consent2Agreed && consent3Agreed) ? "agreed" : "disagreed") : '';

        const optConsent = optionalConsentReqd ? (optConsentAgreed ? "agreed" : "disagreed") : '';

        setFormData({
            ...formData, fullName, fullAge, fullPhone, fullAddress, consent, optConsent
        });

    }, [formData.firstName,
    formData.middleName,
    formData.lastName,
    formData.dob,
    formData.countryCode,
    formData.phone,
    formData.street,
    formData.streetAddress,
    formData.addressLine1,
    formData.addressLine2,
    formData.landmark,
    formData.city,
    formData.state,
    formData.postalCode,
    formData.country,
        consent1Agreed,
        consent2Agreed,
        consent3Agreed
    ]);

    const [greet, setGreet] = useState('');


    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const { fullName, firstName, middleName, lastName, gender, fullAge, age, dob, email, fullPhone, countryCode, phone, city, country, state, fullAddress, street, streetAddress, landmark, addressLine1, addressLine2, postalCode, file, subject, message, consent, optConsent } = formData

        const validationErrors = validateFormData({ values: formData, minimumAge: `${minAge}`, maximumAge: `${maxAge}`, maxPhoneLength: `${maxPhoneLen}`, maxPin: `${maxPinLen}`, msgMaxLength: `${msgMaxLen}` });

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        const formObjSort = {
            FullName: lastNameReqd ? (fullName ? capitalizeAll(fullName) : "empty") : '',

            Name: firstNameReqd ? (firstName ? capitalizeAll(sanitizeInput(firstName)) : "empty") : '',

            MiddleName: middleNameReqd ? (middleName ? capitalizeAll(sanitizeInput(middleName)) : "empty") : '',

            LastName: lastNameReqd ? (lastName ? capitalizeAll(sanitizeInput(lastName)) : "empty") : '',

            Gender: genderReqd ? (gender ? capitalizeAll(gender) : "empty") : '',

            FullAge: dobReqd ? (fullAge ? capitalizeAll(fullAge) : "empty") : '',

            Age: ageReqd ? (age ? age : "0") : '',

            Dob: dobReqd ? (dob ? dob : "empty") : '',

            Email: emailReqd ? (email ? capitalizeAll(sanitizeInput(email)) : "empty") : '',

            FullPhone: contactNoReqd ? (fullPhone ? fullPhone : "empty") : '',

            City: cityReqd ? (city ? capitalizeAll(sanitizeInput(city)) : "empty") : '',

            Country: (countryTextReqd || countrySelectReqd) ? (country ? capitalizeAll(sanitizeInput(country)) : "empty") : '',

            State: (intlAddrReqd || indAddrReqd) ? (state ? capitalizeAll(sanitizeInput(state)) : "empty") : '',

            FullAddress: (intlAddrReqd || indAddrReqd) ? (fullAddress ? capitalizeFirstLetters(fullAddress) : "empty") : '',

            StreetAddress: intlAddrReqd ? (streetAddress ? capitalizeAll(sanitizeInput(streetAddress)) : "empty") : '',

            Street: intlAddrReqd ? (street ? capitalizeAll(sanitizeInput(street)) : "empty") : '',

            Landmark: indAddrReqd ? (landmark ? capitalizeAll(sanitizeInput(landmark)) : "empty") : '',

            AddressLine1: indAddrReqd ? (addressLine1 ? capitalizeAll(sanitizeInput(addressLine1)) : "empty") : '',

            AddressLine2: indAddrReqd ? (addressLine2 ? capitalizeAll(sanitizeInput(addressLine2)) : "empty") : '',

            PostalCode: (intlAddrReqd || indAddrReqd) ? (postalCode ? postalCode : "empty") : '',

            File: uploadReqd ? (file ? file : "empty") : '', //remaining

            Subject: (subjectSelectReqd || subjectTextReqd) ? (subject ? capitalizeAll(sanitizeInput(subject)) : "empty") : '',

            Message: msgReqd ? (message ? sanitizeInput(message) : "empty") : '',

            Consent: consentReqd ? (consent ? consent : "empty") : '',

            OptConsent: optionalConsentReqd ? (optConsent ? optConsent : "empty") : '',
        }

        const finalFormObj = getNonEmptyValues(formObjSort);
        setErrors({}); // clear previous errors


        setLoading(true);
        setSuccess(false);
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(finalFormObj),
            });

            if (response.ok) {
                const resData = await response.json();
                const { Name, Gender } = resData.data;
                setGreet((Name) ? `, ${Gender ? (Gender === 'MALE' ? 'Mr. ' : Gender === 'FEMALE' ? 'Ms. ' : '') : ''}${capitalizeFirstLetters(Name.split(' ')[0])}` : '');
                setSuccess(true);
                setLoading(false);
                setErrorStatus('');
                setFormData(resetObjValues(formData));
            } else {
                const data = await response.json();
                setLoading(false);
                if (response.status === 400 && data.errors) {
                    console.log('Multiple Errors in the Form:', data.errors);
                    const errorMessages = Object.values(data.errors).join(' | ');
                    setErrorStatus(`Validation Error: ${errorMessages}`);
                } else {
                    setErrorStatus(`Bad Response Error: problem in submitting to the backend. Submission Failed!`);
                    console.log('Submission Failed! Error:', data.message || data);
                }
            }
        } catch (error) {
            setErrorStatus(`There is some problem with the server.`);
            console.log('Server Error:', error.message)
            setLoading(false);
        }
    };

    //reset
    const resetAll = () => {
        setFormData(resetObjValues(formData));
        setErrors({});
        setLoading(false);
        setSuccess(false);
        setErrorStatus('');
        setIsTermsVisible(false);
        setConsent1Agreed(consent1PreAgree);
        setConsent2Agreed(consent2PreAgree);
        setConsent3Agreed(consent3PreAgree);
        setOptConsentAgreed(optConsentPreAgree);
    };


    return (
        <>
            <form action={action} method={method} onSubmit={handleFormSubmit}
                autoComplete="on" className={`border-2 drop-shadow-[1px_1px_2px_#929191] rounded-md
             flex flex-col justify-center items-center gap-x-2 gap-y-3 sm:gap-5 w-[85vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] !my-15 !p-5 sm:!p-10 ${formStyle}`}>


                {/* name container */}
                {nameReqd && <div className={`grid grid-cols-1 ${(lastNameReqd && !middleNameReqd) && "sm:grid-cols-2"}  ${middleNameReqd && "sm:grid-cols-2 xl:grid-cols-3"}  gap-x-2 gap-y-3 sm:gap-5 w-full ${nameCntnrStyle}`}>

                    {/* first name here */}

                    {firstNameReqd && <div className='flex flex-col w-full'>
                        <div className='flex w-full'>
                            {asteriskReqd && <span aria-hidden="true" className="text-red-500 text-lg font-medium ">*</span>}
                            <input type="text" name="firstName" autoComplete="name" maxLength={30} title="Only letters and spaces allowed" placeholder={lastNameReqd ? `First Name` : `Name`} aria-label={lastNameReqd ? `First Name` : `Name`} required aria-required="true" className={`text-[${mainColor}] bg-[${fieldBgColor}] border w-full !px-4 !py-2  rounded-md focus:outline-none focus:ring-1`}
                                value={formData.firstName}
                                onChange={handleChange}
                                aria-invalid={!!errors.firstName}
                            />
                        </div>
                        {errors.firstName && <p className="text-red-400 font-medium">{errors.firstName}</p>}
                    </div>}

                    {/* middle name here */}
                    {middleNameReqd && <div className='flex flex-col w-full'>
                        <input type="text" name="middleName" maxLength={30} title="Only letters and spaces allowed" placeholder="Middle Name" aria-label="Middle Name" className={`text-[${mainColor}] bg-[${fieldBgColor}] border w-full !px-4 !py-2  rounded-md focus:outline-none focus:ring-1`}
                            value={formData.middleName}
                            onChange={handleChange}
                            aria-invalid={!!errors.middleName}
                        />
                        {errors.middleName && <p className="text-red-400 font-medium">{errors.middleName}</p>}
                    </div>}

                    {/* last name here */}
                    {lastNameReqd && <div className='flex flex-col w-full'>
                        <input type="text" name="lastName" maxLength={30} title="Only letters and spaces allowed" placeholder="Last Name" aria-label="Last Name" className={`text-[${mainColor}] bg-[${fieldBgColor}] border w-full !px-4 !py-2  rounded-md focus:outline-none focus:ring-1`}
                            value={formData.lastName}
                            onChange={handleChange}
                            aria-invalid={!!errors.lastName}
                        />
                        {errors.lastName && <p className="text-red-400 font-medium">{errors.lastName}</p>}
                    </div>
                    }
                </div>}

                {/* gender and (dob / age) container */}
                {genderDobReqd && <div className={`text-[${mainColor}] grid gap-x-2 gap-y-3 sm:gap-5 basis-full w-full ${genAgeCntnrStyle}`}>
                    {/* genderRadio or genderSelect options here */}
                    {genderReqd &&
                        <div className='flex justify-center sm:justify-start'>
                            {asteriskReqd && <span aria-hidden="true" className="text-red-500 text-lg font-medium ">*</span>}
                            {switchGenderText && (<div className={`flex flex-wrap gap-5 !px-2 items-center`}>
                                <p aria-label="Select Your Gender">Gender:</p>
                                <label>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Male"
                                        required
                                        aria-required="true"
                                        checked={formData.gender === 'Male'}
                                        onChange={handleChange}
                                        className="!mr-1"
                                    />
                                    Male
                                </label>

                                <label>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Female"
                                        checked={formData.gender === 'Female'}
                                        onChange={handleChange}
                                        className="!mr-1"
                                    />
                                    Female
                                </label>

                                <label>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Other"
                                        checked={formData.gender === 'Other'}
                                        onChange={handleChange}
                                        className="!mr-1"
                                    />
                                    Other
                                </label>
                            </div>
                            )}

                            {/* gender select type input here -------> */}

                            {switchGenderSelect &&
                                <div className={`flex flex-wrap gap-5 items-center`}>
                                    <select name="gender" required aria-required="true"
                                        className={`bg-[${fieldBgColor}] w-fit !px-4 !py-2 border rounded-md focus:outline-none focus:ring-1`}
                                        value={formData.gender}
                                        onChange={handleChange}
                                    >
                                        <option value="" disabled hidden>Select Your Gender:</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>}
                        </div>}


                    {/* age or dob container */}
                    {ageDobReqd && (<>
                        {/* age here */}
                        {ageReqd && (<div className='flex flex-col items-center lg:items-start'>
                            <div className='flex'>
                                {(asteriskReqd && ageCompulsory) && (<span aria-hidden="true" className="text-red-500 text-lg font-medium ">*</span>)}
                                <div className={`text-[${mainColor}] flex flex-wrap gap-0 sm:gap-5 items-center`}>
                                    <input
                                        type="number"
                                        name="age"
                                        min={minAge}
                                        max={maxAge}
                                        placeholder="Enter Your Age"
                                        value={formData.age}
                                        onChange={handleChange}
                                        aria-invalid={!!errors.age}
                                        className={`bg-[${fieldBgColor}] !px-4 !py-2 border rounded-md w-[170px] focus:outline-none focus:ring-1`}
                                        required={ageCompulsory}
                                        aria-required={ageCompulsory}
                                    />
                                </div>
                            </div>
                            {errors.age && <p className="text-red-400 font-medium">{errors.age}</p>}
                        </div>
                        )}

                        {/* DOB here */}
                        {dobReqd && <div className='flex'>
                            {asteriskReqd && <span aria-hidden="true" className="text-red-500 text-lg font-medium ">*</span>}
                            <div className={`text-[${mainColor}] flex flex-wrap gap-0 sm:gap-5 items-center !px-2`}>
                                <label htmlFor="dob" className="!mr-5 sm:!mr-0">Date of Birth:</label>
                                <input
                                    type="date"
                                    id="dob"
                                    name="dob"
                                    min={minDob}
                                    max={maxDob}
                                    value={formData.dob}
                                    onChange={handleChange}
                                    className={` bg-[${fieldBgColor}] border !px-4 !py-2 rounded-md focus:outline-none focus:ring-1`}
                                    required
                                    aria-required="true"
                                />
                            </div>
                        </div>}
                    </>)}

                </div>}

                {/* email and phone no container  */}
                {emailPhoneReqd && <div className={`text-[${mainColor}] grid grid-cols-1 xl:grid-cols-2 gap-x-2 gap-y-3 sm:gap-5 basis-full w-full ${emailPhoneCntnrStyle}`}>

                    {/* email here */}
                    {emailReqd && <div className='flex flex-col'>
                        <div className='flex'>
                            {(asteriskReqd && emailCompulsory) && (<span aria-hidden="true" className="text-red-500 text-lg font-medium ">*</span>)}
                            <input type="email" autoComplete="email" name="email" maxLength={100} title='Enter an email address (e.g. john@example.com)' placeholder="Email Address" aria-label="Email Address" required={emailCompulsory} aria-required={emailCompulsory}
                                value={formData.email}
                                onChange={handleChange}
                                aria-invalid={!!errors.email}
                                className={`bg-[${fieldBgColor}] w-full !px-4 !py-2 border rounded-md focus:outline-none focus:ring-1`} />
                        </div>
                        {errors.email && <p className="text-red-400 font-medium">{errors.email}</p>}
                    </div>
                    }

                    {/* contact no here */}
                    {contactNoReqd && <div className='flex flex-col'>
                        <div className='flex'>
                            {(asteriskReqd && phoneCompulsory) && (<span aria-hidden="true" className="text-red-500 text-lg font-medium ">*</span>)}
                            <div className="flex gap-1">
                                <select name="countryCode" aria-label="Select Phone Code" required={phoneCompulsory} aria-required={phoneCompulsory}
                                    className={`bg-[${fieldBgColor}] w-20 sm:w-30 !px-4 !py-2 border rounded-md focus:outline-none focus:ring-1`}
                                    value={formData.countryCode}
                                    onChange={handleChange}
                                    aria-invalid={!!errors.countryCode} >
                                    <option value="" disabled hidden>Select Country Code</option>
                                    <option data-countrycode="IN" value="91">INDIA +91</option>
                                    <option data-countrycode="US" value="1">USA +1</option>
                                    <option data-countrycode="GB" value="44">UK +44</option>
                                    {/* country codes (ISO 3166) and Dial codes. */}
                                    <optgroup label="All Other Countries">
                                        <option data-countrycode="DZ" value="213">Algeria (+213)</option>
                                        <option data-countrycode="AD" value="376">Andorra (+376)</option>
                                        <option data-countrycode="AO" value="244">Angola (+244)</option>
                                        <option data-countrycode="AI" value="1264">Anguilla (+1264)</option>
                                        <option data-countrycode="AG" value="1268">Antigua &amp; Barbuda (+1268)</option>
                                        <option data-countrycode="AR" value="54">Argentina (+54)</option>
                                        <option data-countrycode="AM" value="374">Armenia (+374)</option>
                                        <option data-countrycode="AW" value="297">Aruba (+297)</option>
                                        <option data-countrycode="AU" value="61">Australia (+61)</option>
                                        <option data-countrycode="AT" value="43">Austria (+43)</option>
                                        <option data-countrycode="AZ" value="994">Azerbaijan (+994)</option>
                                        <option data-countrycode="BS" value="1242">Bahamas (+1242)</option>
                                        <option data-countrycode="BH" value="973">Bahrain (+973)</option>
                                        <option data-countrycode="BD" value="880">Bangladesh (+880)</option>
                                        <option data-countrycode="BB" value="1246">Barbados (+1246)</option>
                                        <option data-countrycode="BY" value="375">Belarus (+375)</option>
                                        <option data-countrycode="BE" value="32">Belgium (+32)</option>
                                        <option data-countrycode="BZ" value="501">Belize (+501)</option>
                                        <option data-countrycode="BJ" value="229">Benin (+229)</option>
                                        <option data-countrycode="BM" value="1441">Bermuda (+1441)</option>
                                        <option data-countrycode="BT" value="975">Bhutan (+975)</option>
                                        <option data-countrycode="BO" value="591">Bolivia (+591)</option>
                                        <option data-countrycode="BA" value="387">Bosnia Herzegovina (+387)</option>
                                        <option data-countrycode="BW" value="267">Botswana (+267)</option>
                                        <option data-countrycode="BR" value="55">Brazil (+55)</option>
                                        <option data-countrycode="BN" value="673">Brunei (+673)</option>
                                        <option data-countrycode="BG" value="359">Bulgaria (+359)</option>
                                        <option data-countrycode="BF" value="226">Burkina Faso (+226)</option>
                                        <option data-countrycode="BI" value="257">Burundi (+257)</option>
                                        <option data-countrycode="KH" value="855">Cambodia (+855)</option>
                                        <option data-countrycode="CM" value="237">Cameroon (+237)</option>
                                        <option data-countrycode="CA" value="1">Canada (+1)</option>
                                        <option data-countrycode="CV" value="238">Cape Verde Islands (+238)</option>
                                        <option data-countrycode="KY" value="1345">Cayman Islands (+1345)</option>
                                        <option data-countrycode="CF" value="236">Central African Republic (+236)</option>
                                        <option data-countrycode="CL" value="56">Chile (+56)</option>
                                        <option data-countrycode="CN" value="86">China (+86)</option>
                                        <option data-countrycode="CO" value="57">Colombia (+57)</option>
                                        <option data-countrycode="KM" value="269">Comoros (+269)</option>
                                        <option data-countrycode="CG" value="242">Congo (+242)</option>
                                        <option data-countrycode="CK" value="682">Cook Islands (+682)</option>
                                        <option data-countrycode="CR" value="506">Costa Rica (+506)</option>
                                        <option data-countrycode="HR" value="385">Croatia (+385)</option>
                                        <option data-countrycode="CU" value="53">Cuba (+53)</option>
                                        <option data-countrycode="CY" value="90392">Cyprus North (+90392)</option>
                                        <option data-countrycode="CY" value="357">Cyprus South (+357)</option>
                                        <option data-countrycode="CZ" value="42">Czech Republic (+42)</option>
                                        <option data-countrycode="DK" value="45">Denmark (+45)</option>
                                        <option data-countrycode="DJ" value="253">Djibouti (+253)</option>
                                        <option data-countrycode="DM" value="1809">Dominica (+1809)</option>
                                        <option data-countrycode="DO" value="1809">Dominican Republic (+1809)</option>
                                        <option data-countrycode="EC" value="593">Ecuador (+593)</option>
                                        <option data-countrycode="EG" value="20">Egypt (+20)</option>
                                        <option data-countrycode="SV" value="503">El Salvador (+503)</option>
                                        <option data-countrycode="GQ" value="240">Equatorial Guinea (+240)</option>
                                        <option data-countrycode="ER" value="291">Eritrea (+291)</option>
                                        <option data-countrycode="EE" value="372">Estonia (+372)</option>
                                        <option data-countrycode="ET" value="251">Ethiopia (+251)</option>
                                        <option data-countrycode="FK" value="500">Falkland Islands (+500)</option>
                                        <option data-countrycode="FO" value="298">Faroe Islands (+298)</option>
                                        <option data-countrycode="FJ" value="679">Fiji (+679)</option>
                                        <option data-countrycode="FI" value="358">Finland (+358)</option>
                                        <option data-countrycode="FR" value="33">France (+33)</option>
                                        <option data-countrycode="GF" value="594">French Guiana (+594)</option>
                                        <option data-countrycode="PF" value="689">French Polynesia (+689)</option>
                                        <option data-countrycode="GA" value="241">Gabon (+241)</option>
                                        <option data-countrycode="GM" value="220">Gambia (+220)</option>
                                        <option data-countrycode="GE" value="7880">Georgia (+7880)</option>
                                        <option data-countrycode="DE" value="49">Germany (+49)</option>
                                        <option data-countrycode="GH" value="233">Ghana (+233)</option>
                                        <option data-countrycode="GI" value="350">Gibraltar (+350)</option>
                                        <option data-countrycode="GR" value="30">Greece (+30)</option>
                                        <option data-countrycode="GL" value="299">Greenland (+299)</option>
                                        <option data-countrycode="GD" value="1473">Grenada (+1473)</option>
                                        <option data-countrycode="GP" value="590">Guadeloupe (+590)</option>
                                        <option data-countrycode="GU" value="671">Guam (+671)</option>
                                        <option data-countrycode="GT" value="502">Guatemala (+502)</option>
                                        <option data-countrycode="GN" value="224">Guinea (+224)</option>
                                        <option data-countrycode="GW" value="245">Guinea - Bissau (+245)</option>
                                        <option data-countrycode="GY" value="592">Guyana (+592)</option>
                                        <option data-countrycode="HT" value="509">Haiti (+509)</option>
                                        <option data-countrycode="HN" value="504">Honduras (+504)</option>
                                        <option data-countrycode="HK" value="852">Hong Kong (+852)</option>
                                        <option data-countrycode="HU" value="36">Hungary (+36)</option>
                                        <option data-countrycode="IS" value="354">Iceland (+354)</option>
                                        {/* <option data-countrycode="IN" value="91">India (+91)</option> */}
                                        <option data-countrycode="ID" value="62">Indonesia (+62)</option>
                                        <option data-countrycode="IR" value="98">Iran (+98)</option>
                                        <option data-countrycode="IQ" value="964">Iraq (+964)</option>
                                        <option data-countrycode="IE" value="353">Ireland (+353)</option>
                                        <option data-countrycode="IL" value="972">Israel (+972)</option>
                                        <option data-countrycode="IT" value="39">Italy (+39)</option>
                                        <option data-countrycode="JM" value="1876">Jamaica (+1876)</option>
                                        <option data-countrycode="JP" value="81">Japan (+81)</option>
                                        <option data-countrycode="JO" value="962">Jordan (+962)</option>
                                        <option data-countrycode="KZ" value="7">Kazakhstan (+7)</option>
                                        <option data-countrycode="KE" value="254">Kenya (+254)</option>
                                        <option data-countrycode="KI" value="686">Kiribati (+686)</option>
                                        <option data-countrycode="KP" value="850">Korea North (+850)</option>
                                        <option data-countrycode="KR" value="82">Korea South (+82)</option>
                                        <option data-countrycode="KW" value="965">Kuwait (+965)</option>
                                        <option data-countrycode="KG" value="996">Kyrgyzstan (+996)</option>
                                        <option data-countrycode="LA" value="856">Laos (+856)</option>
                                        <option data-countrycode="LV" value="371">Latvia (+371)</option>
                                        <option data-countrycode="LB" value="961">Lebanon (+961)</option>
                                        <option data-countrycode="LS" value="266">Lesotho (+266)</option>
                                        <option data-countrycode="LR" value="231">Liberia (+231)</option>
                                        <option data-countrycode="LY" value="218">Libya (+218)</option>
                                        <option data-countrycode="LI" value="417">Liechtenstein (+417)</option>
                                        <option data-countrycode="LT" value="370">Lithuania (+370)</option>
                                        <option data-countrycode="LU" value="352">Luxembourg (+352)</option>
                                        <option data-countrycode="MO" value="853">Macao (+853)</option>
                                        <option data-countrycode="MK" value="389">Macedonia (+389)</option>
                                        <option data-countrycode="MG" value="261">Madagascar (+261)</option>
                                        <option data-countrycode="MW" value="265">Malawi (+265)</option>
                                        <option data-countrycode="MY" value="60">Malaysia (+60)</option>
                                        <option data-countrycode="MV" value="960">Maldives (+960)</option>
                                        <option data-countrycode="ML" value="223">Mali (+223)</option>
                                        <option data-countrycode="MT" value="356">Malta (+356)</option>
                                        <option data-countrycode="MH" value="692">Marshall Islands (+692)</option>
                                        <option data-countrycode="MQ" value="596">Martinique (+596)</option>
                                        <option data-countrycode="MR" value="222">Mauritania (+222)</option>
                                        <option data-countrycode="YT" value="269">Mayotte (+269)</option>
                                        <option data-countrycode="MX" value="52">Mexico (+52)</option>
                                        <option data-countrycode="FM" value="691">Micronesia (+691)</option>
                                        <option data-countrycode="MD" value="373">Moldova (+373)</option>
                                        <option data-countrycode="MC" value="377">Monaco (+377)</option>
                                        <option data-countrycode="MN" value="976">Mongolia (+976)</option>
                                        <option data-countrycode="MS" value="1664">Montserrat (+1664)</option>
                                        <option data-countrycode="MA" value="212">Morocco (+212)</option>
                                        <option data-countrycode="MZ" value="258">Mozambique (+258)</option>
                                        <option data-countrycode="MN" value="95">Myanmar (+95)</option>
                                        <option data-countrycode="NA" value="264">Namibia (+264)</option>
                                        <option data-countrycode="NR" value="674">Nauru (+674)</option>
                                        <option data-countrycode="NP" value="977">Nepal (+977)</option>
                                        <option data-countrycode="NL" value="31">Netherlands (+31)</option>
                                        <option data-countrycode="NC" value="687">New Caledonia (+687)</option>
                                        <option data-countrycode="NZ" value="64">New Zealand (+64)</option>
                                        <option data-countrycode="NI" value="505">Nicaragua (+505)</option>
                                        <option data-countrycode="NE" value="227">Niger (+227)</option>
                                        <option data-countrycode="NG" value="234">Nigeria (+234)</option>
                                        <option data-countrycode="NU" value="683">Niue (+683)</option>
                                        <option data-countrycode="NF" value="672">Norfolk Islands (+672)</option>
                                        <option data-countrycode="NP" value="670">Northern Marianas (+670)</option>
                                        <option data-countrycode="NO" value="47">Norway (+47)</option>
                                        <option data-countrycode="OM" value="968">Oman (+968)</option>
                                        <option data-countrycode="PW" value="680">Palau (+680)</option>
                                        <option data-countrycode="PA" value="507">Panama (+507)</option>
                                        <option data-countrycode="PG" value="675">Papua New Guinea (+675)</option>
                                        <option data-countrycode="PY" value="595">Paraguay (+595)</option>
                                        <option data-countrycode="PE" value="51">Peru (+51)</option>
                                        <option data-countrycode="PH" value="63">Philippines (+63)</option>
                                        <option data-countrycode="PL" value="48">Poland (+48)</option>
                                        <option data-countrycode="PT" value="351">Portugal (+351)</option>
                                        <option data-countrycode="PR" value="1787">Puerto Rico (+1787)</option>
                                        <option data-countrycode="QA" value="974">Qatar (+974)</option>
                                        <option data-countrycode="RE" value="262">Reunion (+262)</option>
                                        <option data-countrycode="RO" value="40">Romania (+40)</option>
                                        <option data-countrycode="RU" value="7">Russia (+7)</option>
                                        <option data-countrycode="RW" value="250">Rwanda (+250)</option>
                                        <option data-countrycode="SM" value="378">San Marino (+378)</option>
                                        <option data-countrycode="ST" value="239">Sao Tome &amp; Principe (+239)</option>
                                        <option data-countrycode="SA" value="966">Saudi Arabia (+966)</option>
                                        <option data-countrycode="SN" value="221">Senegal (+221)</option>
                                        <option data-countrycode="CS" value="381">Serbia (+381)</option>
                                        <option data-countrycode="SC" value="248">Seychelles (+248)</option>
                                        <option data-countrycode="SL" value="232">Sierra Leone (+232)</option>
                                        <option data-countrycode="SG" value="65">Singapore (+65)</option>
                                        <option data-countrycode="SK" value="421">Slovak Republic (+421)</option>
                                        <option data-countrycode="SI" value="386">Slovenia (+386)</option>
                                        <option data-countrycode="SB" value="677">Solomon Islands (+677)</option>
                                        <option data-countrycode="SO" value="252">Somalia (+252)</option>
                                        <option data-countrycode="ZA" value="27">South Africa (+27)</option>
                                        <option data-countrycode="ES" value="34">Spain (+34)</option>
                                        <option data-countrycode="LK" value="94">Sri Lanka (+94)</option>
                                        <option data-countrycode="SH" value="290">St. Helena (+290)</option>
                                        <option data-countrycode="KN" value="1869">St. Kitts (+1869)</option>
                                        <option data-countrycode="SC" value="1758">St. Lucia (+1758)</option>
                                        <option data-countrycode="SD" value="249">Sudan (+249)</option>
                                        <option data-countrycode="SR" value="597">Suriname (+597)</option>
                                        <option data-countrycode="SZ" value="268">Swaziland (+268)</option>
                                        <option data-countrycode="SE" value="46">Sweden (+46)</option>
                                        <option data-countrycode="CH" value="41">Switzerland (+41)</option>
                                        <option data-countrycode="SI" value="963">Syria (+963)</option>
                                        <option data-countrycode="TW" value="886">Taiwan (+886)</option>
                                        <option data-countrycode="TJ" value="7">Tajikstan (+7)</option>
                                        <option data-countrycode="TH" value="66">Thailand (+66)</option>
                                        <option data-countrycode="TG" value="228">Togo (+228)</option>
                                        <option data-countrycode="TO" value="676">Tonga (+676)</option>
                                        <option data-countrycode="TT" value="1868">Trinidad &amp; Tobago (+1868)</option>
                                        <option data-countrycode="TN" value="216">Tunisia (+216)</option>
                                        <option data-countrycode="TR" value="90">Turkey (+90)</option>
                                        <option data-countrycode="TM" value="7">Turkmenistan (+7)</option>
                                        <option data-countrycode="TM" value="993">Turkmenistan (+993)</option>
                                        <option data-countrycode="TC" value="1649">Turks &amp; Caicos Islands (+1649)</option>
                                        <option data-countrycode="TV" value="688">Tuvalu (+688)</option>
                                        <option data-countrycode="UG" value="256">Uganda (+256)</option>
                                        {/* <option data-countrycode="GB" value="44">UK (+44)</option> */}
                                        <option data-countrycode="UA" value="380">Ukraine (+380)</option>
                                        <option data-countrycode="AE" value="971">United Arab Emirates (+971)</option>
                                        <option data-countrycode="UY" value="598">Uruguay (+598)</option>
                                        {/* <option data-countrycode="US" value="1">USA (+1)</option> */}
                                        <option data-countrycode="UZ" value="7">Uzbekistan (+7)</option>
                                        <option data-countrycode="VU" value="678">Vanuatu (+678)</option>
                                        <option data-countrycode="VA" value="379">Vatican City (+379)</option>
                                        <option data-countrycode="VE" value="58">Venezuela (+58)</option>
                                        <option data-countrycode="VN" value="84">Vietnam (+84)</option>
                                        <option data-countrycode="VG" value="84">Virgin Islands - British (+1284)</option>
                                        <option data-countrycode="VI" value="84">Virgin Islands - US (+1340)</option>
                                        <option data-countrycode="WF" value="681">Wallis &amp; Futuna (+681)</option>
                                        <option data-countrycode="YE" value="969">Yemen (North)(+969)</option>
                                        <option data-countrycode="YE" value="967">Yemen (South)(+967)</option>
                                        <option data-countrycode="ZM" value="260">Zambia (+260)</option>
                                        <option data-countrycode="ZW" value="263">Zimbabwe (+263)</option>
                                    </optgroup>
                                </select>
                                <input type="tel" maxLength={maxPhoneLen} autoComplete="tel" name="phone" placeholder="Contact No." aria-label="Contact Number"
                                    required={phoneCompulsory} aria-required={phoneCompulsory}
                                    value={formData.phone}
                                    onChange={handleChange}
                                    aria-invalid={!!errors.phone}
                                    className={`bg-[${fieldBgColor}] w-full !px-4 !py-2 border rounded-md focus:outline-none focus:ring-1`} />
                            </div>
                        </div>
                        {errors.countryCode && <p className="text-red-400 font-medium">{errors.countryCode}</p>}
                        {errors.phone && <p className="text-red-400 font-medium">{errors.phone}</p>}
                    </div>
                    }
                </div>}

                {/* city and country container */}
                {cityCountryReqd && <div className={`text-[${mainColor}] grid grid-cols-1 ${(cityReqd && (countryTextReqd || countrySelectReqd)) ? "sm:grid-cols-2" : "xl:grid-cols-2"} gap-x-2 gap-y-3 sm:gap-5 w-full ${cityCountryCntnrStyle}`}>

                    {/* city field */}
                    {cityReqd && <div className='flex flex-col'>
                        <div className='flex'>
                            {(asteriskReqd && cityCompulsory) && (<span aria-hidden="true" className="text-red-500 text-lg font-medium ">*</span>)}
                            <input type="text" maxLength={50} name="city" placeholder="City" aria-label="City" title='only letters and spaces allowed' required={cityCompulsory} aria-required={cityCompulsory}
                                className={`text-[${mainColor}] bg-[${fieldBgColor}] border w-full !px-4 !py-2  rounded-md focus:outline-none focus:ring-1`}
                                value={formData.city}
                                onChange={handleChange}
                                aria-invalid={!!errors.city}
                            />
                        </div>
                        {errors.city && <p className="text-red-400 font-medium">{errors.city}</p>}
                    </div>
                    }


                    {/* input text type country field  */}

                    {countryTextReqd && <div className='flex flex-col'>
                        <div className='flex'>
                            {(asteriskReqd && countryCompulsory) && (<span aria-hidden="true" className="text-red-500 text-lg font-medium ">*</span>)}
                            <input type="text" maxLength={60} name="country" placeholder="Country" aria-label="Country" title='only letters and spaces allowed' required={countryCompulsory} aria-required={countryCompulsory}
                                className={`text-[${mainColor}] bg-[${fieldBgColor}] border w-full !px-4 !py-2  rounded-md focus:outline-none focus:ring-1`}
                                value={formData.country}
                                onChange={handleChange}
                                aria-invalid={!!errors.country}
                            />
                        </div>
                        {errors.country && <p className="text-red-400 font-medium">{errors.country}</p>}
                    </div>
                    }

                    {/* select type country field */}

                    {countrySelectReqd && <div className='flex flex-col'>
                        <div className='flex'>
                            {(asteriskReqd && countryCompulsory) && (<span aria-hidden="true" className="text-red-500 text-lg font-medium ">*</span>)}
                            <select name="country" aria-label="Country" required={countryCompulsory} aria-required={countryCompulsory}
                                className={`bg-[${fieldBgColor}] w-full !px-4 !py-2 border rounded-md focus:outline-none focus:ring-1`}
                                value={formData.country}
                                onChange={handleChange}
                                aria-invalid={!!errors.country}
                            >
                                <option value="" disabled hidden>Select Country</option>
                                {/* all 196 countries list as options */}
                                <optgroup label="Select Your Country">
                                    <option data-country="afghanistan" value="Afghanistan">Afghanistan</option>
                                    <option data-country="albania" value="Albania">Albania</option>
                                    <option data-country="algeria" value="Algeria">Algeria</option>
                                    <option data-country="andorra" value="Andorra">Andorra</option>
                                    <option data-country="angola" value="Angola">Angola</option>
                                    <option data-country="antiguaandbarbuda" value="Antigua and Barbuda">Antigua and Barbuda</option>
                                    <option data-country="argentina" value="Argentina">Argentina</option>
                                    <option data-country="armenia" value="Armenia">Armenia</option>
                                    <option data-country="australia" value="Australia">Australia</option>
                                    <option data-country="austria" value="Austria">Austria</option>
                                    <option data-country="azerbaijan" value="Azerbaijan">Azerbaijan</option>
                                    <option data-country="bahamas" value="Bahamas">Bahamas</option>
                                    <option data-country="bahrain" value="Bahrain">Bahrain</option>
                                    <option data-country="bangladesh" value="Bangladesh">Bangladesh</option>
                                    <option data-country="barbados" value="Barbados">Barbados</option>
                                    <option data-country="belarus" value="Belarus">Belarus</option>
                                    <option data-country="belgium" value="Belgium">Belgium</option>
                                    <option data-country="belize" value="Belize">Belize</option>
                                    <option data-country="benin" value="Benin">Benin</option>
                                    <option data-country="bhutan" value="Bhutan">Bhutan</option>
                                    <option data-country="bolivia" value="Bolivia">Bolivia</option>
                                    <option data-country="bosniaandherzegovina" value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                    <option data-country="botswana" value="Botswana">Botswana</option>
                                    <option data-country="brazil" value="Brazil">Brazil</option>
                                    <option data-country="brunei" value="Brunei">Brunei</option>
                                    <option data-country="bulgaria" value="Bulgaria">Bulgaria</option>
                                    <option data-country="burkinafaso" value="Burkina Faso">Burkina Faso</option>
                                    <option data-country="burundi" value="Burundi">Burundi</option>
                                    <option data-country="caboverde" value="Cabo Verde">Cabo Verde</option>
                                    <option data-country="cambodia" value="Cambodia">Cambodia</option>
                                    <option data-country="cameroon" value="Cameroon">Cameroon</option>
                                    <option data-country="canada" value="Canada">Canada</option>
                                    <option data-country="centralafricanrepublic" value="Central African Republic">Central African Republic</option>
                                    <option data-country="chad" value="Chad">Chad</option>
                                    <option data-country="chile" value="Chile">Chile</option>
                                    <option data-country="china" value="China">China</option>
                                    <option data-country="colombia" value="Colombia">Colombia</option>
                                    <option data-country="comoros" value="Comoros">Comoros</option>
                                    <option data-country="congodemocraticrepublic" value="Democratic Republic of Congo">Congo Democratic Republic</option>
                                    <option data-country="congorepublic" value="Republic of Congo">Congo Republic</option>
                                    <option data-country="costarica" value="Costa Rica">Costa Rica</option>
                                    <option data-country="croatia" value="Croatia">Croatia</option>
                                    <option data-country="cuba" value="Cuba">Cuba</option>
                                    <option data-country="cyprus" value="Cyprus">Cyprus</option>
                                    <option data-country="czechrepublic" value="Czech Republic">Czech Republic</option>
                                    <option data-country="denmark" value="Denmark">Denmark</option>
                                    <option data-country="djibouti" value="Djibouti">Djibouti</option>
                                    <option data-country="dominica" value="Dominica">Dominica</option>
                                    <option data-country="dominicanrepublic" value="Dominican Republic">Dominican Republic</option>
                                    <option data-country="easttimor" value="East Timor">East Timor</option>
                                    <option data-country="ecuador" value="Ecuador">Ecuador</option>
                                    <option data-country="egypt" value="Egypt">Egypt</option>
                                    <option data-country="el Salvador" value="El Salvador">El Salvador</option>
                                    <option data-country="equatorialguinea" value="Equatorial Guinea">Equatorial Guinea</option>
                                    <option data-country="eritrea" value="Eritrea">Eritrea</option>
                                    <option data-country="estonia" value="Estonia">Estonia</option>
                                    <option data-country="eswatini" value="Eswatini">Eswatini</option>
                                    <option data-country="ethiopia" value="Ethiopia">Ethiopia</option>
                                    <option data-country="fiji" value="Fiji">Fiji</option>
                                    <option data-country="finland" value="Finland">Finland</option>
                                    <option data-country="france" value="France">France</option>
                                    <option data-country="gabon" value="Gabon">Gabon</option>
                                    <option data-country="gambia" value="Gambia">Gambia</option>
                                    <option data-country="georgia" value="Georgia">Georgia</option>
                                    <option data-country="germany" value="Germany">Germany</option>
                                    <option data-country="ghana" value="Ghana">Ghana</option>
                                    <option data-country="greece" value="Greece">Greece</option>
                                    <option data-country="grenada" value="Grenada">Grenada</option>
                                    <option data-country="guatemala" value="Guatemala">Guatemala</option>
                                    <option data-country="guineabissau" value="Guinea-Bissau">Guinea-Bissau</option>
                                    <option data-country="guinea" value="Guinea">Guinea</option>
                                    <option data-country="guyana" value="Guyana">Guyana</option>
                                    <option data-country="haiti" value="Haiti">Haiti</option>
                                    <option data-country="honduras" value="Honduras">Honduras</option>
                                    <option data-country="hungary" value="Hungary">Hungary</option>
                                    <option data-country="iceland" value="Iceland">Iceland</option>
                                    <option data-country="india" value="India">India</option>
                                    <option data-country="indonesia" value="Indonesia">Indonesia</option>
                                    <option data-country="iran" value="Iran">Iran</option>
                                    <option data-country="iraq" value="Iraq">Iraq</option>
                                    <option data-country="ireland" value="Ireland">Ireland</option>
                                    <option data-country="israel" value="Israel">Israel</option>
                                    <option data-country="italy" value="Italy">Italy</option>
                                    <option data-country="ivorycoast" value="Ivory Coast">Ivory Coast</option>
                                    <option data-country="jamaica" value="Jamaica">Jamaica</option>
                                    <option data-country="japan" value="Japan">Japan</option>
                                    <option data-country="jordan" value="Jordan">Jordan</option>
                                    <option data-country="kazakhstan" value="Kazakhstan">Kazakhstan</option>
                                    <option data-country="kenya" value="Kenya">Kenya</option>
                                    <option data-country="kiribati" value="Kiribati">Kiribati</option>
                                    <option data-country="korea" value="Korea">Korea</option>
                                    <option data-country="kosovo" value="Kosovo">Kosovo</option>
                                    <option data-country="kuwait" value="Kuwait">Kuwait</option>
                                    <option data-country="kyrgyzstan" value="Kyrgyzstan">Kyrgyzstan</option>
                                    <option data-country="laos" value="Laos">Laos</option>
                                    <option data-country="latvia" value="Latvia">Latvia</option>
                                    <option data-country="lebanon" value="Lebanon">Lebanon</option>
                                    <option data-country="lesotho" value="Lesotho">Lesotho</option>
                                    <option data-country="liberia" value="Liberia">Liberia</option>
                                    <option data-country="libya" value="Libya">Libya</option>
                                    <option data-country="liechtenstein" value="Liechtenstein">Liechtenstein</option>
                                    <option data-country="lithuania" value="Lithuania">Lithuania</option>
                                    <option data-country="luxembourg" value="Luxembourg">Luxembourg</option>
                                    <option data-country="madagascar" value="Madagascar">Madagascar</option>
                                    <option data-country="malawi" value="Malawi">Malawi</option>
                                    <option data-country="malaysia" value="Malaysia">Malaysia</option>
                                    <option data-country="maldives" value="Maldives">Maldives</option>
                                    <option data-country="mali" value="Mali">Mali</option>
                                    <option data-country="malta" value="Malta">Malta</option>
                                    <option data-country="marshallislands" value="Marshall Islands">Marshall Islands</option>
                                    <option data-country="mauritania" value="Mauritania">Mauritania</option>
                                    <option data-country="mauritius" value="Mauritius">Mauritius</option>
                                    <option data-country="mexico" value="Mexico">Mexico</option>
                                    <option data-country="micronesia" value="Micronesia">Micronesia</option>
                                    <option data-country="moldova" value="Moldova">Moldova</option>
                                    <option data-country="monaco" value="Monaco">Monaco</option>
                                    <option data-country="mongolia" value="Mongolia">Mongolia</option>
                                    <option data-country="montenegro" value="Montenegro">Montenegro</option>
                                    <option data-country="morocco" value="Morocco">Morocco</option>
                                    <option data-country="mozambique" value="Mozambique">Mozambique</option>
                                    <option data-country="myanmar" value="Myanmar">Myanmar</option>
                                    <option data-country="namibia" value="Namibia">Namibia</option>
                                    <option data-country="nauru" value="Nauru">Nauru</option>
                                    <option data-country="nepal" value="Nepal">Nepal</option>
                                    <option data-country="netherlands" value="Netherlands">Netherlands</option>
                                    <option data-country="newzealand" value="New Zealand">New Zealand</option>
                                    <option data-country="nicaragua" value="Nicaragua">Nicaragua</option>
                                    <option data-country="niger" value="Niger">Niger</option>
                                    <option data-country="nigeria" value="Nigeria">Nigeria</option>
                                    <option data-country="northmacedonia" value="North Macedonia">North Macedonia</option>
                                    <option data-country="norway" value="Norway">Norway</option>
                                    <option data-country="oman" value="Oman">Oman</option>
                                    <option data-country="pakistan" value="Pakistan">Pakistan</option>
                                    <option data-country="palau" value="Palau">Palau</option>
                                    <option data-country="panama" value="Panama">Panama</option>
                                    <option data-country="papuanewguinea" value="Papua New Guinea">Papua New Guinea</option>
                                    <option data-country="paraguay" value="Paraguay">Paraguay</option>
                                    <option data-country="peru" value="Peru">Peru</option>
                                    <option data-country="philippines" value="Philippines">Philippines</option>
                                    <option data-country="poland" value="Poland">Poland</option>
                                    <option data-country="portugal" value="Portugal">Portugal</option>
                                    <option data-country="qatar" value="Qatar">Qatar</option>
                                    <option data-country="romania" value="Romania">Romania</option>
                                    <option data-country="russia" value="Russia">Russia</option>
                                    <option data-country="rwanda" value="Rwanda">Rwanda</option>
                                    <option data-country="saintkittsandnevis" value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                    <option data-country="saintlucia" value="Saint Lucia">Saint Lucia</option>
                                    <option data-country="saintvincentandgrenadines" value="Saint Vincent and Grenadines">Saint Vincent and Grenadines</option>
                                    <option data-country="samoa" value="Samoa">Samoa</option>
                                    <option data-country="sanmarino" value="San Marino">San Marino</option>
                                    <option data-country="sao Tomeandprincipe" value="São Tomé and Príncipe">São Tomé and Príncipe</option>
                                    <option data-country="saudiarabia" value="Saudi Arabia">Saudi Arabia</option>
                                    <option data-country="senegal" value="Senegal">Senegal</option>
                                    <option data-country="serbia" value="Serbia">Serbia</option>
                                    <option data-country="seychelles" value="Seychelles">Seychelles</option>
                                    <option data-country="sierra Leone" value="Sierra Leone">Sierra Leone</option>
                                    <option data-country="singapore" value="Singapore">Singapore</option>
                                    <option data-country="slovakia" value="Slovakia">Slovakia</option>
                                    <option data-country="slovenia" value="Slovenia">Slovenia</option>
                                    <option data-country="solomonislands" value="Solomon Islands">Solomon Islands</option>
                                    <option data-country="somalia" value="Somalia">Somalia</option>
                                    <option data-country="southafrica" value="South Africa">South Africa</option>
                                    <option data-country="southkorea" value="South Korea">South Korea</option>
                                    <option data-country="southsudan" value="South Sudan">South Sudan</option>
                                    <option data-country="spain" value="Spain">Spain</option>
                                    <option data-country="sri Lanka" value="Sri Lanka">Sri Lanka</option>
                                    <option data-country="sudan" value="Sudan">Sudan</option>
                                    <option data-country="suriname" value="Suriname">Suriname</option>
                                    <option data-country="sweden" value="Sweden">Sweden</option>
                                    <option data-country="switzerland" value="Switzerland">Switzerland</option>
                                    <option data-country="syria" value="Syria">Syria</option>
                                    <option data-country="taiwan" value="Taiwan">Taiwan</option>
                                    <option data-country="tajikistan" value="Tajikistan">Tajikistan</option>
                                    <option data-country="tanzania" value="Tanzania">Tanzania</option>
                                    <option data-country="thailand" value="Thailand">Thailand</option>
                                    <option data-country="togo" value="Togo">Togo</option>
                                    <option data-country="tonga" value="Tonga">Tonga</option>
                                    <option data-country="trinidadandtobago" value="Trinidad and Tobago">Trinidad and Tobago</option>
                                    <option data-country="tunisia" value="Tunisia">Tunisia</option>
                                    <option data-country="turkey" value="Turkey">Turkey</option>
                                    <option data-country="turkmenistan" value="Turkmenistan">Turkmenistan</option>
                                    <option data-country="tuvalu" value="Tuvalu">Tuvalu</option>
                                    <option data-country="uganda" value="Uganda">Uganda</option>
                                    <option data-country="ukraine" value="Ukraine">Ukraine</option>
                                    <option data-country="unitedarabemirates" value="United Arab Emirates">United Arab Emirates</option>
                                    <option data-country="unitedkingdom" value="United Kingdom">United Kingdom</option>
                                    <option data-country="unitedstatesofamerica" value="United States of America">United States of America</option>
                                    <option data-country="uruguay" value="Uruguay">Uruguay</option>
                                    <option data-country="uzbekistan" value="Uzbekistan">Uzbekistan</option>
                                    <option data-country="vanuatu" value="Vanuatu">Vanuatu</option>
                                    <option data-country="vaticancity" value="Vatican City">Vatican City</option>
                                    <option data-country="venezuela" value="Venezuela">Venezuela</option>
                                    <option data-country="vietnam" value="Vietnam">Vietnam</option>
                                    <option data-country="yemen" value="Yemen">Yemen</option>
                                    <option data-country="zambia" value="Zambia">Zambia</option>
                                    <option data-country="zimbabwe" value="Zimbabwe">Zimbabwe</option>

                                </optgroup>
                            </select>
                        </div>
                        {errors.country && <p className="text-red-400 font-medium">{errors.country}</p>}
                    </div>
                    }

                </div>}

                {/* International Address fields container */}
                {intlAddrReqd && <div className={`text-[${mainColor}] grid grid-cols-4 gap-x-2 gap-y-3 sm:gap-5 w-full ${intlAddrCntnrStyle}`}>

                    {/* street address field */}
                    <div className='flex flex-col col-span-4 xl:col-span-3'>
                        <div className='flex'>
                            {asteriskReqd && <span aria-hidden="true" className="text-red-500 text-lg font-medium ">*</span>}
                            <input type="text" autoComplete="street-address" maxLength={120} name="streetAddress" title='Letters, numbers, and (,.-) allowed' placeholder="Street Address" aria-label="Street Address" required aria-required="true" className={`text-[${mainColor}] bg-[${fieldBgColor}] w-full border !px-4 !py-2 rounded-md focus:outline-none focus:ring-1`}
                                value={formData.streetAddress}
                                onChange={handleChange}
                                aria-invalid={!!errors.streetAddress}
                            />
                        </div>
                        {errors.streetAddress && <p className="text-red-400 font-medium">{errors.streetAddress}</p>}
                    </div>

                    {/* city field */}
                    <div className='flex flex-col col-span-4 sm:col-span-2 xl:col-span-1'>
                        <div className='flex'>
                            {asteriskReqd && <span aria-hidden="true" className="text-red-500 text-lg font-medium ">*</span>}
                            <input type="text" autoComplete="address-level2" maxLength={50} name="city" title='only letters and spaces allowed' placeholder="City" aria-label="City" required aria-required="true"
                                className={`text-[${mainColor}] bg-[${fieldBgColor}] w-full border !px-4 !py-2  rounded-md focus:outline-none focus:ring-1`}
                                value={formData.city}
                                onChange={handleChange}
                                aria-invalid={!!errors.city}
                            />
                        </div>
                        {errors.city && <p className="text-red-400 font-medium">{errors.city}</p>}
                    </div>

                    {/* state field */}
                    <div className='flex flex-col col-span-4 sm:col-span-2 xl:col-span-1'>
                        <div className='flex'>
                            {asteriskReqd && <span aria-hidden="true" className="text-red-500 text-lg font-medium ">*</span>}
                            <input type="text" autoComplete="address-level1" maxLength={50} name="state" title='Only letters and spaces allowed.' placeholder="State/ Province" aria-label="State/ Province" required aria-required="true"
                                className={`text-[${mainColor}] bg-[${fieldBgColor}] w-full border !px-4 !py-2  rounded-md focus:outline-none focus:ring-1`}
                                value={formData.state}
                                onChange={handleChange}
                                aria-invalid={!!errors.state}
                            />
                        </div>
                        {errors.state && <p className="text-red-400 font-medium">{errors.state}</p>}
                    </div>

                    {/* postal code field */}
                    <div className='flex flex-col col-span-4 sm:col-span-2 xl:col-span-1'>
                        <div className='flex'>
                            {asteriskReqd && <span aria-hidden="true" className="text-red-500 text-lg font-medium ">*</span>}
                            <input type="number" autoComplete="postal-code" max={maxPinLen} name="postalCode" placeholder="PIN/ ZIP Code" aria-label="PIN/ ZIP Code" required aria-required="true" className={`bg-[${fieldBgColor}] w-full border !px-4 !py-2  rounded-md focus:outline-none focus:ring-1`}
                                value={formData.postalCode}
                                onChange={handleChange}
                                aria-invalid={!!errors.postalCode}
                            />
                        </div>
                        {errors.postalCode && <p className="text-red-400 font-medium">{errors.postalCode}</p>}
                    </div>

                    {/* input text type country field  */}
                    {switchIntlCountryText && <div className='flex flex-col col-span-4 sm:col-span-2'>
                        <div className='flex'>
                            {asteriskReqd && <span aria-hidden="true" className="text-red-500 text-lg font-medium ">*</span>}
                            <input type="text" autoComplete="country" maxLength={60} name="country" title='only letters and spaces allowed' placeholder="Country" aria-label="Country" required aria-required="true"
                                className={`text-[${mainColor}] bg-[${fieldBgColor}] w-full border !px-4 !py-2  rounded-md focus:outline-none focus:ring-1`}
                                value={formData.country}
                                onChange={handleChange}
                                aria-invalid={!!errors.country}
                            />
                        </div>
                        {errors.country && <p className="text-red-400 font-medium">{errors.country}</p>}
                    </div>}

                    {/* OR choose select type country field */}

                    {switchIntlCountrySelect && <div className='flex flex-col col-span-4 sm:col-span-2'>
                        <div className='flex'>
                            {asteriskReqd && <span aria-hidden="true" className="text-red-500 text-lg font-medium ">*</span>}
                            <select name="country" aria-label="Country" required aria-required="true"
                                className={`bg-[${fieldBgColor}] w-full !px-4 !py-2 border rounded-md focus:outline-none focus:ring-1`}
                                value={formData.country}
                                onChange={handleChange}
                                aria-invalid={!!errors.country}
                            >
                                <option value="" disabled hidden>Select Country</option>
                                {/* all 196 countries list as options */}
                                <optgroup label="Select Your Country">
                                    <option data-country="afghanistan" value="Afghanistan">Afghanistan</option>
                                    <option data-country="albania" value="Albania">Albania</option>
                                    <option data-country="algeria" value="Algeria">Algeria</option>
                                    <option data-country="andorra" value="Andorra">Andorra</option>
                                    <option data-country="angola" value="Angola">Angola</option>
                                    <option data-country="antiguaandbarbuda" value="Antigua and Barbuda">Antigua and Barbuda</option>
                                    <option data-country="argentina" value="Argentina">Argentina</option>
                                    <option data-country="armenia" value="Armenia">Armenia</option>
                                    <option data-country="australia" value="Australia">Australia</option>
                                    <option data-country="austria" value="Austria">Austria</option>
                                    <option data-country="azerbaijan" value="Azerbaijan">Azerbaijan</option>
                                    <option data-country="bahamas" value="Bahamas">Bahamas</option>
                                    <option data-country="bahrain" value="Bahrain">Bahrain</option>
                                    <option data-country="bangladesh" value="Bangladesh">Bangladesh</option>
                                    <option data-country="barbados" value="Barbados">Barbados</option>
                                    <option data-country="belarus" value="Belarus">Belarus</option>
                                    <option data-country="belgium" value="Belgium">Belgium</option>
                                    <option data-country="belize" value="Belize">Belize</option>
                                    <option data-country="benin" value="Benin">Benin</option>
                                    <option data-country="bhutan" value="Bhutan">Bhutan</option>
                                    <option data-country="bolivia" value="Bolivia">Bolivia</option>
                                    <option data-country="bosniaandherzegovina" value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                    <option data-country="botswana" value="Botswana">Botswana</option>
                                    <option data-country="brazil" value="Brazil">Brazil</option>
                                    <option data-country="brunei" value="Brunei">Brunei</option>
                                    <option data-country="bulgaria" value="Bulgaria">Bulgaria</option>
                                    <option data-country="burkinafaso" value="Burkina Faso">Burkina Faso</option>
                                    <option data-country="burundi" value="Burundi">Burundi</option>
                                    <option data-country="caboverde" value="Cabo Verde">Cabo Verde</option>
                                    <option data-country="cambodia" value="Cambodia">Cambodia</option>
                                    <option data-country="cameroon" value="Cameroon">Cameroon</option>
                                    <option data-country="canada" value="Canada">Canada</option>
                                    <option data-country="centralafricanrepublic" value="Central African Republic">Central African Republic</option>
                                    <option data-country="chad" value="Chad">Chad</option>
                                    <option data-country="chile" value="Chile">Chile</option>
                                    <option data-country="china" value="China">China</option>
                                    <option data-country="colombia" value="Colombia">Colombia</option>
                                    <option data-country="comoros" value="Comoros">Comoros</option>
                                    <option data-country="congodemocraticrepublic" value="Democratic Republic of Congo">Congo Democratic Republic</option>
                                    <option data-country="congorepublic" value="Republic of Congo">Congo Republic</option>
                                    <option data-country="costarica" value="Costa Rica">Costa Rica</option>
                                    <option data-country="croatia" value="Croatia">Croatia</option>
                                    <option data-country="cuba" value="Cuba">Cuba</option>
                                    <option data-country="cyprus" value="Cyprus">Cyprus</option>
                                    <option data-country="czechrepublic" value="Czech Republic">Czech Republic</option>
                                    <option data-country="denmark" value="Denmark">Denmark</option>
                                    <option data-country="djibouti" value="Djibouti">Djibouti</option>
                                    <option data-country="dominica" value="Dominica">Dominica</option>
                                    <option data-country="dominicanrepublic" value="Dominican Republic">Dominican Republic</option>
                                    <option data-country="easttimor" value="East Timor">East Timor</option>
                                    <option data-country="ecuador" value="Ecuador">Ecuador</option>
                                    <option data-country="egypt" value="Egypt">Egypt</option>
                                    <option data-country="el Salvador" value="El Salvador">El Salvador</option>
                                    <option data-country="equatorialguinea" value="Equatorial Guinea">Equatorial Guinea</option>
                                    <option data-country="eritrea" value="Eritrea">Eritrea</option>
                                    <option data-country="estonia" value="Estonia">Estonia</option>
                                    <option data-country="eswatini" value="Eswatini">Eswatini</option>
                                    <option data-country="ethiopia" value="Ethiopia">Ethiopia</option>
                                    <option data-country="fiji" value="Fiji">Fiji</option>
                                    <option data-country="finland" value="Finland">Finland</option>
                                    <option data-country="france" value="France">France</option>
                                    <option data-country="gabon" value="Gabon">Gabon</option>
                                    <option data-country="gambia" value="Gambia">Gambia</option>
                                    <option data-country="georgia" value="Georgia">Georgia</option>
                                    <option data-country="germany" value="Germany">Germany</option>
                                    <option data-country="ghana" value="Ghana">Ghana</option>
                                    <option data-country="greece" value="Greece">Greece</option>
                                    <option data-country="grenada" value="Grenada">Grenada</option>
                                    <option data-country="guatemala" value="Guatemala">Guatemala</option>
                                    <option data-country="guineabissau" value="Guinea-Bissau">Guinea-Bissau</option>
                                    <option data-country="guinea" value="Guinea">Guinea</option>
                                    <option data-country="guyana" value="Guyana">Guyana</option>
                                    <option data-country="haiti" value="Haiti">Haiti</option>
                                    <option data-country="honduras" value="Honduras">Honduras</option>
                                    <option data-country="hungary" value="Hungary">Hungary</option>
                                    <option data-country="iceland" value="Iceland">Iceland</option>
                                    <option data-country="india" value="India">India</option>
                                    <option data-country="indonesia" value="Indonesia">Indonesia</option>
                                    <option data-country="iran" value="Iran">Iran</option>
                                    <option data-country="iraq" value="Iraq">Iraq</option>
                                    <option data-country="ireland" value="Ireland">Ireland</option>
                                    <option data-country="israel" value="Israel">Israel</option>
                                    <option data-country="italy" value="Italy">Italy</option>
                                    <option data-country="ivorycoast" value="Ivory Coast">Ivory Coast</option>
                                    <option data-country="jamaica" value="Jamaica">Jamaica</option>
                                    <option data-country="japan" value="Japan">Japan</option>
                                    <option data-country="jordan" value="Jordan">Jordan</option>
                                    <option data-country="kazakhstan" value="Kazakhstan">Kazakhstan</option>
                                    <option data-country="kenya" value="Kenya">Kenya</option>
                                    <option data-country="kiribati" value="Kiribati">Kiribati</option>
                                    <option data-country="korea" value="Korea">Korea</option>
                                    <option data-country="kosovo" value="Kosovo">Kosovo</option>
                                    <option data-country="kuwait" value="Kuwait">Kuwait</option>
                                    <option data-country="kyrgyzstan" value="Kyrgyzstan">Kyrgyzstan</option>
                                    <option data-country="laos" value="Laos">Laos</option>
                                    <option data-country="latvia" value="Latvia">Latvia</option>
                                    <option data-country="lebanon" value="Lebanon">Lebanon</option>
                                    <option data-country="lesotho" value="Lesotho">Lesotho</option>
                                    <option data-country="liberia" value="Liberia">Liberia</option>
                                    <option data-country="libya" value="Libya">Libya</option>
                                    <option data-country="liechtenstein" value="Liechtenstein">Liechtenstein</option>
                                    <option data-country="lithuania" value="Lithuania">Lithuania</option>
                                    <option data-country="luxembourg" value="Luxembourg">Luxembourg</option>
                                    <option data-country="madagascar" value="Madagascar">Madagascar</option>
                                    <option data-country="malawi" value="Malawi">Malawi</option>
                                    <option data-country="malaysia" value="Malaysia">Malaysia</option>
                                    <option data-country="maldives" value="Maldives">Maldives</option>
                                    <option data-country="mali" value="Mali">Mali</option>
                                    <option data-country="malta" value="Malta">Malta</option>
                                    <option data-country="marshallislands" value="Marshall Islands">Marshall Islands</option>
                                    <option data-country="mauritania" value="Mauritania">Mauritania</option>
                                    <option data-country="mauritius" value="Mauritius">Mauritius</option>
                                    <option data-country="mexico" value="Mexico">Mexico</option>
                                    <option data-country="micronesia" value="Micronesia">Micronesia</option>
                                    <option data-country="moldova" value="Moldova">Moldova</option>
                                    <option data-country="monaco" value="Monaco">Monaco</option>
                                    <option data-country="mongolia" value="Mongolia">Mongolia</option>
                                    <option data-country="montenegro" value="Montenegro">Montenegro</option>
                                    <option data-country="morocco" value="Morocco">Morocco</option>
                                    <option data-country="mozambique" value="Mozambique">Mozambique</option>
                                    <option data-country="myanmar" value="Myanmar">Myanmar</option>
                                    <option data-country="namibia" value="Namibia">Namibia</option>
                                    <option data-country="nauru" value="Nauru">Nauru</option>
                                    <option data-country="nepal" value="Nepal">Nepal</option>
                                    <option data-country="netherlands" value="Netherlands">Netherlands</option>
                                    <option data-country="newzealand" value="New Zealand">New Zealand</option>
                                    <option data-country="nicaragua" value="Nicaragua">Nicaragua</option>
                                    <option data-country="niger" value="Niger">Niger</option>
                                    <option data-country="nigeria" value="Nigeria">Nigeria</option>
                                    <option data-country="northmacedonia" value="North Macedonia">North Macedonia</option>
                                    <option data-country="norway" value="Norway">Norway</option>
                                    <option data-country="oman" value="Oman">Oman</option>
                                    <option data-country="pakistan" value="Pakistan">Pakistan</option>
                                    <option data-country="palau" value="Palau">Palau</option>
                                    <option data-country="panama" value="Panama">Panama</option>
                                    <option data-country="papuanewguinea" value="Papua New Guinea">Papua New Guinea</option>
                                    <option data-country="paraguay" value="Paraguay">Paraguay</option>
                                    <option data-country="peru" value="Peru">Peru</option>
                                    <option data-country="philippines" value="Philippines">Philippines</option>
                                    <option data-country="poland" value="Poland">Poland</option>
                                    <option data-country="portugal" value="Portugal">Portugal</option>
                                    <option data-country="qatar" value="Qatar">Qatar</option>
                                    <option data-country="romania" value="Romania">Romania</option>
                                    <option data-country="russia" value="Russia">Russia</option>
                                    <option data-country="rwanda" value="Rwanda">Rwanda</option>
                                    <option data-country="saintkittsandnevis" value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                    <option data-country="saintlucia" value="Saint Lucia">Saint Lucia</option>
                                    <option data-country="saintvincentandgrenadines" value="Saint Vincent and Grenadines">Saint Vincent and Grenadines</option>
                                    <option data-country="samoa" value="Samoa">Samoa</option>
                                    <option data-country="sanmarino" value="San Marino">San Marino</option>
                                    <option data-country="sao Tomeandprincipe" value="São Tomé and Príncipe">São Tomé and Príncipe</option>
                                    <option data-country="saudiarabia" value="Saudi Arabia">Saudi Arabia</option>
                                    <option data-country="senegal" value="Senegal">Senegal</option>
                                    <option data-country="serbia" value="Serbia">Serbia</option>
                                    <option data-country="seychelles" value="Seychelles">Seychelles</option>
                                    <option data-country="sierra Leone" value="Sierra Leone">Sierra Leone</option>
                                    <option data-country="singapore" value="Singapore">Singapore</option>
                                    <option data-country="slovakia" value="Slovakia">Slovakia</option>
                                    <option data-country="slovenia" value="Slovenia">Slovenia</option>
                                    <option data-country="solomonislands" value="Solomon Islands">Solomon Islands</option>
                                    <option data-country="somalia" value="Somalia">Somalia</option>
                                    <option data-country="southafrica" value="South Africa">South Africa</option>
                                    <option data-country="southkorea" value="South Korea">South Korea</option>
                                    <option data-country="southsudan" value="South Sudan">South Sudan</option>
                                    <option data-country="spain" value="Spain">Spain</option>
                                    <option data-country="sri Lanka" value="Sri Lanka">Sri Lanka</option>
                                    <option data-country="sudan" value="Sudan">Sudan</option>
                                    <option data-country="suriname" value="Suriname">Suriname</option>
                                    <option data-country="sweden" value="Sweden">Sweden</option>
                                    <option data-country="switzerland" value="Switzerland">Switzerland</option>
                                    <option data-country="syria" value="Syria">Syria</option>
                                    <option data-country="taiwan" value="Taiwan">Taiwan</option>
                                    <option data-country="tajikistan" value="Tajikistan">Tajikistan</option>
                                    <option data-country="tanzania" value="Tanzania">Tanzania</option>
                                    <option data-country="thailand" value="Thailand">Thailand</option>
                                    <option data-country="togo" value="Togo">Togo</option>
                                    <option data-country="tonga" value="Tonga">Tonga</option>
                                    <option data-country="trinidadandtobago" value="Trinidad and Tobago">Trinidad and Tobago</option>
                                    <option data-country="tunisia" value="Tunisia">Tunisia</option>
                                    <option data-country="turkey" value="Turkey">Turkey</option>
                                    <option data-country="turkmenistan" value="Turkmenistan">Turkmenistan</option>
                                    <option data-country="tuvalu" value="Tuvalu">Tuvalu</option>
                                    <option data-country="uganda" value="Uganda">Uganda</option>
                                    <option data-country="ukraine" value="Ukraine">Ukraine</option>
                                    <option data-country="unitedarabemirates" value="United Arab Emirates">United Arab Emirates</option>
                                    <option data-country="unitedkingdom" value="United Kingdom">United Kingdom</option>
                                    <option data-country="unitedstatesofamerica" value="United States of America">United States of America</option>
                                    <option data-country="uruguay" value="Uruguay">Uruguay</option>
                                    <option data-country="uzbekistan" value="Uzbekistan">Uzbekistan</option>
                                    <option data-country="vanuatu" value="Vanuatu">Vanuatu</option>
                                    <option data-country="vaticancity" value="Vatican City">Vatican City</option>
                                    <option data-country="venezuela" value="Venezuela">Venezuela</option>
                                    <option data-country="vietnam" value="Vietnam">Vietnam</option>
                                    <option data-country="yemen" value="Yemen">Yemen</option>
                                    <option data-country="zambia" value="Zambia">Zambia</option>
                                    <option data-country="zimbabwe" value="Zimbabwe">Zimbabwe</option>

                                </optgroup>
                            </select>
                        </div>
                        {errors.country && <p className="text-red-400 font-medium">{errors.country}</p>}
                    </div>}

                </div>}

                {/* Indian Address Type fields container */}
                {indAddrReqd && <div className={`text-[${mainColor}]  grid grid-cols-6 gap-x-2 gap-y-3 sm:gap-5 w-full ${indAddrCntnrStyle}`}>

                    {/* H.No/ street field */}
                    <div className='flex flex-col col-span-3 sm:col-span-2'>
                        <div className='flex'>
                            {asteriskReqd && <span aria-hidden="true" className="text-red-500 text-lg font-medium ">*</span>}
                            <input type="text" autoComplete="address-line1" maxLength={20} name="street" placeholder="H.No./St." aria-label="House/ Street" required aria-required="true" className={`text-[${mainColor}] bg-[${fieldBgColor}] w-full  border !px-4 !py-2  rounded-md focus:outline-none focus:ring-1`}
                                value={formData.street}
                                onChange={handleChange}
                                aria-invalid={!!errors.street}
                            />
                        </div>
                        {errors.street && <p className="text-red-400 font-medium">{errors.street}</p>}
                    </div>

                    {/* landmark field */}
                    <div className='flex flex-col col-span-3 sm:col-span-4'>
                        <input type="text" maxLength={100} name="landmark" title='Letters, numbers, and (,.-) allowed' placeholder="Landmark (optional)" aria-label="Landmark (optional)" className={`text-[${mainColor}] bg-[${fieldBgColor}] border !px-4 !py-2 rounded-md focus:outline-none focus:ring-1`}
                            value={formData.landmark}
                            onChange={handleChange}
                            aria-invalid={!!errors.landmark}
                        />
                        {errors.landmark && <p className="text-red-400 font-medium">{errors.landmark}</p>}
                    </div>

                    {/* address line 1 field */}
                    <div className='flex flex-col col-span-6'>
                        <div className='flex'>
                            {asteriskReqd && <span aria-hidden="true" className="text-red-500 text-lg font-medium ">*</span>}
                            <input type="text" autoComplete="address-line1" maxLength={100} name="addressLine1" title='Letters, numbers, and (,.-) allowed' placeholder="Address Line 1" aria-label="Address Line 1" required aria-required="true" className={`text-[${mainColor}] bg-[${fieldBgColor}] w-full  border !px-4 !py-2  rounded-md focus:outline-none focus:ring-1`}
                                value={formData.addressLine1}
                                onChange={handleChange}
                                aria-invalid={!!errors.addressLine1}
                            />
                        </div>
                        {errors.addressLine1 && <p className="text-red-400 font-medium">{errors.addressLine1}</p>}
                    </div>

                    {/* address line 2 field */}
                    <div className='flex flex-col sm:col-span-4 col-span-6'>
                        <input type="text" autoComplete="address-line2" maxLength={100} name="addressLine2" title='Letters, numbers, and (,.-) allowed' placeholder="Address Line 2 (optional)" aria-label="Address Line 2 (optional)" className={`text-[${mainColor}] bg-[${fieldBgColor}] border !px-4 !py-2  rounded-md focus:outline-none focus:ring-1`}
                            value={formData.addressLine2}
                            onChange={handleChange}
                            aria-invalid={!!errors.addressLine2}
                        />
                        {errors.addressLine2 && <p className="text-red-400 font-medium">{errors.addressLine2}</p>}
                    </div>


                    {/* city field */}
                    <div className='flex flex-col sm:col-span-2 col-span-6'>
                        <div className='flex'>
                            {asteriskReqd && <span aria-hidden="true" className="text-red-500 text-lg font-medium ">*</span>}
                            <input type="text" autoComplete="address-level2" maxLength={50} name="city" title='only letters and spaces allowed' placeholder="City" aria-label="City" required aria-required="true"
                                className={`text-[${mainColor}] bg-[${fieldBgColor}] border w-full !px-4 !py-2  rounded-md focus:outline-none focus:ring-1`}
                                value={formData.city}
                                onChange={handleChange}
                                aria-invalid={!!errors.city}
                            />
                        </div>
                        {errors.city && <p className="text-red-400 font-medium">{errors.city}</p>}
                    </div>

                    {/* state field */}
                    <div className='flex flex-col sm:col-span-2 col-span-6'>
                        <div className='flex'>
                            {asteriskReqd && <span aria-hidden="true" className="text-red-500 text-lg font-medium ">*</span>}
                            <input type="text" autoComplete="address-level1" maxLength={50} name="state" title='Only letters and spaces allowed.' placeholder="State/ Province" aria-label="State/ Province" required aria-required="true"
                                className={`text-[${mainColor}] bg-[${fieldBgColor}] border w-full !px-4 !py-2  rounded-md focus:outline-none focus:ring-1`}
                                value={formData.state}
                                onChange={handleChange}
                                aria-invalid={!!errors.state}
                            />
                        </div>
                        {errors.state && <p className="text-red-400 font-medium">{errors.state}</p>}
                    </div>

                    {/* postal code field */}
                    <div className='flex flex-col col-span-6 sm:col-span-2'>
                        <div className='flex'>
                            {asteriskReqd && <span aria-hidden="true" className="text-red-500 text-lg font-medium ">*</span>}
                            <input type="number" autoComplete="postal-code" max={maxPinLen} name="postalCode" placeholder="PIN/ ZIP Code" aria-label="PIN/ ZIP Code" required aria-required="true" className={`bg-[${fieldBgColor}] border w-full !px-4 !py-2  rounded-md focus:outline-none focus:ring-1`}
                                value={formData.postalCode}
                                onChange={handleChange}
                                aria-invalid={!!errors.postalCode}
                            />
                        </div>
                        {errors.postalCode && <p className="text-red-400 font-medium">{errors.postalCode}</p>}
                    </div>

                    {/* input text type country field  */}

                    {switchIndCountryText && <div className='flex flex-col col-span-6 sm:col-span-2'>
                        <div className='flex'>
                            {asteriskReqd && <span aria-hidden="true" className="text-red-500 text-lg font-medium ">*</span>}
                            <input type="text" autoComplete="country" maxLength={60} name="country" title='only letters and spaces allowed' placeholder="Country" aria-label="Country" required aria-required="true"
                                className={`text-[${mainColor}] bg-[${fieldBgColor}] border w-full !px-4 !py-2  rounded-md focus:outline-none focus:ring-1`}
                                value={formData.country}
                                onChange={handleChange}
                                aria-invalid={!!errors.country}
                            />
                        </div>
                        {errors.country && <p className="text-red-400 font-medium">{errors.country}</p>}
                    </div>}

                    {/* OR choose select type country field */}

                    {switchIndCountrySelect && <div className='flex flex-col col-span-6 sm:col-span-2'>
                        <div className='flex'>
                            {asteriskReqd && <span aria-hidden="true" className="text-red-500 text-lg font-medium ">*</span>}
                            <select name="country" aria-label="Country" required aria-required="true"
                                className={`bg-[${fieldBgColor}] w-full !px-4 !py-2 border rounded-md focus:outline-none focus:ring-1`}
                                value={formData.country}
                                onChange={handleChange}
                                aria-invalid={!!errors.country}
                            >
                                <option value="" disabled hidden>Country</option>
                                {/* all 196 countries list as options */}
                                <optgroup label="Select Your Country">
                                    <option data-country="afghanistan" value="Afghanistan">Afghanistan</option>
                                    <option data-country="albania" value="Albania">Albania</option>
                                    <option data-country="algeria" value="Algeria">Algeria</option>
                                    <option data-country="andorra" value="Andorra">Andorra</option>
                                    <option data-country="angola" value="Angola">Angola</option>
                                    <option data-country="antiguaandbarbuda" value="Antigua and Barbuda">Antigua and Barbuda</option>
                                    <option data-country="argentina" value="Argentina">Argentina</option>
                                    <option data-country="armenia" value="Armenia">Armenia</option>
                                    <option data-country="australia" value="Australia">Australia</option>
                                    <option data-country="austria" value="Austria">Austria</option>
                                    <option data-country="azerbaijan" value="Azerbaijan">Azerbaijan</option>
                                    <option data-country="bahamas" value="Bahamas">Bahamas</option>
                                    <option data-country="bahrain" value="Bahrain">Bahrain</option>
                                    <option data-country="bangladesh" value="Bangladesh">Bangladesh</option>
                                    <option data-country="barbados" value="Barbados">Barbados</option>
                                    <option data-country="belarus" value="Belarus">Belarus</option>
                                    <option data-country="belgium" value="Belgium">Belgium</option>
                                    <option data-country="belize" value="Belize">Belize</option>
                                    <option data-country="benin" value="Benin">Benin</option>
                                    <option data-country="bhutan" value="Bhutan">Bhutan</option>
                                    <option data-country="bolivia" value="Bolivia">Bolivia</option>
                                    <option data-country="bosniaandherzegovina" value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                    <option data-country="botswana" value="Botswana">Botswana</option>
                                    <option data-country="brazil" value="Brazil">Brazil</option>
                                    <option data-country="brunei" value="Brunei">Brunei</option>
                                    <option data-country="bulgaria" value="Bulgaria">Bulgaria</option>
                                    <option data-country="burkinafaso" value="Burkina Faso">Burkina Faso</option>
                                    <option data-country="burundi" value="Burundi">Burundi</option>
                                    <option data-country="caboverde" value="Cabo Verde">Cabo Verde</option>
                                    <option data-country="cambodia" value="Cambodia">Cambodia</option>
                                    <option data-country="cameroon" value="Cameroon">Cameroon</option>
                                    <option data-country="canada" value="Canada">Canada</option>
                                    <option data-country="centralafricanrepublic" value="Central African Republic">Central African Republic</option>
                                    <option data-country="chad" value="Chad">Chad</option>
                                    <option data-country="chile" value="Chile">Chile</option>
                                    <option data-country="china" value="China">China</option>
                                    <option data-country="colombia" value="Colombia">Colombia</option>
                                    <option data-country="comoros" value="Comoros">Comoros</option>
                                    <option data-country="congodemocraticrepublic" value="Democratic Republic of Congo">Congo Democratic Republic</option>
                                    <option data-country="congorepublic" value="Republic of Congo">Congo Republic</option>
                                    <option data-country="costarica" value="Costa Rica">Costa Rica</option>
                                    <option data-country="croatia" value="Croatia">Croatia</option>
                                    <option data-country="cuba" value="Cuba">Cuba</option>
                                    <option data-country="cyprus" value="Cyprus">Cyprus</option>
                                    <option data-country="czechrepublic" value="Czech Republic">Czech Republic</option>
                                    <option data-country="denmark" value="Denmark">Denmark</option>
                                    <option data-country="djibouti" value="Djibouti">Djibouti</option>
                                    <option data-country="dominica" value="Dominica">Dominica</option>
                                    <option data-country="dominicanrepublic" value="Dominican Republic">Dominican Republic</option>
                                    <option data-country="easttimor" value="East Timor">East Timor</option>
                                    <option data-country="ecuador" value="Ecuador">Ecuador</option>
                                    <option data-country="egypt" value="Egypt">Egypt</option>
                                    <option data-country="el Salvador" value="El Salvador">El Salvador</option>
                                    <option data-country="equatorialguinea" value="Equatorial Guinea">Equatorial Guinea</option>
                                    <option data-country="eritrea" value="Eritrea">Eritrea</option>
                                    <option data-country="estonia" value="Estonia">Estonia</option>
                                    <option data-country="eswatini" value="Eswatini">Eswatini</option>
                                    <option data-country="ethiopia" value="Ethiopia">Ethiopia</option>
                                    <option data-country="fiji" value="Fiji">Fiji</option>
                                    <option data-country="finland" value="Finland">Finland</option>
                                    <option data-country="france" value="France">France</option>
                                    <option data-country="gabon" value="Gabon">Gabon</option>
                                    <option data-country="gambia" value="Gambia">Gambia</option>
                                    <option data-country="georgia" value="Georgia">Georgia</option>
                                    <option data-country="germany" value="Germany">Germany</option>
                                    <option data-country="ghana" value="Ghana">Ghana</option>
                                    <option data-country="greece" value="Greece">Greece</option>
                                    <option data-country="grenada" value="Grenada">Grenada</option>
                                    <option data-country="guatemala" value="Guatemala">Guatemala</option>
                                    <option data-country="guineabissau" value="Guinea-Bissau">Guinea-Bissau</option>
                                    <option data-country="guinea" value="Guinea">Guinea</option>
                                    <option data-country="guyana" value="Guyana">Guyana</option>
                                    <option data-country="haiti" value="Haiti">Haiti</option>
                                    <option data-country="honduras" value="Honduras">Honduras</option>
                                    <option data-country="hungary" value="Hungary">Hungary</option>
                                    <option data-country="iceland" value="Iceland">Iceland</option>
                                    <option data-country="india" value="India">India</option>
                                    <option data-country="indonesia" value="Indonesia">Indonesia</option>
                                    <option data-country="iran" value="Iran">Iran</option>
                                    <option data-country="iraq" value="Iraq">Iraq</option>
                                    <option data-country="ireland" value="Ireland">Ireland</option>
                                    <option data-country="israel" value="Israel">Israel</option>
                                    <option data-country="italy" value="Italy">Italy</option>
                                    <option data-country="ivorycoast" value="Ivory Coast">Ivory Coast</option>
                                    <option data-country="jamaica" value="Jamaica">Jamaica</option>
                                    <option data-country="japan" value="Japan">Japan</option>
                                    <option data-country="jordan" value="Jordan">Jordan</option>
                                    <option data-country="kazakhstan" value="Kazakhstan">Kazakhstan</option>
                                    <option data-country="kenya" value="Kenya">Kenya</option>
                                    <option data-country="kiribati" value="Kiribati">Kiribati</option>
                                    <option data-country="korea" value="Korea">Korea</option>
                                    <option data-country="kosovo" value="Kosovo">Kosovo</option>
                                    <option data-country="kuwait" value="Kuwait">Kuwait</option>
                                    <option data-country="kyrgyzstan" value="Kyrgyzstan">Kyrgyzstan</option>
                                    <option data-country="laos" value="Laos">Laos</option>
                                    <option data-country="latvia" value="Latvia">Latvia</option>
                                    <option data-country="lebanon" value="Lebanon">Lebanon</option>
                                    <option data-country="lesotho" value="Lesotho">Lesotho</option>
                                    <option data-country="liberia" value="Liberia">Liberia</option>
                                    <option data-country="libya" value="Libya">Libya</option>
                                    <option data-country="liechtenstein" value="Liechtenstein">Liechtenstein</option>
                                    <option data-country="lithuania" value="Lithuania">Lithuania</option>
                                    <option data-country="luxembourg" value="Luxembourg">Luxembourg</option>
                                    <option data-country="madagascar" value="Madagascar">Madagascar</option>
                                    <option data-country="malawi" value="Malawi">Malawi</option>
                                    <option data-country="malaysia" value="Malaysia">Malaysia</option>
                                    <option data-country="maldives" value="Maldives">Maldives</option>
                                    <option data-country="mali" value="Mali">Mali</option>
                                    <option data-country="malta" value="Malta">Malta</option>
                                    <option data-country="marshallislands" value="Marshall Islands">Marshall Islands</option>
                                    <option data-country="mauritania" value="Mauritania">Mauritania</option>
                                    <option data-country="mauritius" value="Mauritius">Mauritius</option>
                                    <option data-country="mexico" value="Mexico">Mexico</option>
                                    <option data-country="micronesia" value="Micronesia">Micronesia</option>
                                    <option data-country="moldova" value="Moldova">Moldova</option>
                                    <option data-country="monaco" value="Monaco">Monaco</option>
                                    <option data-country="mongolia" value="Mongolia">Mongolia</option>
                                    <option data-country="montenegro" value="Montenegro">Montenegro</option>
                                    <option data-country="morocco" value="Morocco">Morocco</option>
                                    <option data-country="mozambique" value="Mozambique">Mozambique</option>
                                    <option data-country="myanmar" value="Myanmar">Myanmar</option>
                                    <option data-country="namibia" value="Namibia">Namibia</option>
                                    <option data-country="nauru" value="Nauru">Nauru</option>
                                    <option data-country="nepal" value="Nepal">Nepal</option>
                                    <option data-country="netherlands" value="Netherlands">Netherlands</option>
                                    <option data-country="newzealand" value="New Zealand">New Zealand</option>
                                    <option data-country="nicaragua" value="Nicaragua">Nicaragua</option>
                                    <option data-country="niger" value="Niger">Niger</option>
                                    <option data-country="nigeria" value="Nigeria">Nigeria</option>
                                    <option data-country="northmacedonia" value="North Macedonia">North Macedonia</option>
                                    <option data-country="norway" value="Norway">Norway</option>
                                    <option data-country="oman" value="Oman">Oman</option>
                                    <option data-country="pakistan" value="Pakistan">Pakistan</option>
                                    <option data-country="palau" value="Palau">Palau</option>
                                    <option data-country="panama" value="Panama">Panama</option>
                                    <option data-country="papuanewguinea" value="Papua New Guinea">Papua New Guinea</option>
                                    <option data-country="paraguay" value="Paraguay">Paraguay</option>
                                    <option data-country="peru" value="Peru">Peru</option>
                                    <option data-country="philippines" value="Philippines">Philippines</option>
                                    <option data-country="poland" value="Poland">Poland</option>
                                    <option data-country="portugal" value="Portugal">Portugal</option>
                                    <option data-country="qatar" value="Qatar">Qatar</option>
                                    <option data-country="romania" value="Romania">Romania</option>
                                    <option data-country="russia" value="Russia">Russia</option>
                                    <option data-country="rwanda" value="Rwanda">Rwanda</option>
                                    <option data-country="saintkittsandnevis" value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                    <option data-country="saintlucia" value="Saint Lucia">Saint Lucia</option>
                                    <option data-country="saintvincentandgrenadines" value="Saint Vincent and Grenadines">Saint Vincent and Grenadines</option>
                                    <option data-country="samoa" value="Samoa">Samoa</option>
                                    <option data-country="sanmarino" value="San Marino">San Marino</option>
                                    <option data-country="sao Tomeandprincipe" value="São Tomé and Príncipe">São Tomé and Príncipe</option>
                                    <option data-country="saudiarabia" value="Saudi Arabia">Saudi Arabia</option>
                                    <option data-country="senegal" value="Senegal">Senegal</option>
                                    <option data-country="serbia" value="Serbia">Serbia</option>
                                    <option data-country="seychelles" value="Seychelles">Seychelles</option>
                                    <option data-country="sierra Leone" value="Sierra Leone">Sierra Leone</option>
                                    <option data-country="singapore" value="Singapore">Singapore</option>
                                    <option data-country="slovakia" value="Slovakia">Slovakia</option>
                                    <option data-country="slovenia" value="Slovenia">Slovenia</option>
                                    <option data-country="solomonislands" value="Solomon Islands">Solomon Islands</option>
                                    <option data-country="somalia" value="Somalia">Somalia</option>
                                    <option data-country="southafrica" value="South Africa">South Africa</option>
                                    <option data-country="southkorea" value="South Korea">South Korea</option>
                                    <option data-country="southsudan" value="South Sudan">South Sudan</option>
                                    <option data-country="spain" value="Spain">Spain</option>
                                    <option data-country="sri Lanka" value="Sri Lanka">Sri Lanka</option>
                                    <option data-country="sudan" value="Sudan">Sudan</option>
                                    <option data-country="suriname" value="Suriname">Suriname</option>
                                    <option data-country="sweden" value="Sweden">Sweden</option>
                                    <option data-country="switzerland" value="Switzerland">Switzerland</option>
                                    <option data-country="syria" value="Syria">Syria</option>
                                    <option data-country="taiwan" value="Taiwan">Taiwan</option>
                                    <option data-country="tajikistan" value="Tajikistan">Tajikistan</option>
                                    <option data-country="tanzania" value="Tanzania">Tanzania</option>
                                    <option data-country="thailand" value="Thailand">Thailand</option>
                                    <option data-country="togo" value="Togo">Togo</option>
                                    <option data-country="tonga" value="Tonga">Tonga</option>
                                    <option data-country="trinidadandtobago" value="Trinidad and Tobago">Trinidad and Tobago</option>
                                    <option data-country="tunisia" value="Tunisia">Tunisia</option>
                                    <option data-country="turkey" value="Turkey">Turkey</option>
                                    <option data-country="turkmenistan" value="Turkmenistan">Turkmenistan</option>
                                    <option data-country="tuvalu" value="Tuvalu">Tuvalu</option>
                                    <option data-country="uganda" value="Uganda">Uganda</option>
                                    <option data-country="ukraine" value="Ukraine">Ukraine</option>
                                    <option data-country="unitedarabemirates" value="United Arab Emirates">United Arab Emirates</option>
                                    <option data-country="unitedkingdom" value="United Kingdom">United Kingdom</option>
                                    <option data-country="unitedstatesofamerica" value="United States of America">United States of America</option>
                                    <option data-country="uruguay" value="Uruguay">Uruguay</option>
                                    <option data-country="uzbekistan" value="Uzbekistan">Uzbekistan</option>
                                    <option data-country="vanuatu" value="Vanuatu">Vanuatu</option>
                                    <option data-country="vaticancity" value="Vatican City">Vatican City</option>
                                    <option data-country="venezuela" value="Venezuela">Venezuela</option>
                                    <option data-country="vietnam" value="Vietnam">Vietnam</option>
                                    <option data-country="yemen" value="Yemen">Yemen</option>
                                    <option data-country="zambia" value="Zambia">Zambia</option>
                                    <option data-country="zimbabwe" value="Zimbabwe">Zimbabwe</option>

                                </optgroup>
                            </select>
                        </div>
                        {errors.country && <p className="text-red-400 font-medium">{errors.country}</p>}
                    </div>}

                </div>}

                {/* upload input container */}
                {/* {uploadReqd && <div className={`flex flex-wrap flex-basis gap-2 items-center justify-center ${uploadCntnrStyle}`}>
                    <div className='flex'>
                        {(asteriskReqd && uploadCompulsory) && (<span aria-hidden="true" className="text-red-500 text-lg font-medium ">*</span>)}
                        <label htmlFor="myFile" className={`text-[${mainColor}] !px-2 `}>{uploadLabel}</label>
                    </div>
                    <div className={`flex gap-2 sm:gap-5`}>
                        <input type="file"
                            id="myFile"
                            name="myFile"
                            accept={uploadFileType}
                            required={uploadCompulsory} aria-required={uploadCompulsory}
                            className={`bg-[${fieldBgColor}] text-[${mainColor}]  !px-4 !py-2 border rounded-md w-full focus:outline-none focus:ring-1`}
                            onChange={handleFileChange} multiple={multipleUpload} />
                        <button onClick={handleFileUpload} className={`!py-2 !bg-[${mainColor}] text-[${fieldBgColor}] !rounded-4xl`} >Upload</button>
                    </div>
                </div>} */}

                {/* subject fields - text or select type */}

                {/* text type field */}
                {subjectTextReqd && <div className='flex flex-col w-full sm:w-[80%] xl:w-[60%]'>
                    <div className='flex w-full'>
                        {(asteriskReqd && subjectCompulsory) && (<span aria-hidden="true" className="text-red-500 text-lg font-medium ">*</span>)}
                        <input type="text" maxLength={50} name="subject" title='Only letters, numbers and spaces allowed.' id="subject-text" placeholder={textSubjectLabel} aria-label={textSubjectLabel} required={subjectCompulsory} aria-required={subjectCompulsory} className={`text-[${mainColor}] bg-[${fieldBgColor}] w-full !px-4 !py-2 border rounded-md focus:outline-none focus:ring-1`}
                            value={formData.subject}
                            onChange={handleChange}
                            aria-invalid={!!errors.subject}
                        />
                    </div>
                    {errors.subject && <p className="text-red-400 font-medium">{errors.subject}</p>}
                </div>}

                {/* select type field */}
                {subjectSelectReqd && <div className='flex flex-col w-full sm:w-[80%] xl:w-[60%]'>
                    <div className='flex w-full'>
                        {(asteriskReqd && subjectCompulsory) && (<span aria-hidden="true" className="text-red-500 text-lg font-medium ">*</span>)}
                        <select name="subject" aria-label={outerSubjectLabel} id="subject-select" required={subjectCompulsory} aria-required={subjectCompulsory} className={`text-[${mainColor}] bg-[${fieldBgColor}] w-full !px-4 !py-2 border rounded-md focus:outline-none focus:ring-1`}
                            value={formData.subject}
                            onChange={handleChange}
                            aria-invalid={!!errors.subject}>
                            <option value="" disabled hidden>{outerSubjectLabel}</option>
                            {/* all options here */}
                            <optgroup label={innerSubjectLabel}>
                                {optionsTray}
                            </optgroup>
                        </select>
                    </div>
                    {errors.subject && <p className="text-red-400 font-medium">{errors.subject}</p>}
                </div>}

                {/* message here */}
                {msgReqd && <div className={`${msgCntnrStyle} w-full flex flex-col items-center gap-2`}>
                    <div className='flex w-full'>
                        {(asteriskReqd && msgCompulsory) && (<span aria-hidden="true" className="text-red-500 text-lg font-medium ">*</span>)}
                        <textarea
                            name="message" maxLength={msgMaxLen} placeholder={msgPlaceholder} aria-label={msgPlaceholder} required={msgCompulsory} aria-required={msgCompulsory}
                            className={`text-[${mainColor}] bg-[${fieldBgColor}] w-full !px-4 !py-2 border rounded-md focus:outline-none focus:ring-1`}
                            value={formData.message}
                            onChange={handleChange}
                            aria-invalid={!!errors.message}
                        />
                    </div>
                    {errors.message && <p className="text-red-400 font-medium">{errors.message}</p>}

                    {/* character count here */}
                    <p aria-hidden="true" className={`basis-full text-[${mainColor}]`}><span id="count">{formData.message.length}</span>/{msgMaxLen}</p>
                </div>}

                {/* note: */}
                {asteriskReqd && <span aria-hidden="true" className=" text-red-500 w-full text-lg font-medium text-start">* Fields are mandatory</span>}


                {/* consent Container */}

                {consentReqd && <div className={`text-[${mainColor}] flex flex-col gap-1 w-full ${consentCntnrStyle}`}>
                    {consentHeadingReqd && <a href="/" className="w-fit" onClick={(e) => {
                        e.preventDefault();
                        setIsTermsVisible((prev) => !prev);
                    }}>
                        {consentHeading}
                    </a>}
                    {(isTermsVisible && termsPageReqd) &&
                        <div className={`bg-[${fieldBgColor}] !p-5 !mb-5 rounded-md h-80 overflow-y-scroll`} style={{ boxShadow: 'inset 0px 0px 5px 1px black' }}>
                            {termsPage}
                        </div>}
                    {consent1Reqd && <label className='flex gap-2 w-fit items-start'>
                        <input type="checkbox" name="consent1"
                            checked={consent1Agreed}
                            onChange={(e) => setConsent1Agreed(e.target.checked)}
                            className='!mt-2'
                            required aria-required="true" aria-invalid={(!!errors.consent && !consent1Agreed)} />
                        {consentLine1}
                        {(errors.consent && !consent1Agreed) && <p className="text-red-400 font-medium">{errors.consent}</p>}
                    </label>}

                    {consent2Reqd && <label className='flex gap-2 w-fit items-start'>
                        <input type="checkbox" name="consent2"
                            checked={consent2Agreed}
                            onChange={(e) => setConsent2Agreed(e.target.checked)}
                            className='!mt-2'
                            required aria-required="true" aria-invalid={(!!errors.consent && !consent2Agreed)} />
                        {consentLine2}
                        {(errors.consent && !consent2Agreed) && <p className="text-red-400 font-medium">{errors.consent}</p>}
                    </label>}

                    {consent3Reqd && <label className='flex gap-2 w-fit items-start'>
                        <input type="checkbox" name="consent3"
                            checked={consent3Agreed}
                            onChange={(e) => setConsent3Agreed(e.target.checked)}
                            className='!mt-2'
                            required aria-required="true" aria-invalid={(!!errors.consent && !consent3Agreed)} />
                        {consentLine3}
                        {(errors.consent && !consent3Agreed) && <p className="text-red-400 font-medium">{errors.consent}</p>}
                    </label>}

                    {optionalConsentReqd && <label className='flex gap-2 w-fit items-start'>
                        <input type="checkbox" name="optConsent"
                            checked={optConsentAgreed}
                            onChange={(e) => setOptConsentAgreed(e.target.checked)}
                            className='!mt-2' />
                        {optConsentLine}
                    </label>}
                </div>}

                {/* reset and submit buttons container  */}

                <div className="flex flex-wrap w-full !my-2 justify-center gap-2 sm:gap-5">

                    {/* reset and submit buttons here */}
                    <button type="button"
                        className={`!bg-[${mainColor}] text-[${fieldBgColor}] px-6 py-3 rounded-lg`} onClick={resetAll}>Reset</button>

                    <button type="submit"
                        className={`!bg-[${mainColor}] text-[${fieldBgColor}] px-6 py-3 rounded-lg`}>{sendBtnText}</button>
                </div>

                {/* loading, error and success msg */}

                {(Object.keys(errors).length > 0) && (
                    <div className={`text-red-500 !py-2 text-xl font-medium text-center`}>Errors caught in the form, check the fields again</div>
                )}

                {loading && (
                    <div className={`text-gray-500 !py-2 text-xl font-medium text-center`}>Submitting...</div>
                )}

                {errorStatus && <div className={`text-red-500 !py-2 text-xl font-medium text-center flex flex-col`}>
                    <p>Something went wrong.</p>
                    <p>{errorStatus}</p>
                </div>}

                {success && (
                    <div className={`!py-2 text-xl font-medium text-center ${greetStyle}`}>{`${greetText}${greet}!`}</div>
                )}

            </form>
        </>
    )
}