document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("year");
    const lastModifiedSpan = document.getElementById("lastModified");

    // Set the footer's year and last modified date
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = document.lastModified;
    }

    // Example: Add event listener for Explore button
    const exploreButton = document.getElementById("exploreButton");
    if (exploreButton) {
        exploreButton.addEventListener("click", () => {
            alert("Start exploring Idaho Potatoes!");
        });
    }

    // Example: Form validation
    const contactForm = document.querySelector("form");
    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            if (!name || !email || !message) {
                event.preventDefault();
                alert("Please fill out all fields before submitting the form.");
            } else {
                alert("Thank you for reaching out! We will get back to you soon.");
            }
        });
    }
});
