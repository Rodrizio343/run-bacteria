export const getDate = (value, locale = 'en-GB') => {
  return new Date(value).toLocaleDateString(locale);
}