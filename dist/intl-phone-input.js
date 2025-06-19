
(function (window) {
  function initIntlPhoneField(input, options = {}) {
    if (!window.intlTelInput) {
      console.error("intlTelInput is not loaded.");
      return;
    }
    const iti = window.intlTelInput(input, {
      initialCountry: options.initialCountry || "il",
      separateDialCode: true,
      preferredCountries: options.preferredCountries || ["il", "us", "gb"],
      localizedCountries: options.localizedCountries || {
        il: "ישראל",
        us: "ארה\"ב",
        gb: "בריטניה"
      },
      utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js"
    });
    input._iti = iti;
  }

  function getIntlPhoneNumber(input) {
    return input._iti ? input._iti.getNumber() : input.value;
  }

  function isIntlPhoneValid(input) {
    return input._iti ? input._iti.isValidNumber() : false;
  }

  window.initIntlPhoneField = initIntlPhoneField;
  window.getIntlPhoneNumber = getIntlPhoneNumber;
  window.isIntlPhoneValid = isIntlPhoneValid;
})(window);
