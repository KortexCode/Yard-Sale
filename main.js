/*HEADER*/
/* NAVIGATION BAR ELEMENTS */

/*Open menu events with click on the icons*/
document.querySelector('.nav-email').addEventListener('click', openMenuDesktop);
document.querySelector('.mobile-menu-icon').addEventListener('click', openMenuMobile);
document.querySelector('.nav-shopping-icon').addEventListener('click', openShoppingMenu);
/*Menu Selector */
const shoppingMenu = document.querySelector('.shopping-card-container');
const mobileMenu =  document.querySelector('.mobile-menu-container');
const desktopMenu = document.querySelector('.desktop-menu');

function openMenuDesktop(){
    /*with conditionals */
    if(!shoppingMenu.classList.contains('shopping-card-container--unable')){
        shoppingMenu.classList.toggle('shopping-card-container--unable');
    }
    desktopMenu.classList.toggle('desktop-menu--unable');
}

function openMenuMobile(){

    shoppingMenu.classList.add('shopping-card-container--unable');
    mobileMenu.classList.toggle('mobile-menu-container--unable');
}

function openShoppingMenu(){

    mobileMenu.classList.add('mobile-menu-container--unable');
    desktopMenu.classList.add('desktop-menu--unable');
    shoppingMenu.classList.toggle('shopping-card-container--unable');
}

/*MAIN ELEMENTS*/

/*Product constructor */
function Producto(name, price, imagen){
    this.name = name;
    this.price = price;
    this.imagen = imagen;
}
/*Product list */
const productList= [];

productList.push(new Producto("Bike", "120,00", "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"));

productList.push(new Producto("Hot Toy Gally", "600,00", "https://m.media-amazon.com/images/I/81Bj5c5oryL._AC_SL1422_.jpg"));

productList.push(new Producto("Xbox Joystick", "30,00", "https://images.pexels.com/photos/1298601/pexels-photo-1298601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"));


/*Elements Creation in main*/

for (const producto of productList){

    const cardsContainer = document.querySelector('.cards-container');

    const productsContainer = document.createElement('div');
    productsContainer.classList.add('products-container');
    
    const productImg = document.createElement('img');
    productImg.setAttribute('src', producto.imagen);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const divContainer = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = "$"+ producto.price;
   
    const productName = document.createElement('p');
    productName.innerText = "$"+ producto.name;

    const figure = document.createElement('figure');

    const imgIcon = document.createElement('img');
    imgIcon.setAttribute('src', "./icons/bt_add_to_cart.svg");

    divContainer.append(productPrice, productName);
    figure.appendChild(imgIcon);
    productInfo.append(divContainer, figure);
    productsContainer.append(productImg, productInfo);
  
    /*master container */
    cardsContainer.appendChild(productsContainer);  
   
}

 