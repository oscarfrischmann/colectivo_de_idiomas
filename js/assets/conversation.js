const conversationTittleOne = document.querySelectorAll('.cambridge__card h2');
console.log(conversationTittleOne);

for (let i = 0; i < conversationTittleOne.length; i++) {
	if (i === 0) {
		conversationTittleOne[i].innerText = 'Nivel A2/B1';
	} else {
		conversationTittleOne[i].innerText = 'Nivel B2/C1';
	}
}
