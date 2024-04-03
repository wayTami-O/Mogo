window.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector("#header"),
        intro = document.querySelector("#intro"),
        introH = intro.offsetHeight,
        scrollOffset = window.pageYOffset;
    checkScroll(scrollOffset);
    window.addEventListener("scroll", function() {
        scrollOffset = window.pageYOffset;
        checkScroll(scrollOffset);
    });
    function checkScroll(scrollOffset) {
        if (scrollOffset >= introH) {
            header.classList.add("fixed");
        } else {
            header.classList.remove("fixed");
        }
    }
    
    var collapseLinks = document.querySelectorAll("[data-collapse]");
    collapseLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        link.classList.toggle("active");
    });
    });
});