console.log(`Form is validating...`);

let userName = document.getElementById("name");
let email = document.getElementById("email");
let pwd = document.getElementById("password");
let phone = document.getElementById("phone");
let btn = document.getElementById('btn');

let nameDes = document.getElementById("nameDesc");
let emailDes = document.getElementById("emailDesc");
let pwdDes = document.getElementById("pwdDesc");
let phoneDes = document.getElementById("phoneDesc");

userName.addEventListener("blur", () => {
  const regex = /^[A-Z]/;
  let value = userName.value;

  if (regex.test(value)) {
    nameDes.style.display = "none";
  } else {
    nameDes.style.visibility = "visible";
    nameDes.style.marginTop = "8px";
    nameDes.innerHTML = "Username Not Valid !";
    userName.value = "";
  }
});

email.addEventListener("blur", () => {
  let emailValue = email.value;

  if (emailValue.endsWith("@gmail.com")) {
    emailDes.style.display = "none";
  } else {
    emailDes.style.visibility = "visible";
    emailDes.style.marginTop = "8px";
    emailDes.innerHTML = "Email Not Valid !";
    email.value = "";
  }
});

phone.addEventListener("blur", () => {
  let length = phone.value.length;

  if (length == 10) {
    phoneDes.style.display = "none";
  } else {
    phoneDes.style.visibility = "visible";
    phoneDes.style.marginTop = "8px";
    phoneDes.innerHTML = "Enter a valid Phone Number !";
    phone.value = "";
  }
});

pwd.addEventListener("blur", () => {
  let pwdValue = pwd.value;

  const numRegex = /[0-9]{1,10}/;
  if (pwdValue.length > 6 && numRegex.test(pwdValue)) {
    pwdDes.style.display = "none";
  } else {
    pwdDes.style.visibility = "visible";
    pwdDes.style.marginTop = "8px";
    pwdDes.innerHTML = "Password must contain atleast 1 Number !";
    password.value = "";
  }
});

btn.addEventListener("click", () => {
    console.log("Pudicherry");
    if (userName.value == "" || phone.value == "" || email.value == "" || pwd.value == "") {
        alert('Please fill all details !');
    }
    else {
        alert('Form Submitted Successfully');
        userName.value = "";
        phone.value = "";
        email.value = "";
        pwd.value = "";
    }
})

// Concepts used here ---
// DOM Model. .value, alert, Events -- blur, click, display, visibility
// innerHTML, Regular Expressions, debugging