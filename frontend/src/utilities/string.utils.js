/**
 * removeSpecialCharsFromEnds:
 * It removes: Whitespaces at the start and end,
 * Commas, dots, slashes, and other non-alphanumeric characters,
 * Any combination of them at the ends
 */


export const  trimAllSpaces = (str) => {
  return str.replace(/\s+/g, '');
}

export const removeSpecialCharsFromEnds = (sentence) => {
  return sentence.replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, '');
}

export const capitalizeFirstLetters = (sentence) => {
  return sentence
    .trim()
    .split(/\s+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

export const capitalizeAll = (str) => {
  return str.toUpperCase();
}

export const trimEnds = (str) => {
  return str.trim();
}

export const removeTrailingComma = (sentence) => {
  return sentence.replace(/,+\s*$/, '');
}



