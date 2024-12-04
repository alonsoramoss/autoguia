document.querySelectorAll("nav a, footer a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        const offset = window.innerWidth <= 768 ? 50 : 100;

        window.scrollTo({
            top: target.offsetTop - offset,
            behavior: "smooth"
        });
    });
});
