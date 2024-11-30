/* 
Author: Marco Antonio Varela
Description: JavaScript file for "Temple Album" project. 
This file handles dynamic footer content and hamburger menu functionality.
*/

// Dynamic year and last modification
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Hamburger menu functionality
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');
    hamburger.textContent = menu.classList.contains('show') ? 'X' : '\u2630';
});
 
