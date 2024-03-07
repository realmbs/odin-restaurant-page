var content = document.getElementById('content');
var hero = document.createElement('div');
hero.classList.add('hero');
content.appendChild(hero);
var title = document.createElement('h1');
title.textContent = 'Restaurant Page';
hero.appendChild(title);
var descriptionText = document.createElement('p');
descriptionText.textContent = 'Welcome to our restaurant! We serve the best food in town.';
hero.appendChild(descriptionText);
var secondary = document.createElement('div');
secondary.classList.add('secondary');
content.appendChild(secondary);
var menuButton = document.getElementById('menu');
var menu = document.createElement('div');
menu.classList.add('menu');
secondary.appendChild(menu);
var menuTitle = document.createElement('h2');
menuTitle.textContent = 'Menu';
menu.appendChild(menuTitle);
var menuList = document.createElement('ul');
menu.appendChild(menuList);
var menuItems = [
    'Pizza',
    'Burger',
    'Pasta',
    'Salad',
    'Soup',
    'Dessert',
];
menuButton.addEventListener('click', function () {
    menu.classList.toggle('menu-active');
    menuButton.classList.toggle('menu-active');
    title.textContent = menu.classList.contains('menu-active') ? 'Menu' : 'Restaurant Page';
    descriptionText.textContent = menu.classList.contains('menu-active') ? 'Check out our menu!' : "Welcome\n  to our restaurant! We serve the best food in town.";
    menuButton.textContent = menu.classList.contains('menu-active') ? 'Close' : 'Menu';
});
menuItems.forEach(function (item) {
    var menuItem = document.createElement('li');
    menuItem.textContent = item;
    menuList.appendChild(menuItem);
});
var tertiary = document.createElement('div');
tertiary.classList.add('tertiary');
content.appendChild(tertiary);
