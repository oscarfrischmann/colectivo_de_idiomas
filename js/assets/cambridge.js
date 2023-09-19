const b2PriceBtn = document.getElementById('b2PriceBtn');
const c1PriceBtn = document.getElementById('c1PriceBtn');

const cambWasap = document.getElementsByClassName('cambWasap');
for (button of cambWasap) {
	button.addEventListener('click', () =>
		window.open(
			' https://wa.me/5491132850921?text=Hola!%20Quisiera%20informaci%C3%B3n%20sobre%20los%20cursos%20de%20ingles.',
			'_blank'
		)
	);
}
