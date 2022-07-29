/* navbar - elements */
document.querySelector('.nav-email').addEventListener('click', openMenuDesktop);
document.querySelector('.mobile-menu-icon').addEventListener('click', openMenuMobile);
document.querySelector('.nav-shopping-icon').addEventListener('click', openShoppingMenu);

const shoppingMenu = document.querySelector('.shopping-card-container');
const mobileMenu =  document.querySelector('.mobile-menu-container');
const desktopMenu = document.querySelector('.desktop-menu');


function openMenuDesktop(){

    if(!shoppingMenu.classList.contains('shopping-card-container--unable')){
        shoppingMenu.classList.toggle('shopping-card-container--unable');
    }

    desktopMenu.classList.toggle('desktop-menu--unable');
}


function openMenuMobile(){

    if(!shoppingMenu.classList.contains('shopping-card-container--unable')){
        shoppingMenu.classList.toggle('shopping-card-container--unable');
    }

    mobileMenu.classList.toggle('mobile-menu-container--unable');

}


function openShoppingMenu(){

    if(!mobileMenu.classList.contains('mobile-menu-container--unable'))
    {
        mobileMenu.classList.toggle('mobile-menu-container--unable');
    }
    if(!desktopMenu.classList.contains('desktop-menu--unable'))
    {
        desktopMenu.classList.toggle('desktop-menu--unable')
    }
    
    shoppingMenu.classList.toggle('shopping-card-container--unable');
}

