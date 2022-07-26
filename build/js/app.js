const homeBurger = document.querySelector('.home__burger');

homeBurger.addEventListener('click', () => {
    const nav = document.querySelector('.nav')
    const homeContent = document.querySelector('.home__content');
    const homeBurger = document.querySelector('.home__burger');
    const homeBurgerSpan = document.querySelectorAll('.home__burger-span');
    const navAnchor = document.querySelectorAll('.nav__anchor');

    if(!homeBurger.classList.contains('home__burger--open')){

        homeContent.classList.add('home__content--open')
    
        homeBurger.classList.add('home__burger--open')
    
        nav.classList.add('nav--show');
        homeBurgerSpan.forEach(burger => {
            burger.classList.add('home__burger-span--open')
        })
        navAnchor.forEach(navA => {
            navA.classList.add('nav__anchor--open');
        })
    }else {
        homeContent.classList.remove('home__content--open')
    
        homeBurger.classList.remove('home__burger--open')
    
        nav.classList.remove('nav--show');
        homeBurgerSpan.forEach(burger => {
            burger.classList.remove('home__burger-span--open')
        })
        navAnchor.forEach(navA => {
            navA.classList.remove('nav__anchor--open');
        })
    }


})