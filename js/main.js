

const sliderMain = new Swiper('.slider__main', {
	freeMode: true,
	mousewheel: true,
	parallax: true,
	centeredSlides: true,
	breakpoints: {
		0: {
			slidesPerView: 2.5,
			spaceBetween: 20
		},
		680: {
			slidesPerView: 3.5,
			spaceBetween: 60
		}

	}
})

const sliderBg = new Swiper('.slider__bg', {
	parallax: true,
	centeredSlides: true,
	slidesPerView: 3.5,
	spaceBetween: 60
})

sliderMain.controller.control = sliderBg;

document.querySelectorAll('.slider__item').forEach(item => {
	item.addEventListener('click', event => {
		item.classList.toggle('opened')
	})
})

let descr = document.querySelector('.description')
sliderMain.on('slideChange', e => {
	sliderMain.activeIndex > 0 ? descr.classList.add('hidden') : descr.classList.remove('hidden')
}) 
