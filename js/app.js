document.querySelectorAll("nav a, footer a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        let offset;
        
        if (window.innerWidth <= 491) {
            offset = 60;
        } else if (window.innerWidth <= 768) {
            offset = 80;
        } else {
            offset = 110;
        }

        window.scrollTo({
            top: target.offsetTop - offset,
            behavior: "smooth"
        });
    });
});
