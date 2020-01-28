const navSlide = ()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-list');
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active')
    })
}
navSlide();

// scroll indicator
document.addEventListener('scroll',(e)=>{
    document.getElementById('mouse-icon').classList.add('mouse-hide');
    
    if(window.scrollY == 0){
        setTimeout(()=>{
            document.getElementById('mouse-icon').classList.toggle('mouse-hide');},4000)
    }
})
