export function validateEmail() {
  const email = document.getElementById("email").value;
  var domain = email.substring(email.lastIndexOf("@") + 1);
  if (domain == "noroff.no" || domain == "stud.noroff.no") {
    return true;
  } else {
    alert("Please use a @noroff.no or @stud.noroff.no email address.");
    return false;
  }
}
