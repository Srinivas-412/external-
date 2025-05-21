document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("error");

  if (username === "" || password === "") {
    errorMsg.textContent = "Username and Password cannot be empty.";
  } else {
    errorMsg.textContent = "";
    alert("Login successful!");
    // Proceed with login logic or redirect here
  }
});
