class Course {
	constructor(tittleOne, tittleTwo, img, paragraph, btnText) {
		this.tittleOne = tittleOne;
		this.tittleTwo = tittleTwo;
		this.img = img;
		this.paragraph = paragraph;
		this.btnText = btnText;
	}
}

const courses = [];

courses.push(
	new Course(
		'cursos',
		'de inglés general',
		'./img/colectivo-amarillo.png',
		'Están divididos en niveles desde Elemental hasta Avanzado, homologados con el MCER. Cada nivel se completa al finalizar dos cuatrimestres de estudio. Cursos disponibles: Inicial, A1, A2, B1, B2, C1.',
		'ver más'
	)
);
courses.push(
	new Course(
		'exámenes',
		'preparación de B2 First y C1 Advanced',
		'./img/cambridge.png',
		'En estos cursos brindamos todas las herramientas necesarias para poder rendir los exámenes internacionales de Cambridge, FIRST y AVANCED. La preparación se completa al cabo de dos cuatrimestres de estudio.',
		'ver más'
	)
);
courses.push(
	new Course(
		'talleres',
		'de conversación',
		'./img/talking-color.png',
		'Si estás buscando hablar con más fluidez, incorporar más vocabulario y poder practicar conversación en grupos reducidos, este espacio es para vos. A partir de nivel intermedio hasta avanzado.',
		'ver más'
	)
);
courses.push(
	new Course(
		'seminarios',
		'temáticos',
		'./img/avatar_ECDI_negativo_05.png',
		'Si tenés un nivel de inglés intermedio o superior, podés participar de nuestros seminarios temáticos donde vas a poder usar el idioma para aprender sobre distintos temas. Conocé nuestras propuestas',
		'ver más'
	)
);
courses.push(
	new Course(
		'clases',
		'individuales',
		'./img/laptop-verde.png',
		'¿Necesitás acomodar las clases a tus horarios? ¿Necesitás inglés con fines específicos? ¡Este es el espacio para vos!',
		'ver más'
	)
);

courses.push(
	new Course(
		'test',
		'de nivel',
		'img/gatito.png',
		'¿No sabés que curso es el mejor para vos? Realizá nuestro test de nivel así podemos asesorarte para lograr tus objetivos!',
		'test'
	)
);

const tag = ['h4', 'img', 'h5', 'p', 'button'];
const cardClasses = {
	container: 'courses__card-container',
	header: 'courses__card-header',
};

const coursesCardContainer = document.getElementById('coursesCardContainer');

courses.forEach((course, i) => {
	const card = document.createElement('div');
	card.classList.add('courses__card-container');
	coursesCardContainer.appendChild(card);
	const headerDiv = document.createElement('div');
	card.appendChild(headerDiv);
	headerDiv.setAttribute('id', `div${i}`);
	headerDiv.classList.add('courses__card-header');
	tag.forEach((tag, tagI) => {
		if (tag === 'h4') {
			const htmlTag = document.createElement(tag);
			htmlTag.innerText = course.tittleOne;
			headerDiv.appendChild(htmlTag);
		} else if (tag === 'img') {
			const htmlTag = document.createElement(tag);
			headerDiv.appendChild(htmlTag);
			htmlTag.src = course.img;
		} else if (tag === 'h5') {
			const htmlTag = document.createElement(tag);
			headerDiv.appendChild(htmlTag);
			htmlTag.innerText = course.tittleTwo;
		} else if (tag === 'p') {
			const htmlTag = document.createElement(tag);
			card.appendChild(htmlTag);
			htmlTag.innerText = course.paragraph;
		} else {
			const htmlTag = document.createElement(tag);
			card.appendChild(htmlTag);
			htmlTag.innerText = course.btnText;
			htmlTag.classList.add('btn');
			htmlTag.setAttribute('id', `coursesBtn${i}`);
			htmlTag.style.marginLeft;
		}
	});
});

const cardHeadersBG = document.getElementsByClassName('courses__card-container');
const cardHeadersBGColors = ['64,185,185', '251,232,0', '226,49,138', '64,185,185', '251,232,0', '226,49,138'];

for (let i = 0; i < cardHeadersBGColors.length; i++) {
	cardHeadersBG[
		i
		// ].style.backgroundImage = `linear-gradient(180deg, rgb(${cardHeadersBGColors[i]},1) 0% 25%, transparent 25% 100% )`;
	].style.backgroundImage = `linear-gradient(180deg, rgb(${cardHeadersBGColors[i]}, 1) 0%, rgb(${cardHeadersBGColors[i]},0.40) 25%,transparent 25% 100% )`;
}

const levelCourses = document.getElementById('coursesBtn0');
levelCourses.addEventListener('click', () => {
	window.location.href = './pages/cursos-ingles-general.html';
});

const cambridgeBtn = document.getElementById('coursesBtn1');
cambridgeBtn.addEventListener('click', () => {
	window.location.href = './pages/preparacion-examenes-internacionales.html';
});

const conversation = document.getElementById('coursesBtn2');
conversation.addEventListener('click', () => {
	window.location.href = './pages/talleres-de-conversacion-ingles.html';
});
const individual = document.getElementById('coursesBtn4');
individual.addEventListener('click', () => {
	window.location.href = './pages/clases-ingles-individuales.html';
});
const test = document.getElementById('coursesBtn5');
test.addEventListener('click', () => {
	window.location.href = './pages/test-de-nivel.html';
});
