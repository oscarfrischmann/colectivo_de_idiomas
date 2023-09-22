const cambCourses = document.getElementsByClassName('cambridge__courses');
const cambUL = document.querySelectorAll('.cambridge__card ul');
const cambButtons = document.getElementsByClassName('cambridge__buttons');
const b2PriceBtn = document.getElementById('b2PriceBtn');
const c1PriceBtn = document.getElementById('c1PriceBtn');
const cambWasap = document.getElementsByClassName('cambWasap');
for (button of cambWasap) {
	button.addEventListener('click', () => openWasap());
}

const priceBtn = document.querySelectorAll('.btn.price');
for (let i = 0; i < priceBtn.length; i++) {
	priceBtn[i].addEventListener('click', () => {
		console.log(i);
		priceBtn[i].textContent = 'home';
		priceBtn[i].setAttribute('id', `changed${i}`);
		priceBtn[i].classList.remove('price');
		const changed = document.getElementById(`changed${i}`);
		console.log(changed);
		changed.addEventListener('click', () => {
			window.location = '../index.html';
		});
		cambUL[i].classList.add('opacity1');
		setTimeout(() => cambUL[i].classList.add('display-none'), 1000);
		setTimeout(() => {
			const cambPrice = document.createElement('div');
			cambPrice.classList.add('price');

			if (document.querySelector('.cambridge__card h2').textContent === 'B2 First') {
				console.log('WE ARE INNNN');
				cambPrice.innerHTML = `
	<div class="price-container">
			<p id="longB2"><span>1.30</span>hs por semana:</p>
			<div class="div">
				<h3>Pago Mensual</h3>
				<span class="span${i}">${cambCoursePrice}</span>
			</div>
			<div class="div">
				<h3>Pago Curso Completo</h3>
				<span class="span${i}">${cambCoursePriceFull}</span>
			</div>
			</div>
	<div class="checkbox">
			<span class="checkbox__span">Ver precio en USD</span>
			<input type="checkbox" id="showUsdPrices${i}">
	</div>
`;
			} else {
				cambPrice.innerHTML = `
	<div class="price-container">
			<p id="longB2"><span>1.30</span>hs por semana:</p>
			<div class="div">
				<h3>Pago Mensual</h3>
				<span class="span${i}">${conversationPrice}</span>
			</div>
			<div class="div">
				<h3>Pago Curso Completo</h3>
				<span class="span${i}">${conversationPriceFull}</span>
			</div>
			</div>
	<div class="checkbox">
			<span class="checkbox__span">Ver precio en USD</span>
			<input type="checkbox" id="showUsdPrices${i}">
	</div>
`;
			}

			cambUL[i].insertAdjacentElement('beforebegin', cambPrice);
			const checkbox = document.getElementById(`showUsdPrices${i}`);
			const usd = document.getElementsByClassName(`span${i}`);
			console.log(usd);
			checkbox.addEventListener('click', () => {
				if (checkbox.checked) {
					for (price of usd) {
						const usdPrice = document.getElementsByClassName(`span${i}`);

						if (
							document.querySelector('.cambridge__card h2').textContent ===
							'B2 First'
						) {
							usdPrice[0].textContent = cambCoursePriceUSD;
							usdPrice[1].textContent = cambCoursePriceUSDFull;
						} else {
							usdPrice[0].textContent = conversationPriceUSD;
							usdPrice[1].textContent = conversationPriceUSDFull;
						}
					}
				} else {
					for (price of usd) {
						const usdPrice = document.getElementsByClassName(`span${i}`);

						if (
							document.querySelector('.cambridge__card h2').textContent ===
							'B2 First'
						) {
							usdPrice[0].textContent = cambCoursePrice;
							usdPrice[1].textContent = cambCoursePriceFull;
						} else {
							usdPrice[0].textContent = conversationPrice;
							usdPrice[1].textContent = conversationPriceFull;
						}
					}
				}
			});
		}, 999);
	});
}
