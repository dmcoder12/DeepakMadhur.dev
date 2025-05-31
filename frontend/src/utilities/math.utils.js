export const calculateAgeFromDob = (dobString) => {
    const dob = new Date(dobString);
    const today = new Date();

    if (isNaN(dob.getTime())) return "Invalid date";

    let years = today.getFullYear() - dob.getFullYear();
    let pastBirthday = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());

    // If birthday hasn't occurred yet this year, subtract 1 year
    if (today < pastBirthday) years--;

    // Calculate total days difference
    const oneDay = 1000 * 60 * 60 * 24;
    const ageAtLastBirthday = new Date(today.getFullYear() - (today < pastBirthday ? 1 : 0), dob.getMonth(), dob.getDate());
    const daysSinceBirthday = Math.floor((today - ageAtLastBirthday) / oneDay);

    return `${years} yrs ${daysSinceBirthday} days`; 
    // returns age in years and days.
}
