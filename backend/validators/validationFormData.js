const sanitizeInput = require('./sanitizationInput');

const validationFormData = (values) => {
    const errors = {};
    const finalData = {};

    // First Name
    ['Name', 'MiddleName', 'LastName'].forEach(field => {
        const value = (values[field] || '').trim();
        if (!!value) {
            if (value !== 'empty') {
                if (value.length > 30) {
                    errors[field] = 'Must not exceed 30 characters';
                } else if (!/^[a-zA-Z\s]{2,}$/.test(value)) {
                    errors[field] = 'Name must contain only letters and (Min 2 characters) allowed';
                } else { finalData[field] = sanitizeInput(value); }
            } else { finalData[field] = sanitizeInput(value); }
        }
    });

    //Gender
    const genVal = (values.Gender || '').trim();
    if (!!genVal) {
        if (genVal !== 'empty') {
            if (!['MALE', 'FEMALE', 'OTHER'].includes(genVal)) {
                errors.Gender = `Invalid Gender`;
            } else { finalData.Gender = sanitizeInput(genVal); }
        } else { finalData.Gender = sanitizeInput(genVal); }
    }


    // Age
    const ageVal = (values.Age || '').trim();
    if (!!ageVal) {
        if (ageVal !== '0') {
            if (!/^\d{1,3}$/.test(ageVal) || ageVal < 15 || ageVal > 100) {
                errors.Age = `Invalid age, should be between 15-100`;
            } else { finalData.Age = sanitizeInput(ageVal); }
        } else { finalData.Age = sanitizeInput(ageVal); }
    }

    // Email
    const emailTrim = (values.Email || '').trim();
    if (!!emailTrim) {
        if (emailTrim !== 'empty') {
            if (emailTrim.length > 100) {
                errors.Email = 'Email must not exceed 100 characters.';
            } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailTrim)) {
                errors.Email = 'Invalid email format, (e.g. john@example.com)';
            } else { finalData.Email = sanitizeInput(emailTrim); }
        } else { finalData.Email = sanitizeInput(emailTrim); }
    }

    // Full Phone Number
    const countryCodeVal = ((values.FullPhone || '').trim()).split('-')[0];
    const phoneVal = ((values.FullPhone || '').trim()).split('-')[1];
    if (!!countryCodeVal) {
        if (values.FullPhone !== 'empty') {
            if (!/^\d{1,4}$/.test(countryCodeVal)) {
                errors.FullPhone = 'Invalid country code, should be (e.g. +1, +44)';
            } else if (!!phoneVal) {
                if (values.FullPhone !== 'empty') {
                    if (phoneVal.length > 15) {
                        errors.FullPhone = `Phone must be of max 15 digits`;
                    } else if (!/^\d{7,}$/.test(phoneVal)) {
                        errors.FullPhone = 'Invalid Phone, and must be of min 7 digits';
                    } else { finalData.FullPhone = sanitizeInput(values.FullPhone); }
                }
            }
        } else { finalData.FullPhone = sanitizeInput(values.FullPhone); }
    };

    // City, State
    ['City', 'State'].forEach(field => {
        const value = (values[field] || '').trim();
        if (!!value) {
            if (value !== 'empty') {
                if (value.length > 50) {
                    errors[field] = 'must not exceed 50 characters.';
                } else if (!/^[a-zA-Z\s]{2,}$/.test(value)) {
                    errors[field] = 'Only letters and spaces allowed, minimum 2 characters.';
                } else { finalData[field] = sanitizeInput(value); }
            } else { finalData[field] = sanitizeInput(value); }
        }
    });

    // Country
    const countryTrim = (values.Country || '').trim();
    if (!!countryTrim) {
        if (countryTrim !== 'empty') {
            if (countryTrim.length > 60) {
                errors.Country = 'Country name must not exceed 60 characters.';
            } else if (!/^[a-zA-Z\s]{2,}$/.test(countryTrim)) {
                errors.Country = 'Only letters and spaces allowed, minimum 2 characters.';
            } else { finalData.Country = sanitizeInput(countryTrim); }
        } else { finalData.Country = sanitizeInput(countryTrim); }
    }

    // Street Address
    const streetAddrVal = (values.StreetAddress || '').trim();
    if (!!streetAddrVal) {
        if (streetAddrVal !== 'empty') {
            if (streetAddrVal.length > 120) {
                errors.StreetAddress = 'Must not exceed 120 characters';
            }
            else if (!/^[A-Za-z0-9\s,.-]{5,}$/.test(streetAddrVal)) {
                errors.StreetAddress = 'Only Letters, numbers, spaces and (,.-) allowed and (Min 5 characters) allowed';
            } else { finalData.StreetAddress = sanitizeInput(streetAddrVal); }
        } else { finalData.StreetAddress = sanitizeInput(streetAddrVal); }
    }

    // House/Street
    const streetVal = (values.Street || '').trim();
    if (!!streetVal) {
        if (streetVal !== 'empty'){
            if (streetVal.length > 20) {
                errors.Street = 'Must not exceed 20 characters';
            }
            else if (!/^[A-Za-z0-9\s,.-]{2,}$/.test(streetVal)) {
                errors.Street = 'Only Letters, numbers, spaces and (,.-) allowed and (Min 2 characters) allowed';
            } else { finalData.Street = sanitizeInput(streetVal); }
        } else { finalData.Street = sanitizeInput(streetVal); }
    }

    // Landmark, Address line 1, Address Line 2
    ['Landmark', 'AddressLine1', 'AddressLine2'].forEach(field => {
        const value = (values[field] || '').trim();
        if (!!value) {
            if (value !== 'empty'){
                if (value.length > 100) {
                    errors[field] = 'Must not exceed 100 characters';
                }
                else if (!/^[A-Za-z0-9\s,.-]{5,}$/.test(value)) {
                    errors[field] = 'Only Letters, numbers, spaces and (,.-) allowed and (Min 5 characters) allowed';
                } else { finalData[field] = sanitizeInput(value); }
            } else { finalData[field] = sanitizeInput(value); }
        }
    });

    // PIN/ ZIP Code / Postal Code
    const pinVal = (values.PostalCode || '').trim();
    if (!!pinVal) {
        if (pinVal !== 'empty'){
            if (pinVal.length > 12) {
                errors.PostalCode = `Must not exceed 12 characters`;
            }
            else if (!/^[A-Za-z0-9\s\-]{3,}$/.test(pinVal)) {
                errors.PostalCode = 'Enter valid Pin Code (e.g. 123212/ 142, etc)';
            } else { finalData.PostalCode = sanitizeInput(pinVal); }
        } else { finalData.PostalCode = sanitizeInput(pinVal); }
    }

    // Subject
    const subjectVal = (values.Subject || '').trim();
    if (!!subjectVal) {
        if (subjectVal !== 'empty'){
            if (subjectVal.length > 50) {
                errors.Subject = 'Must not exceed 50 characters';
            }
            else if (!/^[A-Za-z0-9\s]{2,}$/.test(subjectVal)) {
                errors.Subject = 'Only letters, numbers, and spaces allowed';
            } else { finalData.Subject = sanitizeInput(subjectVal); }
        } else { finalData.Subject = sanitizeInput(subjectVal); }
    }

    // Message
    const msgVal = (values.Message || '').trim();
    if (!!msgVal) {
        if (msgVal !== 'empty') {
            if (msgVal.length > 200) {
                errors.Message = `Max 200 characters allowed`;
            } else if (!/^[A-Za-z0-9\s,.-]{2,}$/.test(msgVal)) {
                errors.Message = 'No special characters allowed!!!';
            } else { finalData.Message = sanitizeInput(msgVal); }
        } else { finalData.Message = sanitizeInput(msgVal); }
    }

    // add upload file validations later if needed

    // Consent
    if (values.Consent === "disagreed") {
        errors.Consent = 'You must check this to continue';
    } else { finalData.Consent = "agreed"; }

    //Optional Consent
    if (!!values.OptConsent) {
        finalData.OptConsent = sanitizeInput(values.OptConsent);
    }

    // // Username
    // if (!values.username) {
    //     errors.username = 'Username is required';
    // } else if (!/^[a-zA-Z0-9_-]{3,16}$/.test(values.username)) {
    //     errors.username = '3–16 characters, letters/numbers/_/- only';
    // }

    // // Password
    // if (!values.password) {
    //     errors.password = 'Password is required';
    // } else if (!/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(values.password)) {
    //     errors.password = 'Min 8 chars, 1 capital, 1 number';
    // }

    // // Website URL
    // if (values.website && !/^(https?:\/\/)?([\w-]+\.)+[\w]{2,}(\/\S*)?$/.test(values.website)) {
    //     errors.website = 'Invalid URL';
    // }

    return { errors, finalData };
}

module.exports = validationFormData;
