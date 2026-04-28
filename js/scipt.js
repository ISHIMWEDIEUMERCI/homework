// File: script.js
// Description: Handles login actions, password toggle, and page navigation.

// Switch views
function switchView(currentId, nextId) {
    const current = document.getElementById(currentId);
    const next = document.getElementById(nextId);

    current.classList.add('exit');
    current.classList.remove('active');

    setTimeout(() => {
        current.classList.remove('exit');
        next.classList.add('active');
    }, 300);
}

// Toggle password
const eyeIcon = document.getElementById('eyeIcon');
const passInput = document.getElementById('passIn');

eyeIcon.addEventListener('click', () => {
    if (passInput.type === 'password') {
        passInput.type = 'text';
        eyeIcon.classList.replace('fa-eye-slash', 'fa-eye');
    } else {
        passInput.type = 'password';
        eyeIcon.classList.replace('fa-eye', 'fa-eye-slash');
    }
});

// Navigation links
document.getElementById('forgotLink').onclick = () =>
    switchView('login-view', 'reset-view');

document.getElementById('backToLogin').onclick = () =>
    switchView('reset-view', 'login-view');

// Login
document.getElementById('loginForm').onsubmit = (e) => {
    e.preventDefault();
    const user = document.getElementById('userIn').value;
    document.getElementById('name-tag').innerText = "Verified: " + user;
    switchView('login-view', 'welcome-view');
};

// Logout
document.getElementById('logoutBtn').onclick = () => location.reload();
