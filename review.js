document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('feedback-form');
    const popup = document.getElementById('popup');
    const closePopup = document.querySelector('.popup-close');

    // Form Validation
    form.addEventListener('submit', (e) => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const feedback = document.getElementById('feedback').value;

        let valid = true;

        if (name.trim() === "") {
            document.getElementById('name-error').textContent = 'Name is required';
            valid = false;
        } else {
            document.getElementById('name-error').textContent = '';  // Clear the error message if input is valid
        }

        if (email.trim() === "") {
            document.getElementById('email-error').textContent = 'Email is required';
            valid = false;
        } else {
            document.getElementById('email-error').textContent = '';  // Clear the error message if input is valid
        }

        if (feedback.trim() === "") {
            document.getElementById('feedback-error').textContent = 'Feedback is required';
            valid = false;
        } else {
            document.getElementById('feedback-error').textContent = '';  // Clear the error message if input is valid
        }

        if (!valid) {
            e.preventDefault();  // Prevent form submission if validation fails
        } else {
            popup.style.display = 'block';  // Show popup on successful form submission
        }
    });

    // Close popup functionality
    closePopup.addEventListener('click', () => {
        popup.style.display = 'none';
    });
});
