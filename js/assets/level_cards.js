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

let createLevelCards = function () {
    coursesArr.forEach((e, i) => {
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
        bubbleImg.setAttribute('src', './img/burbuja-rosa.png');
    
        const courseName = document.createElement('span');
    
        const courseDescriptionUList = document.createElement('ul');
    
        const cardImgBtn = document.createElement('div');
        cardImgBtn.classList.add('card__img-btn');
    
        const catImg = document.createElement('img');
        catImg.setAttribute('src', './img/gatito.png');
    
        const cardButton = document.createElement('button');
        cardButton.classList.add('btn');
    
        // cardContainer.appendChild(card);
        coursesCardContainer.insertAdjacentElement('beforebegin', card);
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
        cardButton.setAttribute('id', `courseBtn${i}`)
    
      
        const courseBtn0 = document.getElementById('courseBtn0');
        const coursesCardDescription = document.getElementById('coursesCardDescription');
        courseBtn0.addEventListener('click', ()=>{
            card.classList.toggle('display-none');
            coursesCardDescription.classList.toggle('display-none');
        })
    
    })
};



