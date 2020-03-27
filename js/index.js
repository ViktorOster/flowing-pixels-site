AOS.init();


//START NAVBAR
const navbar = document.querySelector(".navbar")
const navbarMobile = document.querySelector(".navbar-mobile")
const hamburger = document.querySelector(".hamburger")
//only if contact strip is present
const contactStrip = document.querySelector(".contact-strip")
const overlay = document.querySelector("#overlay")

function toggleMobileNav() {
    if (!navbarMobile.classList.contains("is-showing")) {
        navbarMobile.classList += " is-showing"
        hamburger.classList += " is-showing"
        overlay.classList += " is-showing"
    }
    else {
        navbarMobile.classList.remove("is-showing")
        hamburger.classList.remove("is-showing")
        overlay.classList.remove("is-showing")
    }
}
//close menu when presing overlay 
overlay.addEventListener("click", (e) => {
    toggleMobileNav()
})
//mobile nav
hamburger.addEventListener("click", (e) => {
    toggleMobileNav()
})

//show navbar when scrolling up, hide when scrolling down
let oldScrollPosY = 0;
window.addEventListener("scroll", () => {
    setTimeout(() => {
        oldScrollPosY = window.scrollY;
    }, 50);

    if (window.scrollY > oldScrollPosY) { //scrolled down, show/hide navbar, show scroll up btn
        navbar.classList.remove("is-scrolling-up")
        navbarMobile.classList.remove("is-scrolling-up")
        if (!navbar.classList.contains("is-scrolling-down")) {
            contactStrip.classList += " is-hidden"
            navbar.classList += " is-scrolling-down";
            navbarMobile.classList += " is-scrolling-down";
            //buttonScrollUp.classList += " is-showing";
        }
    }
    if (window.scrollY < oldScrollPosY) { //scrolled up, show navbar
        navbar.classList.remove("is-scrolling-down")
        if (!navbar.classList.contains("is-scrolling-up")) {
            navbar.classList += " is-scrolling-up";
            navbarMobile.classList += " is-scrolling-up";
        }
    }
    if (window.scrollY <= 16) { //reset navbar if at top
        contactStrip.classList.remove("is-hidden")
        navbar.classList.remove("is-scrolling-up")
        navbar.classList.remove("is-scrolling-down")
        navbarMobile.classList.remove("is-scrolling-up")
        navbarMobile.classList.remove("is-scrolling-down")
        //buttonScrollUp.classList.remove("is-showing")
    }
})

const navMobileLinks = document.querySelectorAll(".nav-mobile-link")
navMobileLinks.forEach(navMobileLink => {
    navMobileLink.addEventListener("click", () => {
        toggleMobileNav()
    })
})
//END NAVBAR

const scrollBtn = document.querySelector(".scroll-btn")
scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: window.innerHeight - 52,
        left: 0,
        behavior: 'smooth'
    });
})