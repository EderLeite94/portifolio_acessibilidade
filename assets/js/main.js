/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});

/*SCROLL WORK*/
sr.reveal('.work__img',{interval: 200}); 

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200}); 

var tagAlvo = new Array('p'); //pega todas as tags p//
var tamanhos = new Array('70%','80%', '90%', '100%', '110%', '120%', '130%', '140%');
var tamanhoInicial = 3;
 
function mudaTamanho( idAlvo, acao )
{
    if (!document.getElementById) return

    var selecionados = null, tamanho = tamanhoInicial, i, j, tagsAlvo;

    if (acao == 0) tamanho= 3
    else tamanho += acao;

    if ( tamanho < 0 ) tamanho = 0;
    if ( tamanho > 7 ) tamanho = 7;

    tamanhoInicial = tamanho;

    if ( !( selecionados = document.getElementById( idAlvo ) ) ) {   
        selecionados = document.getElementsByTagName( idAlvo )[ 0 ];
    }

    selecionados.style.fontSize = tamanhos[ tamanho ];
    
    for ( i = 0; i < tagAlvo.length; i++ ) {
        tagsAlvo = selecionados.getElementsByTagName( tagAlvo[ i ] );
        for ( j = 0; j < tagsAlvo.length; j++ ) {
            tagsAlvo[ j ].style.fontSize = tamanhos[ tamanho ];
        }
    }
}




