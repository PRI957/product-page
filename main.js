const hamburger = document.getElementById("hamburger");
const navlinks = document.getElementById("nav-links");
const row = document.getElementById("product-row");
    hamburger.addEventListener('click', () => {
        navlinks.classList.toggle('show')
    })
    document.getElementById('scrollLeft').onclick = () => {
        row.scrollBy({left: -200, behavior: 'smooth'})
    }
    document.getElementById('scrollRight').onclick = () => {
        row.scrollBy({left: 200, behavior: 'smooth'})
    }