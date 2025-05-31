export const validateFormData = ({ values, minimumAge, maximumAge, maxPhoneLength, maxPin, msgMaxLength }) => {
    const errors = {};


    // First Name, Middle Name, Last Name
    // const nameRegex = new RegExp(`^[a-zA-Z\\s]{2,${maxNameLen}}$`); //example template for dynamic values
    ['firstName', 'middleName', 'lastName'].forEach(field => {
        const value = values[field].trim();
        if (!!value) {
            if (value.length > 30) {
                errors[field] = 'Must not exceed 30 characters';
            } else if (!/^[a-zA-Z\s]{2,}$/.test(value)) {
                errors[field] = 'Name must contain only letters and (Min 2 characters) allowed';
            }
        }
    });

    // Age
    // const ageVal = values.age.trim();
    // if (!!ageVal) {
    //     if (!/^\d{1,3}$/.test(ageVal) || ageVal < minimumAge || ageVal > maximumAge) {
    //         errors.age = `Invalid age, should be between ${minimumAge}-${maximumAge}`;
    //     }
    // }

    // Email
    const emailTrim = values.email.trim();
    if (!!emailTrim) {
        if (emailTrim.length > 100) {
            errors.email = 'Email must not exceed 100 characters.';
        } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailTrim)) {
            errors.email = 'Invalid email format, (e.g. john@example.com)';
        }
    }

    // Country Code
    const countryCodeVal = values.countryCode.trim();
    if (!!countryCodeVal) {
        if (!/^\d{1,4}$/.test(countryCodeVal)) {
            errors.countryCode = 'Invalid country code, should be (e.g. +1, +44)';
        }
    }

    // Phone
    const phoneVal = values.phone.trim();
    if (!!phoneVal) {
        if (phoneVal.length > maxPhoneLength) {
            errors.phone = `Phone must be of max ${maxPhoneLength} digits`;
        } else if (!/^\d{7,}$/.test(phoneVal)) {
            errors.phone = 'Invalid Phone, and must be of min 7 digits';
        }
    }

    // City, State
    ['city', 'state'].forEach(field => {
        const value = values[field].trim();
        if (!!value) {
            if (value.length > 50) {
                errors[field] = 'must not exceed 50 characters.';
            } else if (!/^[a-zA-Z\s]{2,}$/.test(value)) {
                errors[field] = 'Only letters and spaces allowed, minimum 2 characters.';
            }
        }
    });

    // Country
    const countryTrim = values.country.trim();
    if (!!countryTrim) {
        if (countryTrim.length > 60) {
            errors.country = 'Country name must not exceed 60 characters.';
        } else if (!/^[a-zA-Z\s]{2,}$/.test(countryTrim)) {
            errors.country = 'Only letters and spaces allowed, minimum 2 characters.';
        }
    }

    // Street Address
    const streetAddrVal = values.streetAddress.trim();
    if (!!streetAddrVal) {
        if (streetAddrVal.length > 120) {
            errors.streetAddress = 'Must not exceed 120 characters';
        }
        else if (!/^[A-Za-z0-9\s,.-]{5,}$/.test(streetAddrVal)) {
            errors.streetAddress = 'Only Letters, numbers, spaces and (,.-) allowed and (Min 5 characters) allowed';
        }
    }

    // House/Street
    const streetVal = values.street.trim();
    if (!!streetVal) {
        if (streetVal.length > 20) {
            errors.street = 'Must not exceed 20 characters';
        }
        else if (!/^[A-Za-z0-9\s,.-]{2,}$/.test(streetVal)) {
            errors.street = 'Only Letters, numbers, spaces and (,.-) allowed and (Min 2 characters) allowed';
        }
    }

    // Landmark, Address line 1, Address Line 2
    ['landmark', 'addressLine1', 'addressLine2'].forEach(field => {
        const value = values[field].trim();
        if (!!value) {
            if (value.length > 100) {
                errors[field] = 'Must not exceed 100 characters';
            }
            else if (!/^[A-Za-z0-9\s,.-]{5,}$/.test(value)) {
                errors[field] = 'Only Letters, numbers, spaces and (,.-) allowed and (Min 5 characters) allowed';
            }
        }
    });

    // PIN/ ZIP Code / Postal Code
    const pinVal = values.postalCode.trim();
    if (!!pinVal) {
        if (pinVal > maxPin) {
            errors.postalCode = `Must not exceed ${maxPin.length} characters`;
        }
        else if (!/^[A-Za-z0-9\s\-]{3,}$/.test(pinVal)) {
            errors.postalCode = 'Enter valid Pin Code (e.g. 123212/ 142, etc)';
        }
    }

    // Subject
    const subjectVal = values.subject.trim();
    if (!!subjectVal) {
        if (subjectVal.length > 50) {
            errors.subject = 'Must not exceed 50 characters';
        }
        else if (!/^[A-Za-z0-9\s]{2,}$/.test(subjectVal)) {
            errors.subject = 'Only letters, numbers, and spaces allowed';
        }
    }

    // Message
    const msgVal = values.message.trim();
    if (!!msgVal) {
        if (msgVal.length > msgMaxLength) {
            errors.message = `Max ${msgMaxLength} characters allowed`;
        } else if (!/^[A-Za-z0-9\s,.-]{2,}$/.test(msgVal)) {
            errors.message = 'No special characters allowed!!!';
        }
    }

    // add upload file validations later if needed

    // Consent
    if (values.consent === "disagreed") {
        errors.consent = 'You must check this to continue';
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

    return errors;
}
