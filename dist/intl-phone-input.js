// dist/intl-phone-input.js

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
    isValidNumber: () => iti.isValidNumber(),
    getInstance: () => iti,
    destroy: () => iti.destroy(),
  };
}

// הקצאות גלובליות ל-CDN
window.initIntlPhoneField = function (element, options) {
  const api = createPhoneInput(element, options);
  element._phoneAPI = api;
};

window.getIntlPhoneNumber = function (element) {
  return element._phoneAPI ? element._phoneAPI.getNumber() : "";
};

window.isIntlPhoneValid = function (element) {
  return element._phoneAPI ? element._phoneAPI.isValidNumber() : false;
};