// dist/intl-phone-input.js
// גרסה ממוזערת (לשימוש ישיר)
// src/phone-input.js

export function createPhoneInput(inputElement, options = {}) {
  if (!inputElement) throw new Error("inputElement is required");

  const defaultOptions = {
    initialCountry: "il",
    separateDialCode: true,
    preferredCountries: ["il", "us", "gb"],
    localizedCountries: {
      il: "ישראל",
      us: "ארה\"ב",
      gb: "בריטניה"
    },
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js"
  };

  const iti = window.intlTelInput(inputElement, {
    ...defaultOptions,
    ...options
  });

  return {
    getNumber: () => iti.getNumber(),
    getInstance: () => iti,
    destroy: () => iti.destroy(),
  };
}
