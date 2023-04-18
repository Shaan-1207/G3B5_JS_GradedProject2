let username, password;
const loginForm = document.querySelector("#login-form");
const errorDiv = document.querySelector(".error-msg");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;

  // Check validation
  if (username === "admin" && password === "Admin@123") {
    // Store credentials in local storage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    // Redirect to Resume page
    window.open("resume.html", "_self")
  } else if (username != "admin" && password != "Admin@123") {
    errorDiv.textContent = "Invalid username and password.";
  } else if (username != "admin") {
    errorDiv.textContent = "Invalid username";
  } else if (password != "Admin@123") {
    errorDiv.textContent = "Invalid password";
  }
});

// Restrict user from going back to Login page
window.history.forward();