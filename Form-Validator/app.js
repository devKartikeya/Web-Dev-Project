const userName = document.getElementById("name");
const email = document.getElementById("email");
const pwd = document.getElementById("password");
const phone = document.getElementById("phone");
const btn = document.getElementById("btn");

const validate = (element, regex, errorId) => {
  const errorSpan = document.getElementById(errorId);
  if (regex.test(element.value)) {
    errorSpan.style.display = "none";
    element.style.borderColor = "rgba(255, 255, 255, 0.2)";
    return true;
  } else {
    errorSpan.style.display = "block";
    element.style.borderColor = "#ff4d4d";
    return false;
  }
};

userName.addEventListener("blur", () => {
  validate(userName, /^[A-Z][a-zA-Z0-9]{2,15}$/, "nameDesc");
});

email.addEventListener("blur", () => {
  validate(email, /^[a-zA-Z0-9._%+-]+@gmail\.com$/, "emailDesc");
});

phone.addEventListener("blur", () => {
  validate(phone, /^[0-9]{10}$/, "phoneDesc");
});

pwd.addEventListener("blur", () => {
  // Requires length > 6 and at least one digit
  const hasNumber = /\d/;
  if (pwd.value.length >= 6 && hasNumber.test(pwd.value)) {
    document.getElementById("pwdDesc").style.display = "none";
    pwd.style.borderColor = "rgba(255, 255, 255, 0.2)";
  } else {
    document.getElementById("pwdDesc").style.display = "block";
    pwd.style.borderColor = "#ff4d4d";
  }
});

btn.addEventListener("click", () => {
  const isNameValid = /^[A-Z]/.test(userName.value);
  const isEmailValid = email.value.endsWith("@gmail.com");
  const isPhoneValid = phone.value.length === 10;
  const isPwdValid = pwd.value.length >= 6 && /\d/.test(pwd.value);

  if (isNameValid && isEmailValid && isPhoneValid && isPwdValid) {
    alert("🚀 Form Submitted Successfully!");
    // Resetting form
    [userName, email, phone, pwd].forEach(el => (el.value = ""));
  } else {
    alert("❌ Please correct the errors before submitting.");
  }
});

// Concepts used here ---
// DOM Model. .value, alert, Events -- blur, click, display, visibility
// innerHTML, Regular Expressions, debugging
