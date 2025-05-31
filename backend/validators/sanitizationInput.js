const sanitizeInput = (input = "") => {
    return input
        .replace(/[<>]/g, "")        // Remove angle brackets to prevent HTML tags
        .replace(/[\u0000-\u001F\u007F]/g, "") // Remove control characters
        .replace(/\s+/g, " ")   // Replace multiple whitespaces with a single space
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, '');
    // Removes Whitespaces at the start and end, Commas, dots, slashes, and other non-alphanumeric characters, Any combination of them at the ends
}

module.exports = sanitizeInput;