const coursesArr = [];
const descriptionsBeguiner = ['Aprendé Inglés desde cero.', 'Hablá desde el primer dia.', 'Grupos reducidos.'];
const descriptionsInter = ['Mejorá tu nivel de inglés.', 'Hablá desde el primer dia.', 'Grupos reducidos.'];
// const descriptionsAdv = ['Aprendé Inglés desde cero.', 'Hablá desde el primer dia.', 'Grupos reducidos.'];

class Level {
    constructor(tittle, level, names, description) {
        this.tittle = tittle;
        this.level = level;
        this.names = names;
        this.description = description; //array of strings
    }
}

coursesArr.push(new Level('nivel', 'principiante', 'a1/a2', descriptionsBeguiner));
coursesArr.push(new Level('nivel', 'intermedio', 'b1/b2', descriptionsInter));
coursesArr.push(new Level('nivel', 'avanzado', 'c1/c2', descriptionsInter));

console.log(coursesArr)

const cardContainer = document.getElementById('cardContainer');

// let createLevelCards = function () {
coursesArr.forEach((e, i) => {
    const card = document.createElement('div');
    card.classList.add(`card${i}`);

    const cardTittle = document.createElement('div');
    cardTittle.classList.add("card__tittle");

    const cardTittleOne = document.createElement('h4');
    cardTittleOne.classList.add("card__tittle--one");

    const cardTittleTwo = document.createElement('h5');
    cardTittleTwo.classList.add('card__tittle--two')

    const cardCourseNames = document.createElement('div');
    cardCourseNames.classList.add('card__course-names');

    const bubbleImg = document.createElement('img');
    bubbleImg.setAttribute('src', '../img/burbuja-rosa.png');

    const courseName = document.createElement('span');

    const courseDescriptionUList = document.createElement('ul');

    const cardImgBtn = document.createElement('div');
    cardImgBtn.classList.add('card__img-btn');

    const catImg = document.createElement('img');
    catImg.setAttribute('src', '../img/gatito.png');

    const cardButton = document.createElement('button');
    cardButton.classList.add('btn');

    // cardContainer.appendChild(card);
    const div = document.querySelectorAll('.courses__description--card');
    console.log(div)
    div[i].insertAdjacentElement('beforebegin', card);
    // coursesCardContainer.insertAdjacentElement('beforebegin', card);
    card.appendChild(cardTittle);
    cardTittle.appendChild(cardTittleOne).innerHTML = e.tittle;
    cardTittle.appendChild(cardTittleTwo).innerHTML = e.level;
    card.appendChild(cardCourseNames);
    cardCourseNames.appendChild(bubbleImg);
    cardCourseNames.appendChild(courseName).innerHTML = e.names;
    card.appendChild(courseDescriptionUList);
    e.description.forEach((el) => {
        const courseDescriptionItem = document.createElement('li');

        courseDescriptionUList.appendChild(courseDescriptionItem).innerHTML = el;
    });

    card.appendChild(cardImgBtn);
    cardImgBtn.appendChild(catImg);
    cardImgBtn.appendChild(cardButton).textContent = 'ver más';
    cardButton.setAttribute('id', `courseBtn${i}`);
});

const btn0 = document.getElementById('courseBtn0')
btn0.addEventListener('click', () => {
    const card0 = document.getElementsByClassName('card0');
    card0[0].classList.add('opacity1');
    setTimeout(() => card0[0].classList.add('display-none'), 1000);
    const descriprionCardA = document.getElementById('descriptionCardA')
    setTimeout(() => {
        descriprionCardA.classList.remove('display-none');
        descriprionCardA.classList.add('opacity0');


    }, 1000);
})

const btn1 = document.getElementById('courseBtn1');
const btn2 = document.getElementById('courseBtn2');

function showCourseDescription(index, descriptionCard) {
    
        const card0 = document.getElementsByClassName(`card${index}`);
        card0[0].classList.add('opacity1');
        setTimeout(() => card0[0].classList.add('display-none'), 1000);
        const descriprionCardA = document.getElementById(descriptionCard)
        setTimeout(() => {
            descriprionCardA.classList.remove('display-none');
            descriprionCardA.classList.add('opacity0');
        }, 1000);
}
btn1.addEventListener('click', ()=> {

    showCourseDescription('1', 'descriptionCardB')
})
btn2.addEventListener('click', ()=> {

    showCourseDescription('2', 'descriptionCardC')
})