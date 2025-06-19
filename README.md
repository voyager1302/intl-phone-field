# intl-phone-field 📞

ספרייה פשוטה להטמעת שדה טלפון בינלאומי בכל פרויקט HTML / Astro / JS.

## התקנה

השתמש ב-CDN:

```html
<!-- CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/voyager1302/intl-phone-field@latest/dist/intl-phone-field.css" />

<!-- JS -->
<script src="https://cdn.jsdelivr.net/gh/voyager1302/intl-phone-field@latest/dist/intl-phone-field.js" defer></script>

שימוש

הוסף input רגיל מסוג tel עם id="phone":
<input id="phone" type="tel" name="cellPhoneRaw" />

אתחל את השדה באמצעות הסקריפט הבא:

window.initIntlPhoneField(document.getElementById("phone"), {
  initialCountry: "il",
  preferredCountries: ["il", "us", "gb"],
  localizedCountries: {
    il: "ישראל",
    us: "ארה\"ב",
    gb: "בריטניה"
  }
});

פונקציות זמינות
	•	initIntlPhoneField(input, options) - אתחול השדה.
	•	getIntlPhoneNumber(input) - קבלת המספר בפורמט בינלאומי.
	•	isIntlPhoneValid(input) - בדיקה אם המספר תקני.
