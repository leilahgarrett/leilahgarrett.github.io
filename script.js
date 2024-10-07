document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Simple validation
    if (name && email) {
        document.getElementById('message').textContent = `Thank you for contacting us, ${name}!`;
        document.getElementById('contactForm').reset(); // Reset the form
    } else {
        document.getElementById('message').textContent = 'Please fill in all fields.';
    }
});
