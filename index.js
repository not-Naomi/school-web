const navlinks = document.querySelector(".nav-links")
const hide =document.querySelector(".hide")
const show = document.querySelector(".show")

hide.addEventListener("click", ()=>{
    navlinks.style.right = "-220px"
})
show.addEventListener("click", ()=>{
    navlinks.style.right = "0px"
})