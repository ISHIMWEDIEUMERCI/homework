// File: script.js
// Description: Handles login actions, password toggle, and page navigation.

// ==========================
// E-Trade Login System Logic
// ==========================

// Switch between pages (login, reset, welcome)
function switchView(currentId, nextId) {
    const current = document.getElementById(currentId);
    const next = document.getElementById(nextId);

    current.classList.add("exit");
    current.classList.remove("active");

    setTimeout(() => {
        current.classList.remove("exit");
        next.classList.add("active");
    }, 300);
}

// ==========================
// Password Toggle
// ==========================
const eyeIcon = document.getElementById("eyeIcon");
const passwordInput = document.getElementById("passIn");

if (eyeIcon) {
    eyeIcon.addEventListener("click", () => {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            eyeIcon.classList.remove("fa-eye-slash");
            eyeIcon.classList.add("fa-eye");
        } else {
            passwordInput.type = "password";
            eyeIcon.classList.remove("fa-eye");
            eyeIcon.classList.add("fa-eye-slash");
        }
    });
}

// ==========================
// Navigation Links
// ==========================
const forgotLink = document.getElementById("forgotLink");
const backToLogin = document.getElementById("backToLogin");

if (forgotLink) {
    forgotLink.addEventListener("click", () => {
        switchView("login-view", "reset-view");
    });
}

if (backToLogin) {
    backToLogin.addEventListener("click", () => {
        switchView("reset-view", "login-view");
    });
}

// ==========================
// Login System (fake validation)
// ==========================
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const username = document.getElementById("userIn").value.trim();
        const password = document.getElementById("passIn").value.trim();

        if (username === "" || password === "") {
            alert("Please fill in all fields!");
            return;
        }

        // Fake login check (you can change this later)
        if (username === "admin" && password === "1234") {
            document.getElementById("name-tag").innerText =
                "Welcome, " + username + "!";
            switchView("login-view", "welcome-view");
        } else {
            alert("Invalid username or password!");
        }
    });
}

// ==========================
// Logout Button
// ==========================
const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        location.reload();
    });
}
