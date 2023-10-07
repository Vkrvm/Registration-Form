// Add an event listener for form submission
document.getElementById('form').addEventListener('submit', function(event) {
    const password1 = document.getElementById('password1').value;
    const password2 = document.getElementById('password2').value;
    const passwordError = document.getElementById('passwordError');

    if (password1 !== password2) {
        // Passwords do not match, prevent form submission
        event.preventDefault();
        document.getElementById('password2').classList.add('is-invalid');
        document.getElementById('passwordMismatchError').textContent = 'Passwords do not match.';
        passwordError.textContent = ''; // Clear any previous error message
    } else if (password1.length < 8) {
        // Password is too short, prevent form submission
        event.preventDefault();
        document.getElementById('password1').classList.add('is-invalid');
        document.getElementById('passwordMismatchError').textContent = '';
        passwordError.textContent = 'Password is too short.';
    } else {
        // Passwords match and have sufficient length, continue with form submission
        document.getElementById('password1').classList.remove('is-invalid');
        document.getElementById('password2').classList.remove('is-invalid');
        document.getElementById('passwordMismatchError').textContent = '';
        passwordError.textContent = 'Looks good!';
    }
});