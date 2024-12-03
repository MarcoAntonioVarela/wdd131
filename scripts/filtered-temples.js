const year = document.querySelector("#year");
year.textContent = new Date().getFullYear();

const lastModified = document.getElementById("lastModif")
lastModified.textContent = document.lastModified;

// nav button toggle
const navButton = document.querySelector('.nav-button');
const navList = document.querySelector('.navi');
const logo = document.querySelector('.logo');

navButton.addEventListener('click', () => {
  navButton.classList.toggle('close');
  navList.classList.toggle('show');
  logo.classList.toggle('hidden');
}, false);

window.onresize = () => { if (window.innerWidth > 760) 
  navList.classList.remove('show'); 
  navButton.classList.remove('close');
  logo.classList.remove('hidden');
}

// temples
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Manila Philippines",
    location: "Quezon City, Philippines",
    dedicated: "1984, September, 25-27",
    area: 152460,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/_temp/029-Manila-Philippines-Temple.jpg"
  },
  {
    templeName: "Sapporo Japan",
    location: "Sapporo, Japan",
    dedicated: "2016, August, 21",
    area: 426888,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/sapporo-japan-temple/sapporo-japan-temple-3374-main.jpg"
  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27-29",
    area: 53143,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340-main.jpg"
  }
  // Add more temple objects here...
];

function displayTemples(templesArray=temples) {
  const cardsContainer = document.querySelector('.cards-container');
  cardsContainer.innerHTML = "";
  templesArray.forEach((temple) => {
    const templeCards = `<section class="cards">
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
                <img src="${temple.imageUrl}" alt="${temple.templeName} temple" loading = "lazy">
            </section>`;
            cardsContainer.innerHTML += templeCards;
  })
}
document.getElementById('home').addEventListener('click', () => {
  const title = document.querySelector('.title');
  title.innerHTML = 'Home'
  displayTemples(temples)
})

document.getElementById('old').addEventListener('click', () => {
  const title = document.querySelector('.title');
  const oldTemples = temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(',')[0].trim());
    return year < 1900;
  });
  title.innerHTML = 'Old'
  displayTemples(oldTemples)
})

document.getElementById('new').addEventListener('click', () => {
  const title = document.querySelector('.title');
  const newTemples = temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(',')[0].trim());
    return year > 2000;
  });
  title.innerHTML = 'New'
  displayTemples(newTemples)
})

document.getElementById('large').addEventListener('click', () => {
  const title = document.querySelector('.title');
  const largeTemples = temples.filter(temple => {
    const area = temple.area;
    return area > 90000;
  });
  title.innerHTML = 'Large'
  displayTemples(largeTemples)
})

document.getElementById('small').addEventListener('click', () => {
  const title = document.querySelector('.title');
  const smallTemples = temples.filter(temple => {
    const area = temple.area;
    return area < 10000;
  });
  title.innerHTML = 'Small'
  displayTemples(smallTemples)
})

displayTemples(temples)