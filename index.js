import 'bootstrap';
import 'jquery';
import Swup from 'swup';
import AOS from 'aos';
import smoothscroll from 'smoothscroll-polyfill';
import './styles.scss';

// swup
const swup = new Swup();

// close mobile menu on link click
const navAttribute = () => {
    function myFunction(x) {
        if (x.matches) { // If media query matches
            let nav = document.querySelectorAll(".nav-item");
            let i;
            for (i = 0; i < nav.length; i++) {
                nav[i].setAttribute("data-toggle", "collapse");
                nav[i].setAttribute("data-target", ".navbar-collapse");
            }
        }
      }
      
      var x = window.matchMedia("(max-width: 992px)")
      myFunction(x) // Call listener function at run time
      x.addListener(myFunction) // Attach listener function on state changes
}

// copyright get current year
const copyright = () => {
    const d = new Date();
    document.querySelector("#copyright").innerHTML = "&copy; Warren Yen " + d.getFullYear();
}

// AOS scroll animation
const aosAnimate = () => {
    AOS.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-out-sine',
        delay: 0
    });
}

// scroll top on route change
const scrollTopPageChange = () => {
    window.scrollTo(0, 0);
}

// nav color change on scroll
const navScroll = () => {
    const myNav = document.getElementById('myNav');
    window.onscroll = function () { 
        if (window.scrollY >= 70) {
            myNav.classList.add("bg-white", "shadow");
        } 
        else {
            myNav.classList.remove("bg-white", "shadow");
        }
    }
};

// init all functions
navAttribute();
scrollTopPageChange();
copyright();
aosAnimate();
smoothscroll.polyfill();
navScroll();

// js reload on page change
swup.on('contentReplaced', () => {
    navAttribute();
    scrollTopPageChange();
    navScroll();
    copyright();
    aosAnimate();
    smoothscroll.polyfill();
});

