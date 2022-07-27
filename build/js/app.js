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
class Slide {
    constructor(){}
    next(){
        const informative = document.querySelector('.informative');
        const hero = document.querySelector('.hero');
        const informativeContent = document.querySelector('.informative__content--model-show');
        let informativeNew = '';

        switch (informativeContent.dataset.id) {
            case '1':
                    hero.classList.remove('hero--model-1')
                    hero.classList.add('hero--model-2')

                    informativeNew = document.querySelector('[data-id="2"]')
                    informativeContent.classList.add('transition--to-left')

  
                    setTimeout(() => {

                        informativeNew.classList.remove('informative__content--model-hidden')
                        informativeNew.classList.add('informative__content--model-show')

                        informativeContent.classList.remove('informative__content--model-show','transition--to-left', 'transition--to-right')
            
                        informativeContent.classList.add('informative__content--model-hidden')
            
                    }, 1000) 



                break;
                case '2':
                    hero.classList.remove('hero--model-2')
                    hero.classList.add('hero--model-3')

                    informativeNew = document.querySelector('[data-id="3"]')

                    setTimeout(() => {

                        informativeNew.classList.remove('informative__content--model-hidden')
                        informativeNew.classList.add('informative__content--model-show')

                        informativeContent.classList.remove('informative__content--model-show','transition--to-left', 'transition--to-right')
            
                        informativeContent.classList.add('informative__content--model-hidden')
            
                    }, 1000) 

                    informativeContent.classList.add('transition--to-left')
                break;
                case '3':
                    hero.classList.remove('hero--model-3')
                    hero.classList.add('hero--model-1')
                    
                    informativeNew = document.querySelector('[data-id="1"]')

                    setTimeout(() => {

                        informativeNew.classList.remove('informative__content--model-hidden')
                        informativeNew.classList.add('informative__content--model-show')

                        informativeContent.classList.remove('informative__content--model-show','transition--to-left', 'transition--to-right')
            
                        informativeContent.classList.add('informative__content--model-hidden')
            
                    }, 1000) 
                    
                    informativeContent.classList.add('transition--to-left')
                break;
        }


    }
    prev(){
        const informative = document.querySelector('.informative');
        const hero = document.querySelector('.hero');
        const informativeContent = document.querySelector('.informative__content--model-show');
        let informativeNew = '';
      
        switch (informativeContent.dataset.id) {
            case '1':
              
                    hero.classList.remove('hero--model-1')
                    hero.classList.add('hero--model-3')
                    
                    informativeNew = document.querySelector('[data-id="3"]')
                informativeContent.classList.add('transition--to-right')

                    setTimeout(() => {
                        informativeNew.classList.remove('informative__content--model-hidden', 'transition--to-right')

                        informativeNew.classList.add('informative__content--model-show')

                        informativeContent.classList.remove('informative__content--model-show')
            
                        informativeContent.classList.add('informative__content--model-hidden')
            
                }, 1000) 

                break;
                case '2':
            
                    hero.classList.remove('hero--model-2')
                    hero.classList.add('hero--model-1')

                    informativeContent.classList.add('transition--to-right')
                    informativeNew = document.querySelector('[data-id="1"]')

                    setTimeout(() => {
                        informativeNew.classList.remove('informative__content--model-hidden', 'transition--to-right')
                        informativeNew.classList.add('informative__content--model-show')

                        informativeContent.classList.remove('informative__content--model-show')
                        informativeContent.classList.add('informative__content--model-hidden')
            
                    }, 1000) 
      

                break;
                case '3':
                  

                    hero.classList.remove('hero--model-3')
                    hero.classList.add('hero--model-2')
                    
                    informativeNew = document.querySelector('[data-id="2"]')
             
                    informativeContent.classList.add('transition--to-right')

                    setTimeout(() => {

                        informativeNew.classList.remove('informative__content--model-hidden', 'transition--to-right')

                        informativeNew.classList.add('informative__content--model-show')

                        informativeContent.classList.remove('informative__content--model-show')
            
                        informativeContent.classList.add('informative__content--model-hidden')
            
                    }, 1000) 

                break;
        }

    }
}


function eventListener () {
    const next = document.querySelector('#next');
    const prev = document.querySelector('#prev');
    const slide = new Slide()
    next.addEventListener('click', () => {
        slide.next();
    })
    prev.addEventListener('click', () => {
        slide.prev();
    })
}
eventListener()