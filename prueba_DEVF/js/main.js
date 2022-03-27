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

xmlhttp.onreadystatechange=function(){

    /*If we have response from the server*/
    if(this.readyState == 4 && this.status == 200){
        /*Saving data*/
        let data=JSON.parse(this.responseText);

        let date=data['date'];
        let explanation=data['explanation'];
        let hdurl=data['hdurl'];
        let media_type=data['media_type'];
        let service_version=data['service_version'];
        let title=data['title'];
        let url=data['url'];

        const apodImage = document.getElementById('apod-image');
        const apodTitle=document.getElementById('apod-title');
        const apodDescription=document.getElementById('apod-description');
        const apodDate=document.getElementById('apod-date');

        apodImage.src=hdurl;
        apodTitle.innerHTML=title;
        apodDescription.innerHTML=explanation;
        apodDate.innerHTML=date;
        
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
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Hidden */

/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*Remove menu*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class for user experience
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*Change background header*/
function scrollHeader(){
    const header = document.getElementById('header')
    
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50? header.classList.add('scroll-header'):
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

const linkFeatured=document.querySelectorAll('.featured__item');

function activeFeatured(){
    linkFeatured.forEach(l=>l.classList.remove('active__featured'))
    this.classList.add('active__featured')
}
linkFeatured.forEach(l=>l.addEventListener('click', activeFeatured))