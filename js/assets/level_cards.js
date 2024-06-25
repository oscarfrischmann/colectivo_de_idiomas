// import { courseScheduleDB, pricesDB } from "./login.js";
import * as login from './login.js';
const coursesArr = [];
const descriptionsBeguiner = [
	'Aprendé Inglés desde cero.',
	'Hablá desde el primer dia.',
	'Grupos reducidos.',
	'Material de estudio y práctica incluido.',
];
const descriptionsInter = [
	'Mejorá tu nivel de inglés.',
	'Foco en la comunicación.',
	'Grupos reducidos.',
	'Material de estudio y práctica incluido.',
];
const descriptionsAdv = [
	'Perfeccioná tu inglés.',
	'Desarrollá habilidades profesionales de conversación.',
	'Grupos reducidos.',
	'Material de estudio y práctica incluido.',
];

class Level {
	constructor(tittle, level, names, description) {
		this.tittle = tittle;
		this.level = level;
		this.names = names;
		this.description = description;
	}
}

coursesArr.push(new Level('nivel', 'principiante', 'a1/a2', descriptionsBeguiner));
coursesArr.push(new Level('nivel', 'intermedio', 'b1/b2', descriptionsInter));
coursesArr.push(new Level('nivel', 'avanzado', 'c1/c2', descriptionsAdv));

console.log(coursesArr);

const cardContainer = document.getElementById('cardContainer');

console.log(login.pricesDB);

const price = document.getElementById('prices');
price.innerHTML = `
<div class="courses__description--price">
<h2>Precios</h2>
	
	<div class="price-container">
		<p id="long0"><span>Pago mensual: <span>$ ${login.pricesDB.monthly}</span></p>
	</div>
	<div class="price-container">
		<p id="long0"><span>Pago cuatrimestral:</span> <span>$ ${login.pricesDB.course}</span></p>
	</div>
	
	<div class="btn-container">
	
		<button class="btn" onclick="openWasap()">Escribinos</button>
	</div>
	<span class="courses__description--test">Escribinos para solicitar un test de nivel!</span>
</div>
	`;
console.log(login.courseScheduleDB2);
const schedule = document.getElementById('coursesSchedule');
login.courseScheduleDB2.coursesSchedule.forEach((courses, i) => {
	schedule.innerHTML += `
	<div class="price-container">
	<span class="sc1">${courses.name} </span>
	<span class="sc2">${courses.date} </span>
	<ruby class="sc3">${courses.time}<rt>${courses.day}</rt> </ruby>
	</div>
	`;
});
