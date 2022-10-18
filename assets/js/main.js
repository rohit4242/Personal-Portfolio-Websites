/*=============== SHOW MENU ===============*/
/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SWIPER PROJECTS ===============*/
let swiperProjects = new Swiper(".projects__container", {
    loop: true,
    spaceBetween: 24,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
        1200: {
          slidesPerView: 2,
          spaceBetween: -56,
        },
      },
  });

/*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestimonial = new Swiper(".testimonial__container", {
  grabCursor: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),
      contactEmail = document.getElementById('contact-email'),
      contactProject = document.getElementById('contact-project'),
      contactMessage = document.getElementById('contact-message');

const sendEmail = (e) =>{
  e.preventDefault();
  if(contactName.value ===  '' || contactEmail.value === '' || contactProject.value === ''){
    contactMessage.classList.remove('color-blue');
    contactMessage.classList.add('color-red');

    contactMessage.textContent = 'Write all the input fields';

  }else{
    emailjs.sendForm('service_bl80z7y','template_2vl1q8h','#contact-form','iUdMuBNRGw3avQhjn')
      .then(()=>{
          contactMessage.classList.add('color-blue');
          contactMessage.textContent = 'Message sent';
          setTimeout(() =>{
            contactMessage.textContent = '';
          },5000);
      },(error) =>{
        alert('OOPS! SOMETHING HAS FAILED....',error);
      });

    contactName.value = '';
    contactEmail.value = '';
    contactProject.value = '';

  } 
}
contactForm.addEventListener('submit',sendEmail);
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () =>{
  const scrollY = window.pageYOffset

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id'),
          sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
    
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      sectionsClass.classList.add('active-link')
    }
    else{
      sectionsClass.classList.remove('active-link')
    }
  
  })
}
window.addEventListener('scroll',scrollActive);

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
  const scrollUp  = document.getElementById('scroll-up');
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                      : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)

/*=============== DARK LIGHT THEME ===============*/ 


/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/

