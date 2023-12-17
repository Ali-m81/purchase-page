// variable for select img
let img = document.querySelectorAll('.litel-i')
let mainImg = document.querySelector('#main-i')


// varibale for plus or mines
let plus = document.querySelector('#plus')
let min = document.querySelector('#min')
let tally = document.querySelector('#tally')
let err = document.querySelector('#err')
let num = 0;
let check = 0;

// variable for shopping cart
let cart = document.querySelector('#cart')
let cartPage = document.querySelector('#cart-page')
let addCart = document.querySelector('#add-cart')
let about = document.querySelector('#about-c')
let empty = document.querySelector('#empty')
let cartC = document.querySelector('#cart-c')
let checks = document.querySelector('#check')
let checkShow = 0;
let total = 0;
let result;

// variable for delet iteam 
let delet = document.querySelector('#delet')


// variable for nex img on the phone
let next = document.querySelector('#nex')
let back = document.querySelector('#back')
let image1 = document.querySelector('#main-1')
let ma = 0;
let mb = 0
let one = 'images/image-product-1.jpg';
let two = 'images/image-product-2.jpg';
let three = 'images/image-product-3.jpg';
let four = 'images/image-product-4.jpg';



// fix image for iteam by click element 
img.forEach((iteam) => {
    iteam.addEventListener('click', () => {
        let a = iteam.getAttribute('src');
        mainImg.setAttribute('src', a)
    })
})




// code for plus or mines to cart
plus.addEventListener('click', () => {
    if (check == 1) {
        err.style.display = 'none'
    }
    num += 1;
    tally.innerHTML = num
})

min.addEventListener('click', () => {
    if (num == 0) {
        check = 1;
        num = 0;
        err.style.display = 'flex'
        setTimeout(() => {
            err.style.display = 'none'
            check = 0;
        }, 3000);
    } else {
        num -= 1;
    }

    tally.innerHTML = num
})

// code for shopping cart
addCart.addEventListener('click', () => {

    total = num;
    total *= 125;
    result = `Fall Limited Edition Sneakers $125.00*${num}   $${total}.00`
    about.innerHTML = result;
    if (total == 0) {
        empty.style.display = 'flex'
        cartC.style.display = 'none'
        checks.style.display = 'none'
    } else {
        empty.style.display = 'none'
        cartC.style.display = 'flex'
        checks.style.display = 'flex'
    }
    console.log(total, num)
})
cart.addEventListener('click', () => {
    if (total == 0) {
        empty.style.display = 'flex'
        cartC.style.display = 'none'
        checks.style.display = 'none'
    } else {
        empty.style.display = 'none'
        cartC.style.display = 'flex'
        checks.style.display = 'flex'
    }
    if (checkShow == 0) {
        cartPage.style.display = 'flex'
        checkShow += 1;
    } else if (checkShow == 1) {
        cartPage.style.display = 'none'
        checkShow -= 1;
    }
})

// code for delet button
delet.addEventListener('click', () => {
    total = 0;
    num = 0;
    tally.innerHTML = num
    if (total == 0) {
        empty.style.display = 'flex'
        cartC.style.display = 'none'
        checks.style.display = 'none'
    } else {
        empty.style.display = 'none'
        cartC.style.display = 'flex'
        checks.style.display = 'flex'
    }
})
// code for nex or back
next.addEventListener('click', () => {
    if (ma == 0) {
        image1.setAttribute('src', two)
        ma = 1
        mb = 0
    } else if (ma == 1) {
        image1.setAttribute('src', three)
        ma = 2
        mb = 1
    } else if (ma == 2) {
        image1.setAttribute('src', four)
        ma = 3
        mb = 3
    }
    else if (ma == 3) {
        image1.setAttribute('src', one)
    }
})

back.addEventListener('click', () => {
    if (mb == 0) {
        image1.setAttribute('src', one)
        ma = 0
    } else if (mb == 1) {
        image1.setAttribute('src', two)
        mb = 0
        ma = 1
    } else if (mb == 2) {
        image1.setAttribute('src', three)
        mb = 1
        ma = 2
    }
    else if (mb == 3) {
        image1.setAttribute('src', four)
        mb = 2
    }
})
