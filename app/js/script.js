const form = document.querySelector('.form-section-container');
const formButton = document.querySelectorAll('.formbutton-link');
const formExit = document.querySelectorAll('.formbuttonExit')

formButton.forEach((el) =>{
	el.addEventListener('click', (e) => {
	form.classList.add('open');
	event.preventDefault()
});
});

formExit.forEach((el) => {
	el.addEventListener('click', (e) => {
		form.classList.remove('open')
		event.preventDefault()
	})
})

