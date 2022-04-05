const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll('.nav__item');
const footerYear = document.querySelector('.footer__year');
const offersBtn = document.querySelectorAll('.cars__card-info-btn');

const handleNav = () => {
	nav.classList.toggle('nav--active');

	allNavItems.forEach((item) => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav--active');
		});
	});
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};



offersBtn.forEach((item) => {
    item.addEventListener('click', () => {
        alert('Dobra już wystarczy :(');
    });
})

handleCurrentYear();
navBtn.addEventListener('click', handleNav);

