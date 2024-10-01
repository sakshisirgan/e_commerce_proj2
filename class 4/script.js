document.getElementById('registrationForm').addEventListener('submit', (event) => {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    // Clear previous errors
    clearErrors();

    let isValid = true;

    // Validate Name
    if (name === '') {
        showError('nameError', 'Name is required');
        isValid = false;
    }

    // Validate Email
    if (!validateEmail(email)) {
        showError('emailError', 'Please enter a valid email');
        isValid = false;
    }

    // Validate Password
    if (!validatePassword(password)) {
        showError('passwordError', 'Password must be at least 8 characters and contain both letters and numbers');
        isValid = false;
    }

    // Validate Confirm Password
    if (password !== confirmPassword) {
        showError('confirmPasswordError', 'Passwords do not match');
        isValid = false;
    }

    if (isValid) {
        alert('Registration successful!');
        // You can add logic here to submit the form or process further
    }
});

// Function to validate email format
const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// Function to validate password (at least 8 characters, letters and numbers)
const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
};

// Function to display error message
const showError = (elementId, message) => {
    document.getElementById(elementId).innerText = message;
};

// Function to clear all errors
const clearErrors = () => {
    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('passwordError').innerText = '';
    document.getElementById('confirmPasswordError').innerText = '';
};
