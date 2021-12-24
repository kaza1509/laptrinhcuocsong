var x = document.getElementsByTagName('a');
for(e of x) {
    e.setAttribute('title','Trang này của Nguyễn Tiền Khôi')
}

let bar = document.getElementById('bar')
let close = document.getElementById('close')
let header = document.getElementById('header')
let over = document.getElementById('overlay')
let logo = document.querySelector('header h1')

bar.addEventListener('click', (e) => {
    header.style.transform = 'translateX(0%)'
    header.style.transition = 'all .4s linear'
    over.style.display = 'block'
    logo.style.display = 'none'
})

close.addEventListener('click', (e) => {
    header.style.transform = 'translateX(-100%)'
    header.style.transition = 'all .4s linear'
    over.style.display = 'none'
    logo.style.display = 'block'

})

over.addEventListener('click', (e) => {
    header.style.transform = 'translateX(-100%)'
    header.style.transition = 'all .4s linear'
    over.style.display = 'none'
    logo.style.display = 'block'
})
