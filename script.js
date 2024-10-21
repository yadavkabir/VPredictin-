// JavaScript to toggle the wrapper_center visibility
const loginPopupBtn = document.querySelector('.btnLogin-popup'); // Button to trigger popup
const wrapperCenter = document.querySelector('.wrapper_center'); // Use class selector for wrapper
const closeIcons = document.querySelectorAll('.icon-close'); // Close icons

// When the "LOGIN" button is clicked, show the wrapper_center
loginPopupBtn.addEventListener('click', () => {
    wrapperCenter.style.display = 'flex'; // Show the wrapper
});

// Close the popup when any close icon is clicked
closeIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        wrapperCenter.style.display = 'none'; // Hide the wrapper
    });
});
















// // JavaScript for form switching and basic validation
// document.addEventListener("DOMContentLoaded", () => {
//     const loginForm = document.querySelector('.login');
//     const registerForm = document.querySelector('.register');
//     const loginLink = document.querySelector('.login-link');
//     const registerLink = document.querySelector('.register-link');
//     const btnLoginPopup = document.querySelector('.btnLogin-popup');
//     const closeIcons = document.querySelectorAll('.icon-close');

//     // Show login form popup
//     btnLoginPopup.addEventListener('click', () => {
//         loginForm.style.display = 'block';
//         registerForm.style.display = 'none';
//     });

//     // Switch to registration form
//     registerLink.addEventListener('click', () => {
//         loginForm.style.display = 'none';
//         registerForm.style.display = 'block';
//     });

//     // Switch to login form
//     loginLink.addEventListener('click', () => {
//         registerForm.style.display = 'none';
//         loginForm.style.display = 'block';
//     });

//     // Close form (both login and registration)
//     closeIcons.forEach(icon => {
//         icon.addEventListener('click', () => {
//             loginForm.style.display = 'none';
//             registerForm.style.display = 'none';
//         });
//     });

//     // Form submission and validation logic for Login and Registration

//     // Example: Login form submission
//     const loginSubmit = document.getElementById('loginForm');
//     loginSubmit.addEventListener('submit', function (e) {
//         e.preventDefault(); // Prevent default form submission

//         const email = document.getElementById('loginEmail').value;
//         const password = document.getElementById('loginPassword').value;

//         if (email === "" || password === "") {
//             alert("Please fill in all fields.");
//         } else {
//             alert("Login Successful!");
//             // Add your login logic here, e.g., send data to the server or use localStorage
//         }
//     });

//     // Example: Registration form submission
//     const registerSubmit = document.getElementById('registerForm');
//     registerSubmit.addEventListener('submit', function (e) {
//         e.preventDefault(); // Prevent default form submission

//         const username = document.getElementById('registerUsername').value;
//         const email = document.getElementById('registerEmail').value;
//         const password = document.getElementById('registerPassword').value;

//         if (username === "" || email === "" || password === "") {
//             alert("Please fill in all fields.");
//         } else {
//             alert("Registration Successful!");
//             // Add your registration logic here, e.g., save data to localStorage or send to server
//         }
//     });
// });
