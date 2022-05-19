



function ibg() {

    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}

ibg();

//----------------------------------------------
DA();
//----------------------------------------------


//menu burger
const iconMenu = document.querySelector('.menu-icon');
const menuBody = document.querySelector('.menu-body');

let unlock = true;


if (iconMenu) {
    
    iconMenu.addEventListener("click", function(e) {
        // document.body.classList.toggle('_lock')
        // iconMenu.classList.toggle('_active');
        // menuBody.classList.toggle('_active');
        

        if (unlock===true && !iconMenu.classList.contains('_active')){                         //menuBody.classList.contains('_active') && 
            menuBody.classList.add('top-active');
            document.body.classList.add('_lock')
            iconMenu.classList.add('_active');
            menuBody.classList.add('_active');
            animStart()
            unlock=false;
        } else if(unlock===false && iconMenu.classList.contains('_active')) {
            document.body.classList.remove('_lock')
            iconMenu.classList.remove('_active');
            menuBody.classList.remove('_active');
            animEnd()
            setTimeout(()=>{
            
                unlock=true;
                menuBody.classList.remove('top-active');
                
            }, 1200);
            
        }

    });
}

//------------------------------



const animItems = document.querySelectorAll('._anim-items');

function animStart() {
    console.log('fewgbfs')
    if (animItems.length > 0) {
        for (let i = 0; i < animItems.length; i++) {
            let animItem = animItems[i];
            
            animItem.classList.add('_active2')
        }
    }
}

function animEnd() {
    console.log('p')
    if (animItems.length > 0) {
        for (let i = 0; i < animItems.length; i++) {
            let animItem = animItems[i];
            animItem.classList.remove('_active2')
        }
    }
}

//---------------------------------------------------------

const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

window.addEventListener("DOMContentLoaded", () => {
    if (animItems.length > 0) {
        for (let i = 0; i < animItems.length; i++) {
            let animItem = animItems[i];
            
            if (viewport_width > 767) {
                animItem.classList.add('_anim-initial')
            } else{
                animItem.classList.remove('_anim-initial')
            }
        }
    }
})

//------------------------------

let header = document.querySelector('.header');
let block2 = document.querySelector('.block2');
let body = document.querySelector('.body');

let scrollY1 = 0;

window.addEventListener('scroll', ()=>{

    let scrollY2 = window.pageYOffset;

     if(document.documentElement.scrollTop===0) {
            
        setTimeout(()=>{
            header.classList.remove('blackBackground')
        }, 300);

        scrollY1 = scrollY2    
    } else if (scrollY2 < scrollY1){
        header.classList.add('blackBackground')
        header.classList.remove('hide')
        scrollY1 = scrollY2 
    }else if(document.documentElement.scrollTop!==0){
        header.classList.add('hide')
        scrollY1 = scrollY2
    }
})


//------------------------------

//------------------------------

const animItems3 = document.querySelectorAll('._anim-items3');

//------------------------------


async function getProducts() {
    const file = "json/products.json";
    let response = await fetch(file, {
        method: "GET"
    });
    if (response.ok) {
        let result = await response.json();
        console.log(result)
        loadProducts(result);
        ibg();
        
            
    } else {
        console.log('Error');
    }
}





function loadProducts(data) {
    const productsItems = document.querySelector('.shop-items');

    data.products.forEach(item => {
        const productId = item.id;
        const productUrl = item.url;
        const productImage1 = item.img1;
        const productImage2 = item.img2;
        const productName = item.name;
        const productPrice = item.price;

        let template = `
                        <div data-pid="${productId}" class="shop-item _anim-items3">
                            <div class="shop-item-img ibg">
                                <img src="img/${productImage1}" class="ibg-img item-img1" alt="">
                                <div class="shop-item-img2 ibg">
                                    <img src="img/${productImage2}" class="ibg-img item-img2" alt="">
                                </div>
                            </div>
                            <div class="shop-item-info">
                                <div class="shop-item-name">${productName}</div>
                                <div class="shop-item-price">от ${productPrice} грн.</div>
                            </div>
                        </div>`

    
    productsItems.insertAdjacentHTML('beforeend', template);
    })
    //animOnScroll();
}

///document.addEventListener('DOMContentLoaded', getProducts);
getProducts();

//------------------------------


