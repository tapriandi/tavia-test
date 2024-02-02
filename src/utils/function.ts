export const detectPhoneNumbers = (text: string) => {
  const phoneRegex = /\b\d{8,10}\b/g;
  return text.replace(phoneRegex, (match) => {
    return match.slice(0, 4) + "XXXX";
  });
};
