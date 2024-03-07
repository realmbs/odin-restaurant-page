const tabs = [...document.querySelectorAll('#top__nav ul li a')] as HTMLAnchorElement[];

const mainContent = document.getElementById('content') as HTMLDivElement;

tabs.forEach(tab => {
  tab.addEventListener('click', (e) => {
    e.preventDefault();

    tabs.forEach(tab => tab.classList.remove('active'));

    tab.classList.add('active');

    const href = tab.getAttribute('href') as string;
    fetch(href.slice(1))
      .then(response => response.text())
      .then(html => mainContent.innerHTML = html)
      .catch(error => console.error(error));
  }
})