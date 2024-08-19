function openNavbar() {
    document.getElementById("sideNavigationBar")
        .style.width = "30%";
}
function closeNavbar() {
    document.getElementById("sideNavigationBar")
         
        .style.opacity ="0";
}
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
