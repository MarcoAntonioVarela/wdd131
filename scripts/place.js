/*
    Author: Marco Varela
    Description: Script for enhancing interactivity and dynamic functionality on the Mexico information webpage. 
                 Includes features like event handling and updating elements based on user actions or data changes.
*/


const lastModified = document.querySelector("#last-modified");

const today = new Date();
const currentDay = today.getDate();
const currentMonth = today.getMonth() + 1; // Months are zero-based
const currentYear = today.getFullYear();

// Format the date with slashes
const formattedDate = `${currentDay}/${currentMonth}/${currentYear}`;

if (lastModified) lastModified.textContent = formattedDate;

// JavaScript for Mexico page

// Footer: Display current year and last modified date
document.querySelector("#last-modified").textContent = document.lastModified;

// Wind Chill Calculation
// JavaScript for Mexico page

// Footer: Display current year and last modified date
document.querySelector("#last-modified").textContent = document.lastModified;

// Function to calculate wind chill
function calculateWindChill(temp, windSpeed) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1);
}

// Function to update wind chill dynamically
function updateWeatherData(temp, windSpeed) {
    const windChillElement = document.querySelector(".weatherdetails li span:last-child");
    if (temp <= 10 && windSpeed > 4.8) {
        windChillElement.textContent = `${calculateWindChill(temp, windSpeed)}℃`;
    } else {
        windChillElement.textContent = "N/A";
    }
}

// Example: Dynamic data fetching simulation (replace with API later)
function fetchWeatherData() {
    // Simulated dynamic weather data
    const dynamicWeather = {
        temperature: 18, // °C
        windSpeed: 12 // km/h
    };
    updateWeatherData(dynamicWeather.temperature, dynamicWeather.windSpeed);
}

// Initialize dynamic updates
fetchWeatherData();
