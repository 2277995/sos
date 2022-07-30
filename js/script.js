const btn = document.getElementById('nav_btn')
const nav = document.getElementById('nav_mobile')
const navLink = document.querySelectorAll('#nav_a')
let toggle = false

btn.addEventListener('click', () => {
    if(toggle) {
        nav.classList.remove('open')
        btn.innerHTML = `<i class="fas fa-bars"></i>`
        toggle = false
    } else {
        nav.classList.add('open')
        btn.innerHTML = `<i class="fas fa-xmark"></i>`
        toggle = true
    }   
});

navLink.forEach(nav_a => {
    nav_a.addEventListener('click', () => {
        if(toggle) {
            nav.classList.remove('open')
            btn.innerHTML = `<i class="fas fa-bars"></i>`
            toggle = false
        } else {
            nav.classList.add('open')
            btn.innerHTML = `<i class="fas fa-xmark"></i>`
            toggle = true
        }  
    })
})