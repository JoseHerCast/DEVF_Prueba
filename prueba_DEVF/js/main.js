/*
NASA API Key: H2ewGDmQUxJlgWniYjbdIMd16sqgayXcSLbu5dEZ
Astronomic picture of the day: https://api.nasa.gov/planetary/apod
Image and video library: -https://images-api.nasa.gov/asset/
                         -https://images-api.nasa.gov/metadata/
                         -https://images-api.nasa.gov/captions/

*/


/*This is an example about how to access NASA API APOD service*/
let srcList = {
    apodUrl: 'https://api.nasa.gov/planetary/apod?',
    key: 'api_key=H2ewGDmQUxJlgWniYjbdIMd16sqgayXcSLbu5dEZ'
}

let xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function () {

    /*If we have response from the server*/
    if (this.readyState == 4 && this.status == 200) {
        /*Saving data*/
        let data = JSON.parse(this.responseText);

        let date = data['date'];
        let explanation = data['explanation'];
        let hdurl = data['hdurl'];
        let media_type = data['media_type'];
        let service_version = data['service_version'];
        let title = data['title'];
        let url = data['url'];

        const apodImage = document.getElementById('apod-image');
        const apodTitle = document.getElementById('apod-title');
        const apodDescription = document.getElementById('apod-description');
        const apodDate = document.getElementById('apod-date');

        apodImage.src = hdurl;
        apodTitle.innerHTML = title;
        apodDescription.innerHTML = explanation;
        apodDate.innerHTML = date;

    }
}

/*Send our request for APOD*/
xmlhttp.open('GET', srcList.apodUrl + srcList.key, true);
xmlhttp.send();


/* Display menu*/

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* Show */

/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* show scrollup */
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    //when the scroll is higher than 350 viewport height
    if (this.scrollY >= 350)
        scrollUp.classList.add('show-scroll');
    else
        scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

const sections = document.querySelector('section[id]')

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href+=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href+=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset: true
})

sr.reveal('.home__title, .popular__container, .features__img, .featured__filters')
sr.reveal('.home__subtitle', { delay: 500 })
sr.reveal('.home__earth', { delay: 600 })
sr.reveal('.home__img', { delay: 800 })
sr.reveal('.home__planet-data', { delay: 900, interval: 100, origin: 'bottom' })
sr.reveal('.home__button', { delay: 1000, origin: 'bottom' })
sr.reveal('.about__group, .offer__data', { origin: 'left' })
sr.reveal('.about__data, .offer__img', { origin: 'left' })
sr.reveal('.features__map', { delay: 600, origin: 'bottom' })
sr.reveal('.features__card', { interval: 300 })
sr.reveal('.featured__card, .footer__content', { interval: 100 })


/* Hidden */

/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*Remove menu*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class for user experience
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*Change background header*/
function scrollHeader() {
    const header = document.getElementById('header')

    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') :
        header.classList.remove('scroll-header');

}
window.addEventListener('scroll', scrollHeader)

/*Popular swiper*/

var swiperPopular = new Swiper(".popular__container", {
    loop: true,
    spaceBetween: 24,
    slidesPerView: 'auto',
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
        },
        1024: {
            spaceBetween: 48,
        },
    },
});

var mixerFeatured = mixitup('.featured__content', {
    selectors: {
        target: '.featured__card'
    },
    animation: {
        duration: 300
    }
});

/*Link active featured*/

const linkFeatured = document.querySelectorAll('.featured__item');

function activeFeatured() {
    linkFeatured.forEach(l => l.classList.remove('active__featured'))
    this.classList.add('active__featured')
}
linkFeatured.forEach(l => l.addEventListener('click', activeFeatured))