const content = document.getElementById('content') as HTMLDivElement;

const hero = document.createElement('div') as HTMLDivElement;
hero.classList.add('hero');
content.appendChild(hero);

const title = document.createElement('h1') as HTMLHeadingElement;
title.textContent = 'Restaurant Page';
hero.appendChild(title);

const descriptionText = document.createElement('p') as HTMLParagraphElement;
descriptionText.textContent = 'Welcome to our restaurant! We serve the best food in town.';
hero.appendChild(descriptionText);

const secondary = document.createElement('div') as HTMLDivElement;
secondary.classList.add('secondary');
content.appendChild(secondary);

const menuButton = document.getElementById('menu') as HTMLAnchorElement;

const menu = document.createElement('div') as HTMLDivElement;
menu.classList.add('menu');
secondary.appendChild(menu);

const menuTitle = document.createElement('h2') as HTMLHeadingElement;
menuTitle.textContent = 'Menu';
menu.appendChild(menuTitle);

const menuList = document.createElement('ul') as HTMLUListElement;
menu.appendChild(menuList);

const menuItems = [
  'Pizza',
  'Burger',
  'Pasta',
  'Salad',
  'Soup',
  'Dessert',
];

menuButton.addEventListener('click', () => {
  menu.classList.toggle('menu-active');
  menuButton.classList.toggle('menu-active');
  title.textContent = menu.classList.contains('menu-active') ? 'Menu' : 'Restaurant Page';
  descriptionText.textContent = menu.classList.contains('menu-active') ? 'Check out our menu!' : `Welcome
  to our restaurant! We serve the best food in town.`;
  menuButton.textContent = menu.classList.contains('menu-active') ? 'Close' : 'Menu';
})

menuItems.forEach((item) => {
  const menuItem = document.createElement('li') as HTMLLIElement;
  menuItem.textContent = item;
  menuList.appendChild(menuItem);
});

const tertiary = document.createElement('div') as HTMLDivElement;
tertiary.classList.add('tertiary');
content.appendChild(tertiary);

