export const formatPhoneNumber = (phoneNumberString) => {
  console.log(phoneNumberString, "check number");
  var cleaned = ("" + phoneNumberString).replace(/\D/g, "");
  console.log(cleaned);
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  console.log(match, "check match");
  if (match) {
    return match[1] + "-" + match[2] + "-" + match[3];
  }
  return null;
};
