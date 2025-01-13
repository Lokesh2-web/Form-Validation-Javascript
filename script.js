function validateForm(){
  const name = document.getElementById("name").value;
  const addr = document.getElementById("address").value;
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  const sub = document.getElementById("subject").value;
  const agree = document.getElementById("agree").checked;

  const nameErr = document.getElementById("name-error");
  const addrErr = document.getElementById("address-error");
  const emailErr = document.getElementById("email-error");
  const passErr = document.getElementById("password-error");
  const subErr = document.getElementById("subject-error");
  const agreeErr = document.getElementById("agree-error");

  nameErr.textContent = "";
  addrErr.textContent = "";
  emailErr.textContent = "";
  passErr.textContent = "";
  subErr.textContent = "";
  agreeErr.textContent = "";

  let isvalid = true;

  if(name === "" || /\d/.test(name)){
    nameErr.textContent = "Please Enter a Valid Name";
    isvalid = false;
  }
  if (addr === "") {
    addrErr.textContent = "Please enter your address.";
    isValid = false;
  }
  if(email=== ""|| !email.includes("@") ||!email.includes(".")){
    emailErr.textContent = "Please Enter Valid Email Address";
    isvalid = false;
  }
  if (pass === "" || pass.length < 6) {
    passErr.textContent = "Please enter a password with at least 6 characters.";
    isValid = false;
  }
  if (sub === "") {
    subErr.textContent = "Please select your course.";
    isValid = false;
  }
  if (!agree) {
    agreeErr.textContent = "Please agree to the above information.";
    isValid = false;
  }

  if(isvalid){
    return true;
  }
  else{
    return false;
  }
}
function resetErrors() {
  document.getElementById("name-error").textContent = "";
  document.getElementById("address-error").textContent = "";
  document.getElementById("email-error").textContent = "";
  document.getElementById("password-error").textContent = "";
  document.getElementById("subject-error").textContent = "";
  document.getElementById("agree-error").textContent = "";
}
