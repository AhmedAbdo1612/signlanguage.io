let links = Array.from(document.querySelectorAll(".header .navBar ul li a"))


links.forEach( link => {
    link.addEventListener('click',e => {
        links.forEach( el => el.classList.remove('active'))
        e.target.classList.toggle('active')
    })
})