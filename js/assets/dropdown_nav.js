const navMenu = [
	'home',
	'quienes somos',
	'cursos',
	'precios',
	'freebies',
	'enlaces',
];
const moreCoursesDropdown = [
	'cursos de inglés general',
	'preparación de exámenes',
	'talleres de conversación',
	'seminarios temáticos',
	'clases individuales',
];
const navLinks = ['../index.html', '#aboutUs'];
const dropdownContainer = document.getElementById('dropdownContainer');
const dropdownIcon = document.getElementById('dropdownIcon');

dropdownIcon.addEventListener('click', () => {
	dropdownContainer.classList.toggle('dropdown__active');
});

navMenu.forEach((e, i) => {
	const a = document.createElement('a');
	const li = document.createElement('li');
	li.appendChild(a);
	const ul = document.querySelector('.dropdown__list');
	a.textContent = e;
	ul.appendChild(li);
	a.setAttribute('href', navLinks[i]);
	if (a.textContent === 'cursos') {
		li.setAttribute('id', 'coursesDropdown');
		a.setAttribute('href', '#');
	}
});

const coursesDropdown = document.getElementById('coursesDropdown');
coursesDropdown.addEventListener('click', () => {
	const control = document.querySelectorAll('.dropdown__list--more');
	if (control.length > 0) {
		const ulToRemove = document.querySelector('.dropdown__list ul');
		console.log(ulToRemove);
		const dropdownList = document.querySelector('.dropdown__list');
		dropdownList.removeChild(ulToRemove);
		dropdownList.classList.add('dropdown__list');
		dropdownList.classList.remove('dropdown__list-open');
	} else {
		const dropdownList = document.querySelector('.dropdown__list');
		dropdownList.classList.add('dropdown__list-open');
		const moreCoursesUL = document.createElement('ul');
		coursesDropdown.insertAdjacentElement('afterend', moreCoursesUL);
		moreCoursesDropdown.forEach((e, i) => {
			const moreCoursesItem = document.createElement('li');
			const link = document.createElement('a');
			link.textContent = e;
			link.setAttribute('href', `../index.html#div${i}`);
			moreCoursesUL.appendChild(moreCoursesItem);
			moreCoursesItem.appendChild(link);
			moreCoursesItem.classList.add('dropdown__list--more');
		});
	}
});
