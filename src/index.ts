const navBar = document.getElementById('top__nav') as HTMLDivElement;
const content = document.getElementById('content') as HTMLDivElement;
const footer = document.getElementById('footer') as HTMLDivElement;

const hero = document.createElement('div') as HTMLDivElement;
hero.classList.add('hero');
content.appendChild(hero);

const heroTitle = document.createElement('h1') as HTMLHeadingElement;
heroTitle.classList.add('hero__title');
heroTitle.textContent = 'Welcome to my website!';
hero.appendChild(heroTitle);

const heroSubtitle = document.createElement('p') as HTMLParagraphElement;
heroSubtitle.classList.add('hero__subtitle');
heroSubtitle.textContent = 'This is a simple website created using TypeScript.';
hero.appendChild(heroSubtitle);

const heroButton = document.createElement('button') as HTMLButtonElement;
heroButton.classList.add('hero__button');
heroButton.textContent = 'Learn More';
hero.appendChild(heroButton);

const hoursOfOperation = document.createElement('div') as HTMLDivElement;
hoursOfOperation.classList.add('hours__of__operation');
content.appendChild(hoursOfOperation);

const hoursTitle = document.createElement('h2') as HTMLHeadingElement;
hoursTitle.classList.add('hours__title');
hoursTitle.textContent = 'Hours';
hoursOfOperation.appendChild(hoursTitle);

const hoursList = document.createElement('ul') as HTMLUListElement;
hoursList.classList.add('hours__list');
hoursOfOperation.appendChild(hoursList);

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
days.forEach((day) => {
  const listItem = document.createElement('li') as HTMLLIElement;
  listItem.classList.add('hours__list__item');
  listItem.textContent = day;
  hoursList.appendChild(listItem);
});

const restaurantLocation = document.createElement('div') as HTMLDivElement;
restaurantLocation.classList.add('restaurant__location');
content.appendChild(restaurantLocation);

const locationTitle = document.createElement('h2') as HTMLHeadingElement;
locationTitle.classList.add('location__title');
locationTitle.textContent = '666 Spring St, New York, NY 10012';
restaurantLocation.appendChild(locationTitle);

const homeButton = document.getElementById('home') as HTMLAnchorElement;
const menuButton = document.getElementById('menu') as HTMLAnchorElement;
const contactButton = document.getElementById('contact') as HTMLAnchorElement;

homeButton.addEventListener('click', () => {
  heroTitle.textContent = 'Welcome to my website!';
  heroSubtitle.textContent = 'This is a simple website created using TypeScript.';
  hoursTitle.textContent = 'Hours';
  locationTitle.textContent = '666 Spring St, New York, NY 10012';
});
menuButton.addEventListener('click', () => {
  heroTitle.textContent = 'Menu';
  heroSubtitle.textContent = 'Check out our delicious menu!';
  hoursTitle.textContent = 'Menu';
  locationTitle.textContent = 'Menu';
});
contactButton.addEventListener('click', () => {
  heroTitle.textContent = 'Contact';
  heroSubtitle.textContent = 'Get in touch with us!';
  hoursTitle.textContent = 'Contact';
  locationTitle.textContent = 'Contact';
});