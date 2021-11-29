
// The icon menu targeting Using query selector to work if classes are going to be changed
const navbar = document.querySelector('#mobileMenu')
// Menu link targeting
const menuLinks = document.querySelector('.navbarMenu')

// Display mobile menu function by adding a class
const mobileMenu = () => {
    menuLinks.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}


navbar.addEventListener('click', mobileMenu);

// Doesen't work porperly, IDK why

// Active menu when scrolling

const highlightMenu = () =>{
    const element = document.querySelector ('highlight')
    const homeMenu = document.querySelector ('#home')
    const historyMenu = document.querySelector ('#history')
    const presentMenu = document.querySelector ('#presentDay')
    let scrollPosition = window.scrollY;


//Adding 'highlight' class to menu items

if(window.innerWidth > 960 && scrollPosition < 650){
    homeMenu.classList.add('highlight')
    historyMenu.classList.remove('highlight')
    presentMenu.classList.remove('highlight')
    return
    }
    else if (window.innerWidth > 960 && scrollPosition < 1400) {
        historyMenu.classList.add ('highlight')
        presentMenu.classList.remove ('highlight')
        return
    }

    if((element && window.innerWidth <960 && scrollPosition <650) || element){
        element.classList.remove ('highlight')
    }
}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);