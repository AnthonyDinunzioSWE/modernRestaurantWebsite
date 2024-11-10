// Select the hamburger button and the hamburger links container
const hamburgerBtn = document.getElementById('hamburger-btn');
const hamburgerLinks = document.querySelector('.hamburger-links');

// Add event listener to toggle the hamburger menu visibility
hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('active');
    hamburgerLinks.classList.toggle('active');
});

// Smooth Scroll to sections when navigation links are clicked
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior

        // Get the target section ID
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Scroll smoothly to the target section
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Optional: Form validation (basic) for the reserve and contact forms
document.getElementById('reserve-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const dateTime = document.getElementById('dateTime').value.trim();
    const people = document.getElementById('people').value.trim();

    // Basic form validation
    if (!name || !phone || !email || !dateTime || !people) {
        alert("Please fill out all fields.");
        return;
    }

    // If form is valid, show success message (or send data to server)
    alert("Reservation confirmed! We will contact you soon.");
    this.reset();  // Reset the form after submission
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const contactName = document.getElementById('name').value.trim();
    const contactPhone = document.getElementById('phone').value.trim();
    const contactEmail = document.getElementById('email').value.trim();
    const contactMessage = document.getElementById('message').value.trim();

    // Basic form validation
    if (!contactName || !contactPhone || !contactEmail || !contactMessage) {
        alert("Please fill out all fields.");
        return;
    }

    // If form is valid, show success message (or send data to server)
    alert("Thank you for reaching out! We'll get back to you soon.");
    this.reset();  // Reset the form after submission
});
