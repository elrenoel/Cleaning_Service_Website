const btnMenu = document.querySelector(".btn-menu");
const btnClose = document.querySelector(".btn-close-menu");
const menuMobile = document.querySelector(".menu-mobile");

btnMenu.addEventListener("click", ()=>{
    menuMobile.classList.remove('hidden');
    btnMenu.classList.add('hidden');
    btnMenu.classList.remove('block');
    btnClose.classList.remove('hidden');
});

btnClose.addEventListener("click", ()=>{
    menuMobile.classList.add('hidden');
    btnMenu.classList.remove('hidden');
    btnClose.classList.add('hidden');
})

