const coursesArr = [];
const descriptionsBeguiner = ['Aprendé Inglés desde cero.', 'Hablá desde el primer dia.', 'Grupos reducidos.'];
const descriptionsInter = ['Mejorá tu nivel de inglés.', 'Hablá desde el primer dia.', 'Grupos reducidos.'];
// const descriptionsAdv = ['Aprendé Inglés desde cero.', 'Hablá desde el primer dia.', 'Grupos reducidos.'];

class Course {
    constructor(tittle, level, names, description) {
        this.tittle = tittle;
        this.level = level;
        this.names = names;
        this.description = description; //array of strings
    }
}

coursesArr.push(new Course('nivel', 'principiante', 'a1, a2', descriptionsBeguiner));
coursesArr.push(new Course('nivel', 'intermedio', 'b1, b1+, b2', descriptionsInter));
console.log(coursesArr)

const cardContainer = document.getElementById('cardContainer');

const card = document.createElement('div');
card.classList.add("card");

const cardTittle = document.createElement('div');
cardTittle.classList.add("card__tittle");

const cardTittleOne = document.createElement('h4');
cardTittleOne.classList.add("card__tittle--one");

const cardTittleTwo = document.createElement('h5');
cardTittleTwo.classList.add('card__tittle--two')

const cardCourseNames = document.createElement('div');
cardCourseNames.classList.add('card__course-names');

const bubbleImg = document.createElement('img');
bubbleImg.setAttribute('src', '/img/burbuja-rosa.png');

const courseName = document.createElement('span');

const courseDescriptionUList = document.createElement('ul');
const courseDescriptionItem = document.createElement('li');

const cardImgBtn = document.createElement('div');
cardImgBtn.classList.add('card__img-btn');

const catImg = document.createElement('img');
catImg.setAttribute('src', 'img/gatito.png');

const cardButton = document.createElement('button');
cardButton.classList.add('btn');

coursesArr.forEach((e, i) => {
    cardContainer.appendChild(card);
    card.appendChild(cardTittle);
    cardTittle.appendChild(cardTittleOne);
    cardTittleOne.textContent = e.tittle;
    cardTittle.appendChild(cardTittleTwo);
    cardTittleTwo.textContent = e.level;
    card.appendChild(cardCourseNames);
    cardCourseNames.appendChild(bubbleImg);
    cardCourseNames.appendChild(courseName);
    courseName.textContent = e.names;
    card.appendChild(courseDescriptionUList);
    e.description.forEach((el, i) => {
        courseDescriptionItem.textContent = el;
        courseDescriptionUList.appendChild(courseDescriptionItem);
    })

    console.log(card)
    console.log('e', e)
    console.log('i', i)
})
