/*
  Author: Marco Varela
  Purpose: This JS file controls the logic for filtering and displaying temples in my project.
*/


// Update the year and last modified date in the footer
const year = document.querySelector("#year");
year.textContent = new Date().getFullYear();

const lastModified = document.getElementById("lastModif");
lastModified.textContent = document.lastModified;

// Toggle navigation menu
const navButton = document.querySelector('.nav-button');
const navList = document.querySelector('.navi');
const logo = document.querySelector('.logo');

navButton.addEventListener('click', () => {
  navButton.classList.toggle('close');
  navList.classList.toggle('show');
  logo.classList.toggle('hidden');
}, false);

window.onresize = () => { 
  if (window.innerWidth > 760) {
    navList.classList.remove('show');
    navButton.classList.remove('close');
    logo.classList.remove('hidden');
  }
};

// All temple data
const temples = [
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December 2-4",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Mérida Mexico",
    location: "Mérida, Mexico",
    dedicated: "2000, July 8",
    area: 10700,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tampico-mexico/800x500/tampico-mexico-temple-lds-129825-wallpaper.jpg"
  },
  {
    templeName: "Monterrey Mexico",
    location: "Monterrey, Mexico",
    dedicated: "2002, April 28",
    area: 16500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/monterrey-mexico/800x500/monterrey-mexico-temple-lds-645907-wallpaper.jpg"
  },
  {
    templeName: "Tijuana Mexico",
    location: "Tijuana, Mexico",
    dedicated: "2015, December 13",
    area: 30500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tijuana-mexico/800x500/tijuana-mexico-temple-exterior-1603896-wallpaper.jpg"
  },
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  }
];

// Function to display temples dynamically
function displayTemples(templesArray = temples) {
  const cardsContainer = document.querySelector('.cards-container');
  cardsContainer.innerHTML = "";
  templesArray.forEach((temple) => {
    const templeCard = `<section class="cards">
                <h3 class="temple-name">${temple.templeName}</h3>
                <div class="temple-info">
                    <div class="detail_con">
                      <span class="label">Location:</span>
                      <span class="data">${temple.location}</span>
                    </div>
                    <div class="detail_con">
                      <span class="label">Dedicated:</span>
                      <span class="data">${temple.dedicated}</span>
                    </div>
                    <div class="detail_con">
                      <span class="label">Size:</span>
                      <span class="data">${temple.area} sq ft</span>
                    </div>
                </div>
                <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy">
            </section>`;
    cardsContainer.innerHTML += templeCard;
  });
}

// Filter and display temples based on menu options
document.getElementById('home').addEventListener('click', () => {
  document.querySelector('.title').textContent = 'Home';
  displayTemples(temples);
});

document.getElementById('old').addEventListener('click', () => {
  const oldTemples = temples.filter(temple => parseInt(temple.dedicated.split(',')[0]) < 1900);
  document.querySelector('.title').textContent = 'Old';
  displayTemples(oldTemples);
});

document.getElementById('new').addEventListener('click', () => {
  const newTemples = temples.filter(temple => parseInt(temple.dedicated.split(',')[0]) >= 2000);
  document.querySelector('.title').textContent = 'New';
  displayTemples(newTemples);
});

document.getElementById('large').addEventListener('click', () => {
  const largeTemples = temples.filter(temple => temple.area >= 90000);
  document.querySelector('.title').textContent = 'Large';
  displayTemples(largeTemples);
});

document.getElementById('small').addEventListener('click', () => {
  const smallTemples = temples.filter(temple => temple.area < 10000);
  document.querySelector('.title').textContent = 'Small';
  displayTemples(smallTemples);
});

// Initialize with all temples displayed
displayTemples(temples);
