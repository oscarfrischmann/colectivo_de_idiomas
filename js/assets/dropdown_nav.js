const navMenu = ['home', 'quienes somos', 'cursos', 'precios', 'freebies', 'enlaces'];
const navLinks = ['../index.html', '#aboutUs', '../index.html#coursesCardContainer']
const dropdownContainer = document.getElementById('dropdownContainer');
const dropdownIcon = document.getElementById('dropdownIcon');

dropdownIcon.addEventListener('click', () => {
    dropdownContainer.classList.toggle('dropdown__active')
})

navMenu.forEach((e, i) => {
    const a = document.createElement('a');
    const li = document.createElement('li');
    li.appendChild(a)
    const ul = document.querySelector('.dropdown__list');
    a.textContent = e;
    ul.appendChild(li)
    a.setAttribute('href', navLinks[i])
    if (a.textContent === 'cursos') {
        a.setAttribute('id', 'coursesDropdown')
    }
})

const coursesDropdown = document.getElementById('coursesDropdown');
