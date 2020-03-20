
window.onload = function() {
    window.scrollTo(0, 0);
}

window.onscroll = function () {
    if (window.pageYOffset > 100) {
        // adding a dark class to the navbar and remving the light class
        const nav = document.querySelector('.navbar');
        this.console.log(nav)
        nav.classList.remove('light');
        nav.classList.add('red');
    } else if (window.pageYOffset < 100) {
        const nav = document.querySelector('.navbar');
        nav.classList.remove('red');
        nav.classList.add('light');
    }
}

