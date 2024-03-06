const navBar = document.getElementById('top__nav') as HTMLDivElement;
const content = document.getElementById('content') as HTMLDivElement;
const footer = document.getElementById('footer') as HTMLDivElement;

const hero = document.createElement('div') as HTMLDivElement;
hero.classList.add('hero');
hero.innerHTML = `
  <h1>Restaurant</h1>
  <p>lorem ipsum dolor sit amet</p>
  `;
content.appendChild(hero);

const menu = document.createElement('div') as HTMLDivElement;
menu.classList.add('menu');
menu.innerHTML = `
  <h2>Menu</h2>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
  `;
content.appendChild(menu);