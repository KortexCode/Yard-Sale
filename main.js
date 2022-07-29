/* navbar - elements */
document.querySelector('.nav-email').addEventListener('click', openMenuDesktop);
document.querySelector('.mobile-menu-icon').addEventListener('click', openMenuMobile);


function openMenuDesktop(){

    document.querySelector('.desktop-menu').classList.toggle('desktop-menu--unable');
}
function openMenuMobile(){

    document.querySelector('.mobile-menu-container').classList.toggle('mobile-menu-container--unable');

}