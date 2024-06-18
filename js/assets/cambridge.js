import * as login from "./login.js";

let monthlyCamPay = 14000;
let courseCambPay = 120000;

const priceCamb = document.getElementById("pricesCamb");
priceCamb.innerHTML = `
<div class="courses__description--price">
<h2>Precios</h2>
	
	<div class="price-container">
		<p id="long0"><span>Pago mensual: <span>$ ${monthlyCamPay}</span></p>
	</div>
	<div class="price-container">
		<p id="long0"><span>Pago curso completo:</span> <span>$ ${courseCambPay}</span></p>
	</div>
	
	<div class="btn-container">
	
		<button class="btn" onclick="openWasap()">Escribinos</button>
	</div>
	<span class="courses__description--test">Escribinos para solicitar un test de nivel!</span>
</div>
	`;
console.log(login.cambScheduleDB2);

const schedule = document.getElementById("scheduleCamb");
login.cambScheduleDB2.cambSchedule.forEach((courses, i) => {
  schedule.innerHTML += `
	<div class="price-container">
	<span class="sc1">${courses.name} </span>
	<span class="sc2">${courses.date} </span>
	<ruby class="sc3">${courses.time}<rt>${courses.day}</rt> </ruby>
	</div>
	`;
});

// const cambCourses = document.getElementsByClassName('cambridge__courses');
// const cambUL = document.querySelectorAll('.cambridge__card ul');
// // const cambButtons = document.getElementsByClassName('cambridge__buttons');
// const b2PriceBtn = document.getElementById('b2PriceBtn');
// const c1PriceBtn = document.getElementById('c1PriceBtn');
// const cambWasap = document.getElementsByClassName('cambWasap');
// for (button of cambWasap) {
// 	button.addEventListener('click', () => openWasap());
// }
// console.log(document.querySelector('.cambridge__card h2').innerHTML);

// const priceBtn = document.querySelectorAll('.btn.price');
// for (let i = 0; i < priceBtn.length; i++) {
// 	priceBtn[i].addEventListener('click', () => {
// 		console.log(i);
// 		priceBtn[i].textContent = 'home';
// 		priceBtn[i].setAttribute('id', `changed${i}`);
// 		priceBtn[i].classList.remove('price');
// 		const changed = document.getElementById(`changed${i}`);
// 		console.log(changed);
// 		changed.addEventListener('click', () => {
// 			window.location = '../index.html';
// 		});
// 		cambUL[i].classList.add('opacity1');
// 		setTimeout(() => cambUL[i].classList.add('display-none'), 1000);
// 		setTimeout(() => {
// 			const cambPrice = document.createElement('div');
// 			cambPrice.classList.add('price');
// 			if (document.querySelector('.cambridge__card h2').innerHTML === 'B2 First<br> C1 Advanced') {
// 				console.log('WE ARE INNNN');
// 				cambPrice.innerHTML = `
// 	<div class="price-container">
// 			<p id="longB2"><span>1.30</span>hs por semana:</p>
// 			<div class="div">
// 				<h3>Pago Mensual</h3>
// 				<span class="span${i}">${cambCoursePrice}</span>
// 			</div>
// 			<div class="div">
// 				<h3>Pago Curso Completo</h3>
// 				<span class="span${i}">${cambCoursePriceFull}</span>
// 			</div>
// 			</div>

// `;
// 			} else {
// 				cambPrice.innerHTML = `
// 	<div class="price-container">
// 			<p id="longB2"><span>1.30</span>hs por semana:</p>
// 			<div class="div">
// 				<h3>Pago Mensual</h3>
// 				<span class="span${i}">${conversationPrice}</span>
// 			</div>
// 			<div class="div">
// 				<h3>Pago Curso Completo</h3>
// 				<span class="span${i}">${conversationPriceFull}</span>
// 			</div>
// 			</div>

// `;
// 			}

// 			cambUL[i].insertAdjacentElement('beforebegin', cambPrice);
// 			const usd = document.getElementsByClassName(`span${i}`);
// 			console.log(usd);
// 			checkbox.addEventListener('click', () => {
// 				if (checkbox.checked) {
// 					for (price of usd) {
// 						const usdPrice = document.getElementsByClassName(`span${i}`);

// 						if (document.querySelector('.cambridge__card h2').textContent === 'B2 First') {
// 							usdPrice[0].textContent = cambCoursePriceUSD;
// 							usdPrice[1].textContent = cambCoursePriceUSDFull;
// 						} else {
// 							usdPrice[0].textContent = conversationPriceUSD;
// 							usdPrice[1].textContent = conversationPriceUSDFull;
// 						}
// 					}
// 				} else {
// 					for (price of usd) {
// 						const usdPrice = document.getElementsByClassName(`span${i}`);

// 						if (document.querySelector('.cambridge__card h2').textContent === 'B2 First') {
// 							usdPrice[0].textContent = cambCoursePrice;
// 							usdPrice[1].textContent = cambCoursePriceFull;
// 						} else {
// 							usdPrice[0].textContent = conversationPrice;
// 							usdPrice[1].textContent = conversationPriceFull;
// 						}
// 					}
// 				}
// 			});
// 		}, 999);
// 	});
// }
