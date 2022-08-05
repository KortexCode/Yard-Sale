//EVENTS
/*Open menu events with click on the icons*/
document.querySelector('.nav-email').addEventListener('click', openMenuDesktop);
document.querySelector('.mobile-menu-icon').addEventListener('click', openMenuMobile);
document.querySelector('.nav-shopping-icon').addEventListener('click', openShoppingMenu);
/*closed shopping menu with left arrow*/
document.querySelector('.shopping-card-container .title-bar img:nth-child(2)').addEventListener('click', openShoppingMenu);
/*buttons*/
document.getElementById('add-to-cart-button').addEventListener('click', addToCart);

//VARIABLES
/*price counter in shopping cart */
let accumulatedPrice = 0;
/*Menu Selector */
const shoppingMenu = document.querySelector('.shopping-card-container');
const mobileMenu =  document.querySelector('.mobile-menu-container');
const desktopMenu = document.querySelector('.desktop-menu');
/*product detail */
const productDetail = document.querySelector('.product-detail');
/*shooping cart*/
const orderContainer = document.querySelector('.order-container');
const totalPrice = document.querySelector('.order-info p:nth-child(2)');
/*indicator counter*/
const indicator = document.querySelector('.nav-indicator');
let indicatorCounter = 0;
/*Product list */
const productList= [];
/*Product constructor */
function Producto(name, price, imagen, description){
    this.name = name;
    this.price = price;
    this.imagen = imagen;
    this.description = description;
}
/*Products*/
productList.push(new Producto("Bike", "120.00", "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940","A comfortable bike to ride on any terrain; It has little weight and shock absorbers, no speed control but with big tires and ergonomic handlebars"));
productList.push(new Producto("Hot Toy Gally", "600.00", "https://www.aceroymagia.com/Images/articulo/figura-alita-movie-masterpiece/01-Figura-Alita-Movie-Masterpiece.jpg", "Alita: Battle Angel Set in the future of thriving robotic technology, we follow amnesiac cyborg Alita as she finds herself awakened in a future world that she does not recognize."));
productList.push(new Producto("Xbox Joystick", "30.00", "https://images.pexels.com/photos/1298601/pexels-photo-1298601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "Thanks to its ergonomics specially designed for the position of your hand, you can spend hours playing in total comfort."));
productList.push(new Producto("Joystick Arcade", "200,00", "https://http2.mlstatic.com/D_NQ_NP_722764-MCO46490692982_062021-O.webp", "perfect gaming experience: round control buttons + a spherical metal joystick with plastic sleeve for protection against rust, allows Delicate and smooth operation in games, high precision without delay."));
productList.push(new Producto("CrossCode", "40.00", "https://as01.epimg.net/meristation/imagenes/2020/07/25/analisis/1595662582_790023_1596445817_noticia_normal.jpg", 'A retro-inspired 2D Action RPG set in the distant future. CrossCode combines 16-bit SNES-style graphics with butter-smooth physics, a fast-paced combat system, and engaging puzzle mechanics, served with a gripping sci-fi story.'));
productList.push(new Producto("Laptop Asus TUF", "1248.00", "https://m.media-amazon.com/images/I/61ZZqfZALAL._AC_SL1200_.jpg", 'Processor: AMD Ryzen 7 4800H 2.90GHz 8-Core Processor (12MB Cache, up to 4.20GHz), NVIDIA GeForce GTX 1660 Ti 6GB GDDR6 Graphics'));
productList.push(new Producto("gamer speakers", "100.60", "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6489/6489527_sd.jpg","Gamer Sw-g2.1 3000 75w Escorpion Tv Led Speakers. Nice sound and powerful bass, this item is special for video games."));


/*HEADER*/
//NAVIGATION BAR ELEMENTS

function openMenuDesktop(){
    /*with conditionals */
    if(!shoppingMenu.classList.contains('shopping-card-container--unable')){
        shoppingMenu.classList.toggle('shopping-card-container--unable');
    }
    mobileMenu.classList.add('mobile-menu-container--unable');
    shoppingMenu.classList.add('shopping-card-container--unable');
    productDetail.classList.add('product-detail--unable');
    desktopMenu.classList.toggle('desktop-menu--unable');
}

function openMenuMobile(){

    shoppingMenu.classList.add('shopping-card-container--unable');
    productDetail.classList.add('product-detail--unable');
    mobileMenu.classList.toggle('mobile-menu-container--unable');
}

function openShoppingMenu(){

    mobileMenu.classList.add('mobile-menu-container--unable');
    desktopMenu.classList.add('desktop-menu--unable');
    productDetail.classList.add('product-detail--unable');
    shoppingMenu.classList.toggle('shopping-card-container--unable');
}
/*Shopping cart elements creation */
function addToCart(event){
    let productCardsName;
    let productDetailName;
    indicatorCounter++
    indicator.innerText = String(indicatorCounter)

    /*With this it knows where the click was done*/
    /*Product Cards */
    if(event.path[2].className==="product-information"){
        
        productCardsName = event.path[2].querySelector('div p:nth-child(2)').innerText;
    }
    /*Product details */
    else if(event.path[1].className==="product-detail"){
        
        productDetailName = event.path[1].querySelector('.product-detail-container .aside_info p:nth-child(2)').innerText;
    }

    for (const producto of productList) {
        
        if(producto.name == productDetailName || producto.name == productCardsName){

            const productInfo = document.createElement('div');
            productInfo.classList.add('product-info');
            const leftSide = document.createElement('div');
            leftSide.classList.add('left-side');
            const figure = document.createElement('figure');
            const productImg = document.createElement('img');
            productImg.setAttribute('src', producto.imagen);
            productImg.setAttribute("alt", "product imagen");
            const productName = document.createElement('span');
            productName.innerText = producto.name;
            const rightSide = document.createElement('div');
            rightSide.classList.add('right-side');
            const productPrice = document.createElement('p');
            productPrice.innerText = '$ '+producto.price;
             const imgIcon = document.createElement('img');
            imgIcon.setAttribute('src', "./icons/icon_close.png");
            imgIcon.setAttribute('alt', "close icon");
            imgIcon.addEventListener('click', removeShoppingCartProduct)

            figure.appendChild(productImg);
            leftSide.append(figure, productName);
            rightSide.append(productPrice, imgIcon);

            productInfo.append(leftSide, rightSide);
            orderContainer.appendChild(productInfo);

            accumulatedPrice = parseFloat(producto.price)+accumulatedPrice;
            totalPrice.innerText ='$ '+String(accumulatedPrice.toFixed(2));
        }
    }   
}

function removeShoppingCartProduct(event){

    indicatorCounter--
    indicator.innerText = String(indicatorCounter)
    /*subtracted to total price */
    const productName = event.composedPath()[2].querySelector('.left-side span').innerText;
   
    for (const producto of productList) { 
        if(producto.name === productName){
            accumulatedPrice = accumulatedPrice.toFixed(2) - parseFloat(producto.price);
            totalPrice.innerText = '$ '+accumulatedPrice.toFixed(2);
        }
    }    
    /*remove card*/
    event.composedPath()[2].remove();
}
/*MAIN*/
//CARDS CONTAINER SECTION
/*Products Creation in Cards Container Section*/
for (const producto of productList){

    const cardsContainer = document.querySelector('.cards-container');

    const productsContainer = document.createElement('div');
    productsContainer.classList.add('products-container');
    
    const productImg = document.createElement('img');
    productImg.setAttribute('src', producto.imagen);
    productImg.addEventListener("click", openProductDetail);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-information');

    const divContainer = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = "$"+ producto.price;
   
    const productName = document.createElement('p');
    productName.innerText = producto.name;

    const figure = document.createElement('figure');
    /*add to cart button*/
    const imgIcon = document.createElement('img');
    imgIcon.setAttribute('src', "./icons/bt_add_to_cart.svg");
    imgIcon.addEventListener('click', addToCart);

    divContainer.append(productPrice, productName);
    figure.appendChild(imgIcon);
    productInfo.append(divContainer, figure);
    productsContainer.append(productImg, productInfo);
  
    cardsContainer.appendChild(productsContainer);  
   
}

//PRODUCT DETAIL ASIDE

function closeProductDetail(){
    productDetail.classList.add('product-detail--unable');
}

function openProductDetail(event){
    mobileMenu.classList.add('mobile-menu-container--unable');
    desktopMenu.classList.add('desktop-menu--unable');
    shoppingMenu.classList.add('shopping-card-container--unable');
    productDetail.classList.remove('product-detail--unable');

    const productDetailContainer = document.querySelector('.product-detail-container');
    
    
    const productNameClicked = event.path[1].querySelector("div div p:nth-child(2)").innerText;
    
    for (const producto of productList) {
        
        if(producto.name === productNameClicked){
            /*Aside Creation*/
            const closeIcon = document.createElement("div");
            closeIcon.classList.add("close-icon");
            closeIcon.addEventListener("click", closeProductDetail);

            const iconImg = document.createElement("img");
            iconImg.setAttribute("src", "./icons/icon_close.png");
            iconImg.setAttribute("alt", "close icon");

            const figure = document.createElement("figure");
            const productImg = document.createElement("img");
            productImg.classList.add("aside_product");
            productImg.setAttribute("src", producto.imagen);
            productImg.setAttribute("alt", "product img");

            const pointContainer = document.createElement("div");
            pointContainer.classList.add("point-container");
            const point = document.createElement("div");

            const asideInfo = document.createElement("div");
            asideInfo.classList.add("aside_info");

            const productPrice = document.createElement('p');
            productPrice.innerText = "$"+ producto.price;
   
            const productName = document.createElement('p');
            productName.innerText = producto.name;
            const productDescription = document.createElement('p');
            productDescription.innerText = producto.description;

            closeIcon.appendChild(iconImg);
            figure.appendChild(productImg);
            pointContainer.appendChild(point);
            asideInfo.append(productPrice, productName, productDescription);
           
            productDetailContainer.replaceChildren(closeIcon, figure, pointContainer, asideInfo);
            
        }     
    }
}