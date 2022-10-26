const arrImages = [
	'img/01.jpg',
	'img/02.jpg',
	'img/03.jpg',
	'img/04.jpg',
	'img/05.jpg',
];

const eleSlider = document.querySelector('.slider');
const eleBtnLeft = document.querySelector('.btn-left');
const eleBtnRight = document.querySelector('.btn-right');

// creaare i tag immagine nell'html
for (let i = 0; i < arrImages.length; i++) {
	const eleImg = document.createElement('img');
	eleImg.src = arrImages[i];
	eleImg.classList.add('slider-img');

	if (i === 0) {
		eleImg.classList.add('active');
	}

	eleSlider.append(eleImg);
}
// document.querySelector('.slider-img').classList.add('active');

const listEleImg = document.querySelectorAll('.slider-img'); // non e' un array ma qualcosa di simile

let activeIndex = 0;

// aggiungere gli event listeners ai due bottoni
eleBtnRight.addEventListener('click', function () {
	if (activeIndex < listEleImg.length - 1) {
		eleBtnLeft.style.visibility = 'visible';

		// togliere la classe active dall'elemento attivo corrente
		listEleImg[activeIndex].classList.remove('active');

		// incrementare l'active index
		activeIndex++;

		// aggiungere la classe active all'elemento successivo
		listEleImg[activeIndex].classList.add('active');
	} else {
		eleBtnRight.style.visibility = 'hidden';
	}
});

eleBtnLeft.addEventListener('click', function () {
	if (activeIndex > 0) {
		eleBtnRight.style.visibility = 'visible';

		// togliere la classe active dall'elemento attivo corrente
		listEleImg[activeIndex].classList.remove('active');

		// incrementare l'active index
		activeIndex--;

		// aggiungere la classe active all'elemento successivo
		listEleImg[activeIndex].classList.add('active');
	} else {
		eleBtnLeft.style.visibility = 'hidden';
	}
});