// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    // Function to validate email format
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Form submission handler
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent form from refreshing the page

        // Get input values
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        // Validation
        if (!name || !email || !message) {
            alert('All fields are required. Please fill in all the details.');
            return;
        }

        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Simulate form submission (replace with your actual logic)
        alert('Your message has been successfully sent. Thank you for contacting us!');
        form.reset(); // Clear the form fields
    });
});
