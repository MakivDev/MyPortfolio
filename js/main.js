const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () =>{
    if (nav.classList.toggle('open')){
        navBtnImg.src="/img/nav/nav-close.svg"
    } else {
        navBtnImg.src="/img/nav/nav-button.svg"
    }
}   


document.addEventListener('click', function(event) {
    if (!nav.contains(event.target) && nav.classList.contains('open')) {
        nav.classList.remove('open');
        navBtnImg.src = "/img/nav/nav-button.svg";
    }
});