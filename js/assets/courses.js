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

courses.push(new Course('cursos', 'de inglés general', './img/colectivo.amarillo.png', 'Están divididos en niveles desde Elemental hasta Avanzado, homologados con el MCER. Cada nivel se completa al finalizar dos cuatrimestres de estudio.', 'ver más'));
courses.push(new Course('cambbridge', 'preparación de exámenes', './img/cambridge.png', 'En estos cursos brindamos todas las herramientas necesarias para poder rendir los exámenes internacionales de Cambridge, FIRST y AVANCED. La preparación se completa al cabo de dos cuatrimestres de estudio. Es necesaria una evaluación de nivel previa.', 'ver más'));
courses.push(new Course('talleres', 'de conversación', './img/talking-color.png', 'Si estás buscando hablar con más fluidez, incorporar más vocabulario y poder practicar conversación en grupos reducidos, este espacio es para vos. A partir de nivel pre-intermedio hasta avanzado.', 'ver más'));
courses.push(new Course('seminarios', 'temáticos', './img/four-faces-color.png', 'Si tenés un nivel de inglés intermedio o superior, podés participar de nuestros seminarios temáticos donde vas a poder usar el idioma para aprender sobre distintos temas. Algunas de nuestras propuestas son: inglés para viajes, inglés para el trabajo, astrología en inglés y amantes del cine.', 'ver más'));
courses.push(new Course('clases', 'individuales', './img/laptop-verde.png', '¿Necesitás acomodar las clases a tus horarios? ¿Necesitás inglés con fines específicos? ¡Este es el espacio para vos!', 'ver más'));

console.log(courses);
const tag = ['h4', 'img', 'h5', 'p', 'button']
const cardClasses = {
    container: 'courses__card-container',
    header: 'courses__card-header'
}

const coursesCardContainer = document.getElementById('coursesCardContainer');

courses.forEach((course, i) => {
    const card = document.createElement('div');
    card.classList.add('courses__card-container');
    coursesCardContainer.appendChild(card);
    const headerDiv = document.createElement('div');
    card.appendChild(headerDiv);
    headerDiv.setAttribute('id', `div${i}`)
    headerDiv.classList.add('courses__card-header');

    tag.forEach((tag, tagI) => {
        if (tag === 'h4' || tag === 'img' || tag === 'h5') {
            for (const el in course) {
                console.log(el)
            }
            const htmlTag = document.createElement(tag);
            headerDiv.appendChild(htmlTag);
            console.log(course);
        } else {
            const htmlTag = document.createElement(tag);
            card.appendChild(htmlTag)
        }
    })
})





