/*
Author: Marco Varela
Description: This JavaScript file handles form functionality for my product review page. I dynamically populate product options, track user reviews, and display the last modified date for the webpage.
*/


document.addEventListener("DOMContentLoaded", () => {
    const lastModified = document.querySelector("#last-modified");
    if (lastModified) {
        const today = new Date();
        lastModified.textContent = new Intl.DateTimeFormat('en-GB', {
            day: 'numeric', month: 'numeric', year: 'numeric'
        }).format(today);
    }
    const products = [
        {
          id: "fc-1888",
          name: "flux capacitor",
          averagerating: 4.5
        },
        {
          id: "fc-2050",
          name: "power laces",
          averagerating: 4.7
        },
        {
          id: "fs-1987",
          name: "time circuits",
          averagerating: 3.5
        },
        {
          id: "ac-2000",
          name: "low voltage reactor",
          averagerating: 3.9
        },
        {
          id: "jj-1969",
          name: "warp equalizer",
          averagerating: 5.0
        }
      ];
    const productSelect = document.getElementById("product-name");
    
    // Populate the select options dynamically (excluding the placeholder)
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id; // Use the product id as the value
        option.textContent = product.name; // Display the product name
        productSelect.appendChild(option);
    });

    let reviewCount = parseInt(localStorage.getItem('reviewCount') || '0', 10);
    localStorage.setItem('reviewCount', reviewCount);

    document.querySelector('form').onsubmit = function (event) {
        event.preventDefault(); // Optional: Remove if default behavior is desired
        reviewCount++;
        localStorage.setItem('reviewCount', reviewCount);
        alert(`Review submitted! Total reviews: ${reviewCount}`);
        // Redirect to review.html manually
        window.location.href = "review.html";
    };
});
