function userLogin() {
    var email = prompt("Please enter your Auburn University email address.");
    if (email != null && email.includes("auburn")) {
        window.open('resources.html', '_self');
    } else {
      alert("Invalid email address.");
    }
}
