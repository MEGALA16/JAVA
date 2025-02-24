// Signup Form
document.addEventListener("DOMContentLoaded", function() {
    const signupForm = document.getElementById("signupForm");
    if (signupForm) {
        signupForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const name = document.getElementById("signupName").value;
            const email = document.getElementById("signupEmail").value;
            const password = document.getElementById("signupPassword").value;

            if (name && email && password) {
                localStorage.setItem("userEmail", email);
                localStorage.setItem("userPassword", password);
                alert("Signup successful! Please login.");
                window.location.href = "index.html";
            }
        });
    }

    // Login Form
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const email = document.getElementById("loginEmail").value;
            const password = document.getElementById("loginPassword").value;
            const storedEmail = localStorage.getItem("userEmail");
            const storedPassword = localStorage.getItem("userPassword");

            if (email === storedEmail && password === storedPassword) {
                alert("Login successful!");
            } else {
                alert("Invalid email or password.");
            }
        });
    }
});