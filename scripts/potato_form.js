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

    // Pre-established arrays for form options
    const reasons = [
        { id: "general-inquiry", label: "General Inquiry" },
        { id: "product-feedback", label: "Product Feedback" },
        { id: "partnership-opportunity", label: "Partnership Opportunity" },
        { id: "suggestions", label: "Suggestions or Improvements" }
    ];

    const referrals = [
        "Social Media",
        "Friend or Family",
        "Search Engine",
        "Company Website",
        "Other"
    ];

    const ratings = ["★", "★★", "★★★", "★★★★", "★★★★★"];

    // Populate "Reason for Contact" options  dynamically
    const reasonSelect = document.getElementById("reason");
    reasons.forEach(reason => {
        const option = document.createElement("option");
        option.value = reason.id;
        option.textContent = reason.label;
        reasonSelect.appendChild(option);
    });     



    // Populate "How did you hear about us?" options dynamically
    const referralOptionsContainer = document.getElementById("referral-options");
    referrals.forEach(referral => {
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "referral";
        input.value = referral.toLowerCase().replace(/ /g, "-");
        label.appendChild(input);
        label.appendChild(document.createTextNode(` ${referral}`));
        referralOptionsContainer.appendChild(label);
    });

    // Populate rating options dynamically
    const ratingOptionsContainer = document.getElementById("rating-options");
    ratings.forEach((rating, index) => {
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "rating";
        input.value = index + 1; // 1-based rating value
        label.textContent = rating;
        label.title = `${index + 1} star${index > 0 ? "s" : ""}`;
        label.prepend(input);
        ratingOptionsContainer.appendChild(label);
    });

    // Form validation and submission
    const contactForm = document.getElementById("potatoForm");
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent default form submission

        const fullName = document.getElementById("full-name").value.trim();
        const email = document.getElementById("email").value.trim();
        const reason = document.getElementById("reason").value;
        const message = document.getElementById("message").value.trim();

        if (!fullName || !email || !reason || !message) {
            alert("Please fill out all required fields.");
            return;
        }

        alert(`Thank you, ${fullName}! Your message has been received. We'll get back to you soon.`);
        contactForm.reset(); // Reset the form after successful submission
    });
});
