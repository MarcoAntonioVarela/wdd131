/* Author: Marco Varela
   File: getdates.js
   Description: Dynamically adds the current year and last modified date to the footer. */

// Set current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Set last modified date
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;
