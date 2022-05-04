const navMenu = document.querySelector(".nav__ul");
const navBtn = document.querySelector(".nav-btn");
const navLink = document.querySelector(".nav__a");

navBtn.addEventListener("click", () => {
    navMenu.classList.toggle("nav__menu-responsive");
    navBtn.classList.toggle("nav-btn__animacion");
    if (navMenu.classList.contains("nav__menu-responsive")) {
      navBtn.setAttribute("aria-label", "Cerrar menú");
    } else {
      navBtn.setAttribute("aria-label", "Abrir menú");
    }
  });

// FANCYBOX

$(document).ready(function() {
    /*
    *   Examples - images
    */

    $("a#example1").fancybox();

    $("a#example2").fancybox({
        'overlayShow'	: false,
        'transitionIn'	: 'elastic',
        'transitionOut'	: 'elastic'
    });

    $("a#example3").fancybox({
        'transitionIn'	: 'none',
        'transitionOut'	: 'none'	
    });

    $("a#example4").fancybox({
        'opacity'		: true,
        'overlayShow'	: false,
        'transitionIn'	: 'elastic',
        'transitionOut'	: 'none'
    });

    $("a#example5").fancybox();

    $("a#example6").fancybox({
        'titlePosition'		: 'outside',
        'overlayColor'		: '#000',
        'overlayOpacity'	: 0.9
    });

    $("a#example7").fancybox({
        'titlePosition'	: 'inside'
    });

    $("a#example8").fancybox({
        'titlePosition'	: 'over'
    });

    $("a[rel=example_group]").fancybox({
        'transitionIn'		: 'none',
        'transitionOut'		: 'none',
        'titlePosition' 	: 'over',
        'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
            return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
        }
    });

    /*
    *   Examples - various
    */

    $("#various1").fancybox({
        'titlePosition'		: 'inside',
        'transitionIn'		: 'none',
        'transitionOut'		: 'none'
    });

    $("#various2").fancybox();

    $("#various3").fancybox({
        'width'				: '75%',
        'height'			: '75%',
        'autoScale'			: false,
        'transitionIn'		: 'none',
        'transitionOut'		: 'none',
        'type'				: 'iframe'
    });

    $("#various4").fancybox({
        'padding'			: 0,
        'autoScale'			: false,
        'transitionIn'		: 'none',
        'transitionOut'		: 'none'
    });
});

// IntersectionObserver

const lazyImg1 = document.getElementById('lazy-img1');
const lazyImg2 = document.getElementById('lazy-img2');
const lazyImg3 = document.getElementById('lazy-img3');
const lazyImg4 = document.querySelector('.lazy-img4');
const lazyImg5 = document.getElementById('lazy-img5');
const lazyImg6 = document.querySelector('.lazy-img6');

const cargarImagen = (entradas, observador) => {
  entradas.forEach((entrada) => {
    if(entrada.isIntersecting){
      entrada.target.classList.add('lazy-img__visible')
    }
  });
}

const observador = new IntersectionObserver(cargarImagen, {
  root: null,
  rootMargin: '0px 0px',
  threshold: .8,
})

observador.observe(lazyImg1);
observador.observe(lazyImg2);
observador.observe(lazyImg3);
observador.observe(lazyImg4);
observador.observe(lazyImg5);
observador.observe(lazyImg6);

// DARK MODE
const darkModeBtn = document.querySelector(".darkModeBtn");
const darkModeBody = document.querySelector(".body")

darkModeBtn.addEventListener("click",()=>{
  darkModeBtn.classList.toggle("darkModeBtn-active");
  darkModeBody.classList.toggle("darkMode");
})