let openNavBtn = document.querySelectorAll('#menu-btn')[0];
let closeNavBtn = document.querySelectorAll('#close-btn')[0];
let navList = document.querySelectorAll('#nav-list')[0];

function openMenu(){
    navList.classList.remove('right-[-100%]');
    navList.classList.add('right-0');
    navList.classList.add('slide-in');
    navList.classList.remove('slide-out');
}
function closeMenu(){
    navList.classList.add('right-[-100%]');
    navList.classList.remove('slide-in');
    navList.classList.add('slide-out');
}

// Product Printing Starts 

let products = JSON.parse(localStorage.getItem('userProducts')) || [
    {
        id : 'c695cfc6-daf4-4964-a832-35df86268a75',
        imageSrc : './images/products-iphone.png',
        name : "Apple iPhone 14 Pro Max 128GB Deep Purple",
        price : 900,
    },
    {
        id : '998f3d26-05f9-4f70-a2c7-ba4a55a5ba7a',
        imageSrc : './images/products-camra.png',
        name : 'Blackmagic Pocket Cinema Camera 6k',
        price : 2535,

    },
    {
        id : 'ab3580d1-a748-4cca-9e98-61d96a004759',
        imageSrc : './images/products-watch.png',
        name : 'Apple Watch Series 9 GPS 41mm Starlight Aluminium Case',
        price : 399,

    },
    {
        id : '33d68b17-dfa0-4096-a294-662a80db21ff',
        imageSrc : './images/airpod-img.png',
        name : 'Apple AirPods Max Wireless Over-Ear Headphones ',
        price : 549,
    },
    {
        id : '450282d0-fa3b-4991-8682-e4bfc1424a15',
        imageSrc : './images/products-watch1.png',
        name : 'Samsung Galaxy Watch6 Classic 47mm Black',
        price : 369,
    },
    {
        id : '6cafbf90-2da9-4d5f-b02e-1aacc98af4d1',
        imageSrc : './images/products-samsung-phone.png',
        name : 'Galaxy Z Fold5 Unlocked | 256GB | Phantom Black',
        price : 1799,
    },
    {
        id : '6c94798c-3a11-4988-a064-356aa95c7a32',
        imageSrc : './images/products-buds.png',
        name : 'Samsung Galaxy Buds FE (Fan Edition) True Wireless Earbuds',
        price : 99.99,
    },
    {
        id : '9f757d86-2d4f-4524-b7ae-a951a441dfd6',
        imageSrc : './images/products-ipad.png',
        name : 'Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021',
        price : 398,
    },
    {
        id : '5b761431-5821-49c6-bdbc-0741584831f6',
        imageSrc : './images/iphone-14-pro-1.png',
        name : 'Apple iphone 13 mini 128GB Pink',
        price : 850,
    },
    {
        id : '3eaa6da8-dfbe-4d22-90d3-ba49d27d17a5',
        imageSrc : './images/special-product1.png',
        name : 'Apple iphone 14 Pro 1TB Gold',
        price : 1399,
    },
    {
        id : '30b2b9ec-1077-4339-a1dd-08dc4a2f0849',
        imageSrc : './images/special-product.png',
        name : 'Apple iphone 14 Pro 256GB Silver',
        price : 1399,
    },
    {
        id : 'eeb3ff32-6856-4c27-a29c-93192ef2d797',
        imageSrc : './images/iphone-14-pro-2.png',
        name : 'Apple iphone 14 Pro 256GB Space Black',
        price : 1399,
    },
    {
        id : '9c172b7d-acb2-430a-bc57-8cf347002044',
        imageSrc : 'images/Samsung_Galaxy-S22.png',
        name : 'Samsung Galaxy S22 Ultra S Series 512GB',
        price : 999,
    },
    {
        id : '60deff9f-0a71-4d38-9521-2ac6c8aad3c6',
        imageSrc : 'images/iphone-16-pro-max.png',
        name : 'Apple iPhone 16 Pro Max 512GB Black Smartphone',
        price : 1399,
    },
    {
        id : 'd952aa5f-ef5f-42b6-b38a-9d85f4619cfa',
        imageSrc : 'images/fold-6.png',
        name : 'Samsung Galaxy Z Fold6 (512GB)',
        price : 2019,
    },
    {
        id : 'd2e4cffe-dafa-4a77-83fa-3c999c88c914',
        imageSrc : 'images/24-ultra.png',
        name : 'Samsung Galaxy S24 Ultra (512GB)',
        price : 1419,
    },
]

localStorage.setItem('userProducts', JSON.stringify(products));

// ////////////////////// Cart
let carts = JSON.parse(localStorage.getItem('cartItem')) || [];

let productEle = document.querySelectorAll('.js-product-sec')[0];

function printingProducts(){
    products.forEach((product) => {
        let divEle = `
            <div class="product-container1">
                <i class='bx bxs-heart heart-icon hover:scale-125 transition-all' onclick="isFavorite(this)"></i>
                <img class="image hover:scale-125 transition duration-700" src="${product.imageSrc}">
                <p class="product-name">${product.name}</p>
                <p class="price">$${product.price}</p>
                <button class="btn js-add-to-cart" onclick="buyItem('${product.id}')">Buy Now</button>
            </div>
        `;
        if(productEle){
        productEle.innerHTML += divEle; 
        }
    });
}

printingProducts()

function isFavorite(ele){
    if(!ele.classList.contains('favorite-item')){
        ele.classList.add('favorite-item');
    }else{
        ele.classList.remove('favorite-item');
    }
}

////////////////    Adding to cart Logic
let quantityItem = document.querySelectorAll('.js-quantity')[0];
function buyItem(eleId){    
    const productId = eleId;    
    let matchingItem;

    carts.forEach((item) => {        
        if(productId === item.productId){
            matchingItem = item;
        }
    });    

    if(matchingItem){
        matchingItem.quantity += 1;
    }else{
        carts.push({
            productId : productId,
            quantity : 1,
        })
    }
    localStorage.setItem('cartItem', JSON.stringify(carts));

    let countQuantity = 0;
    carts.forEach((item) => {
        countQuantity += item.quantity;
        quantityItem.innerHTML = countQuantity;
    });
};


// ////// Printing Items in cart Html

let cartSectionEle = document.querySelectorAll('.js-print-card')[0];
const checkoutLinkEle = document.querySelector('#checkOutLinkEle');

function emptyCartErr(){
    if(!cartSectionEle) return
    if(carts.length === 0){
        cartSectionEle.innerHTML += `
        <div class="w-[100%] h-[30vh] flex justify-center items-center m-auto bg-[#e9e9e9] p-3">
            <p class="text-4xl md:text-5xl text-center">Your Cart is empty 🚫</p> 
        </div>
        `;
        amount[0].subtotal = 0
        amount[0].total = 0
        localStorage.setItem('amount', JSON.stringify(amount));
    }
}

function isEmptyCard(ele){
    if(!checkoutLinkEle) return
    if(carts.length === 0){
        ele.href = "javascript:void(0)";
        Swal.fire("Please add a product");
    }
}



function renderCartItems(){
    carts.forEach((item) => {
        let cartProductId = item.productId;
        let matchingEle;
        products.forEach((product) => {     
            if(cartProductId === product.id){
                matchingEle = product
            }
            
        });
        
        let div = `
            <div class="flex flex-col gap-20 md:gap-6 md:flex-row pt-5 md:pt-10 md:w-[90%]">
                <div class="flex gap-3 border-b border-gray-300 pb-10 md:w-[100%] h-fit lg:gap-5 js-cart-remove">
                    <img class="h-[90px] w-[90px]" src="${matchingEle.imageSrc}" alt="Apple Iphone 14 pro max">
                    <div class="xl:flex lg:gap-5">
                        <div class="flex flex-col gap-2">
                            <p class="font-semibold">${matchingEle.name}</p>
                            <p class="cart-id">${matchingEle.id}</p>
                        </div>
                        <div class="flex justify-between items-center w-[90%] m-auto mt-3 xl:h-[80%]">
                            <button class="text-2xl cursor-pointer" onclick="minusQuantity(this, '${matchingEle.id}')">-</button>
                            <p class="updateQuantity">${item.quantity}</p>
                            <button class="text-2xl cursor-pointer" onclick="addQuantity(this, '${matchingEle.id}')">+</button>
                            <p class="font-semibold text-[20px] updatePrice">$${(matchingEle.price * item.quantity).toFixed(2)}</p>
                            <button class="flex items-center cursor-pointer" onclick="removingCart(this, '${matchingEle.id}')"><i class='bx bx-x font-semibold text-2xl'></i></button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        if(cartSectionEle){
            cartSectionEle.innerHTML += div;
        };
    
    });
}

renderCartItems()



// /////////// discounts Codes starts 
let discountCode = JSON.parse(localStorage.getItem('discountCode')) || [
    {
        code : 'SMIT-Student92',
        discountPercentage : 20
    },
    {
        code : 'SMIT-Student879',
        discountPercentage : 30
    },
    {
        code : 'SMIT-Student-MuhammadSami',
        discountPercentage : 70
    },
];
let bonusCardNum = JSON.parse(localStorage.getItem('cardNumber')) || [
    {
        code : 12345678,
        discountPercentage : 5
    },
    {
        code : 87654321,
        discountPercentage : 50
    },
    {
        code : 1234567890,
        discountPercentage : 70
    },
];

localStorage.setItem('cardNumber', JSON.stringify(bonusCardNum));
localStorage.setItem('discountCode', JSON.stringify(discountCode));

// /////////// discounts Codes Ends

// // ///////////////// updating Order Summary 
let amount = JSON.parse(localStorage.getItem('amount')) || [
    {
        subtotal : 0,
        total : 0
    },
];

function orderSummary(){
    let subtotalArr = []
    let subtotal = 0;    

    let subtotalEle = document.querySelector('#js-subtotal-count');
    let totalEle = document.querySelector('#js-total-count'); 
    if(!totalEle) return
     
    carts.forEach((item) => {
        let cartProductId = item.productId;
        let matchingEle;
        products.forEach((product) => {     
            if(cartProductId === product.id){
                matchingEle = product
            }
        });
        let sum = matchingEle.price * item.quantity;
        subtotalArr.push(sum);
    });

    for(let i = 0; i < subtotalArr.length; i++){        
        subtotal += subtotalArr[i];        
        amount[0].subtotal = subtotal.toFixed(2)
    }

    if(subtotalEle){
        subtotalEle.innerHTML = `$${(subtotal).toFixed(2)}`;
    }
    if(!subtotal){
        emptyCartErr();
        totalEle.innerHTML = '$0' 
        return
    } 
    if(totalEle){
        total = subtotal + 79
        totalEle.innerHTML = `$${(total).toFixed(2)}`;        
        amount[0].total = total.toFixed(2)
    }        
    localStorage.setItem('amount', JSON.stringify(amount));
}

orderSummary()


// //////////////  Working on removing cart
function removingCart(cartEle, eleId){       
    let matchingId = carts.findIndex((cart) => cart.productId === eleId);
    carts.splice(matchingId, 1);
    cartEle.parentNode.parentNode.parentNode.parentNode.remove();
    orderSummary()    
    localStorage.setItem('cartItem', JSON.stringify(carts));  
}


/////////////// Working on discounts

////////////////////   discount Promo Code
function applyCodes(){
    let totalEle = document.querySelector('#js-total-count'); 
    let discountInput = document.querySelectorAll('.discountCode')[0]
    let finalDiscount;  
    if(discountInput.value === '') return
    let disPercenFind = discountCode.find((code) => code.code === discountInput.value);
    if(disPercenFind){
        discountInput.value = 'Correct Code';
        setTimeout(() => {
            discountInput.value = "";
        }, 3000);
    };

    if(!disPercenFind){
        discountInput.value = 'Wrong Code';
        setTimeout(() => {
            discountInput.value = ""
        }, 3000)
        return
    }
    finalDiscount =  disPercenFind.discountPercentage / 100 * total;
    totalEle.innerHTML = `Price After ${disPercenFind.discountPercentage}% Discount : $${(total - finalDiscount).toFixed(2)}`; 
    amount[0].total = total - finalDiscount;
    localStorage.setItem('amount', JSON.stringify(amount));  
   
};


////////////////////   Card Number Promo Code

function applyCodesForBonus(){
    let totalEle = document.querySelector('#js-total-count'); 
    let bonusInput = document.querySelectorAll('.bonusNumber')[0];
    let bonusInputVal = Number(bonusInput.value);
    let finalDiscount;  
    
    if(bonusInput.value === '') return    
    let bonusPercenFind = bonusCardNum.find((num) => num.code === bonusInputVal);    
    if(bonusPercenFind){
        bonusInput.value = 'Correct Code';
        setTimeout(() => {
            bonusInput.value = ""
        }, 3000)
    }

    if(!bonusPercenFind){
        bonusInput.value = 'Wrong Code';
        setTimeout(() => {
            bonusInput.value = ""
        }, 3000)
        return
    }
    finalDiscount =  bonusPercenFind.discountPercentage / 100 * total;
    totalEle.innerHTML = `Price After ${bonusPercenFind.discountPercentage}% Discount : $${(total - finalDiscount).toFixed(2)}`;
    amount[0].total = total - finalDiscount;
    localStorage.setItem('amount', JSON.stringify(amount));  
};




// /////////////////// Working on Quantity + And - 

function addQuantity(ele, eleId){
    let cartsArr = carts.find((cart) => cart.productId === eleId)
    let productsArr = products.find((product) => product.id === eleId)
    let updatedQuantity = cartsArr.quantity += 1;
    orderSummary()
    ele.parentNode.childNodes[3].innerHTML = updatedQuantity;
    ele.parentNode.childNodes[7].innerHTML = `$${(productsArr.price * updatedQuantity).toFixed(2)}`
    localStorage.setItem('cartItem', JSON.stringify(carts));    
}


function minusQuantity(ele, eleId){
    let cartsArr = carts.find((cart) => cart.productId === eleId)
    let productsArr = products.find((product) => product.id === eleId)
    if(cartsArr.quantity <= 1) return
    let updatedQuantity = cartsArr.quantity -= 1;
    orderSummary()
    ele.parentNode.childNodes[3].innerHTML = updatedQuantity;
    ele.parentNode.childNodes[7].innerHTML = `$${(productsArr.price * updatedQuantity).toFixed(2)}`
    localStorage.setItem('cartItem', JSON.stringify(carts));    
}





// ////////////// Address Logic

const radioBtn = document.querySelector('.js-address-radioBtn');
const mainAddressInput = document.querySelector('.js-main-address');
const textAreaForAdd = document.querySelector('.js-address');
const addressCheckbox = document.querySelector('#address-checkbox');


let address = JSON.parse(localStorage.getItem('address')) || [
    {
        finalAddress : ''
    }
]

function addressFunc(){
    if(!mainAddressInput || !textAreaForAdd) return;
    let mainAddress = mainAddressInput.value
    let fullAddress = textAreaForAdd.value;

    if(!mainAddress || !fullAddress){
        Swal.fire("Enter Your Addrss");
        return
    };

    if(!addressCheckbox.checked){
        Swal.fire("Plese select the checkbox");
        return
    }

    address[0].finalAddress = fullAddress
    location = 'shipping.html';
    localStorage.setItem('address', JSON.stringify(address));  
}

function removeText(){
    textAreaForAdd.value = ""
}


// //////////////////////  Shipment Logic

let allRadioBtns = document.querySelectorAll('.shipping-input');

let paymentMethod = JSON.parse(localStorage.getItem('method')) || [
    {
        method : ''
    }
]

function saveShipmentMethod(inputEl){
    if(!allRadioBtns) return;
    let ischecked = inputEl.checked;
    if(ischecked){
        paymentMethod[0].method = inputEl.value;
    }
    localStorage.setItem('method', JSON.stringify(paymentMethod));  
}


function nextPaymentPage(){
    isAnySelected = Array.from(allRadioBtns).some((btn) => btn.checked);    
    if(isAnySelected){
        location = 'payment.html';
        return
    }else{
        Swal.fire("Please select a method");
    }
    
}


let regularDateEl = document.querySelector('.js-date-div1');
let moneyEarlyDate = document.querySelector('.js-date-div2');
// ///// For Regular Date
function regularMethod(){
    if(!regularDateEl) return
    let regularShipDate = new Date()
    regularShipDate.setDate(regularShipDate.getDate() + 5);
    let finalRegularDate = regularShipDate.toDateString()
    regularDateEl.innerHTML = finalRegularDate;
}

regularMethod()

// ///// For Money Date Date
function moneyMethod(){
    if(!moneyEarlyDate) return
    let moneyDate = new Date()
    moneyDate.setDate(moneyDate.getDate() + 2);
    let finalMoneyDate = moneyDate.toDateString()
    moneyEarlyDate.innerHTML = finalMoneyDate;
}

moneyMethod()




// ///////////////////////// Payment Logic
const paymentDivEle = document.querySelector('.js-payment-summary')

function rederPaymentItems(){
    if(!paymentDivEle) return;

    carts.forEach((item) => {
        let cartProductId = item.productId;
        let matchingEle;
        products.forEach((product) => {     
            if(cartProductId === product.id){
                matchingEle = product
            }
        });
        
        let div = `
            <div class="bg-[#F6F6F6] flex justify-between items-center p-3 mb-5 rounded-[8px] ">
                <div class="flex items-center flex-wrap gap-3">
                    <img class="w-12 h-12 hover:scale-125 transition duration-300" src="${matchingEle.imageSrc}" alt="${matchingEle.name}" >
                    <p class="text-[14px]">${matchingEle.name}</p>
                </div>
                <p>$${(matchingEle.price * item.quantity).toFixed(2)}</p>
            </div>

        `;
        if(paymentDivEle){
            paymentDivEle.innerHTML += div;
        };
    
    });
}

rederPaymentItems()


let paymentAddressEle = document.querySelector('.js-final-address');
let paymentShipmentEle = document.querySelector('.js-shipment-method');
let paymentSubtotalEle = document.querySelector('.js-payment-Sub-price');
let paymentTotalEle = document.querySelector('.js-payment-total-price');

function lastPayment(){
    if(!paymentAddressEle || !paymentShipmentEle || !paymentSubtotalEle || !paymentTotalEle) return;

    paymentAddressEle.innerHTML = address[0].finalAddress;
    paymentShipmentEle.innerHTML = paymentMethod[0].method;
    paymentSubtotalEle.innerHTML = `$${amount[0].subtotal}`;
    paymentTotalEle.innerHTML = `$${amount[0].total}`
}


lastPayment()


let billingInput = document.querySelectorAll('.js-billing-input');
let paymentCheckbox = document.querySelectorAll('#paymentCheckbox')[0];

function pay(){
    if(!billingInput || !paymentCheckbox) return
    for(let i = 0; i < billingInput.length; i++){
        if(billingInput[i].value === ''){
            Swal.fire(`Please Enter Your Card Info`);
            return
        }

        if(isNaN(billingInput[1].value)) {
            billingInput[1].value = 'Please enter numbers only';
            billingInput[1].style.color =  'red';
            setTimeout(() => {
                billingInput[1].value = '';
                billingInput[1].style.color =  'black';
            },2000)
            return

        }else if(billingInput[1].value.length < 13){
            billingInput[1].value = 'Enter at least 13 Numbers';
            billingInput[1].style.color =  'red';
            setTimeout(() => {
                billingInput[1].value = '';
                billingInput[1].style.color =  'black';
            },2000)
            return
        }

        if(isNaN(billingInput[3].value)) {
            Swal.fire(`Enter a number in CVV`);
            return
        }
    }  
    if(paymentCheckbox.checked == false){
        Swal.fire(`Select the checkbox`);
        return
    };
    Swal.fire(`✨✨✨✨✨✨ Congratulations! Your order is on its way.\n ✨✨✨✨✨`);
} 
