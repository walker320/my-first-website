const navLinkEls = document.querySelectorAll('.nav_link');
const windowPathname = widows.location.Pathname;

navLinkEls.forEach(navLinkEl => {
    if (navLinkEl.href.includes(windowsPathname)) {
     navLinkEl.classList.add('active');  
    }
});