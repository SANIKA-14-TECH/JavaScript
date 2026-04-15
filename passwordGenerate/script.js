function generatePassword() {

  let length = document.getElementById("length").value;

  let chars = "abcdefghijklmnopqrstuvwxyz";

  if (document.getElementById("uppercase").checked) {
    chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (document.getElementById("numbers").checked) {
    chars += "0123456789";
  }

  if (document.getElementById("symbols").checked) {
    chars += "!@#$%&*";
  }

  if (document.getElementById("exclude").checked) {
    chars = chars.replace(/[lI10O]/g, "");
  }

  let password = "";

  for (let i = 0; i < length; i++) {
    let random = Math.floor(Math.random() * chars.length);
    password += chars[random];
  }

  document.getElementById("result").value = password;

  checkStrength(password);
}

function togglePassword() {
  let field = document.getElementById("result");

  if (field.type === "password") {
    field.type = "text";
  } else {
    field.type = "password";
  }
}

function copyPassword() {
  let field = document.getElementById("result");
  field.select();
  document.execCommand("copy");
  alert("Copied!");
}

function checkStrength(password) {

  let bar = document.getElementById("bar");
  let text = document.getElementById("text");

  let strength = 0;

  if (password.length >= 8) strength++;
  if (password.match(/[A-Z]/)) strength++;
  if (password.match(/[0-9]/)) strength++;
  if (password.match(/[^A-Za-z0-9]/)) strength++;

  let width = strength * 25;
  bar.style.width = width + "%";

  if (strength == 1) {
    bar.className = "progress-bar bg-danger";
    text.innerHTML = "Weak";
  }
  else if (strength == 2) {
    bar.className = "progress-bar bg-warning";
    text.innerHTML = "Medium";
  }
  else if (strength == 3) {
    bar.className = "progress-bar bg-info";
    text.innerHTML = "Strong";
  }
  else if (strength == 4) {
    bar.className = "progress-bar bg-success";
    text.innerHTML = "Very Strong";
  }
}