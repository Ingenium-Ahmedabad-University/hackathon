
// timeline 
document.getElementById('14th').addEventListener('click',() =>{
    document.getElementById('14th list').classList.remove('hidden');
    document.getElementById('15th list').classList.add('hidden');
});

document.getElementById('15th').addEventListener('click',() =>{
    document.getElementById('15th list').classList.remove('hidden');
    document.getElementById('14th list').classList.add('hidden');
});

// navigation
document.getElementById('clear').addEventListener('click',()=>{
    document.getElementById('nav-list').classList.add('nav-hide');
})
document.getElementById('menu-icon').addEventListener('click',()=>{
    document.getElementById('nav-list').classList.remove('nav-hide');
})
let ll = document.getElementsByClassName('link')

for (let link of ll) {
    link.addEventListener('click',()=>{
    document.getElementById('nav-list').classList.add('nav-hide');
    })
}
$('a[href*=\\#]:not([href=\\#])').on('click',()=>{
    let target = $(this.hash);
    if (target.length){
        $('html,body').animate({
            scrollTop:target.offset().top
        },1000);
        return false;
    }
})