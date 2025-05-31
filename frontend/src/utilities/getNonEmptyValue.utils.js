export const getNonEmptyValues = (obj) => {
  const result = {};

  for (const [key, value] of Object.entries(obj)) {
    if (
      value !== null &&
      value !== undefined &&
      value !== '' &&
      !(typeof value === 'string' && value.trim() === '')
    ) {
      result[key] =  value;
    }
  }

  return result;
}