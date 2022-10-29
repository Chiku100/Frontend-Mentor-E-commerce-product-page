let cart = document.querySelector(".fa-cart-shopping");

function add() {
    document.querySelector(".abs1").classList.add("viz");
    document.querySelector(".cart1").classList.add("viz");
    document.querySelector(".cart").classList.remove("viz");
    document.querySelector(".abs").classList.remove("viz");
}
function remove() {
    console.log(count);
    document.querySelector(".cart").classList.add("viz");
    document.querySelector(".cart1").classList.remove("viz");
    document.querySelector(".abs").classList.add("viz")
    document.querySelector(".abs1").classList.remove("viz");
    document.querySelector(".amount").innerHTML = count;
    document.querySelector(".total").innerHTML = "$" + (125 * count)
}
var count = 0;
if (count == 0) {
    console.log(count);
    cart.addEventListener("click", () => {
        add();
    })
}
document.querySelector(".plus").addEventListener("click", () => {
    count++;
    document.querySelector(".num").innerHTML = count;
    if (count == 0) {
        cart.addEventListener("click", () => {
            add();
        })
    } else {
        cart.addEventListener("click", () => {
            remove()
        })
    }


})
document.querySelector(".minus").addEventListener("click", () => {

    count = count - 1;

    if (count < 0) {
        count = 0;
        document.querySelector(".num").innerHTML = count;

    }
    if (count > 0) {
        cart.addEventListener("click", () => {
            console.log(count);
            document.querySelector(".cart").classList.remove("viz");
            document.querySelector(".abs").classList.add("viz");
            document.querySelector(".amount").innerHTML = 0;

        })
    }
}

)

document.querySelector(".num").innerHTML = 0;
cart.addEventListener("click", () => {
    document.querySelector(".abs").classList.remove("viz")
    document.querySelector(".abs1").classList.remove("viz");
})

document.querySelector(".button").addEventListener("click", () => {
    cart_count = count;
    document.querySelector(".parent").style.display = "block";
    document.querySelector(".circle").innerHTML = cart_count;
})
if (window.innerWidth > 800) {
    document.querySelector(".slideshow-container").addEventListener("click", () => {
        document.querySelector(".leftbox").style.position = "relative";
        document.querySelector(".overlay").classList.remove("viz");
        document.querySelector(".active").classList.remove("viz")
        document.querySelector(".inactive").style.opacity = 0.4;
    })
    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".overlay").classList.add("viz");
        document.querySelector(".active").classList.add("viz")
        document.querySelector(".inactive").style.opacity = 1;
    })
}

let images = ["./images/image-product-1.jpg", "./images/image-product-2.jpg", "./images/image-product-3.jpg", "./images/image-product-4.jpg"];
let thumbnails = document.querySelectorAll(".active .thumbnails img");
let num = 1;

let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function addBorder(id) {
    for (i = 0; i < thumbnails.length; i++) {
        thumbnails[i].style.border = 'none';
        thumbnails[i].style.opacity = '1';
        thumbnails[i].filter="brightness(0.5)"
    }
    id.style.border = '2px solid orange';
    id.style.opacity = "0.6";
    id.style.filter="brightness(1.2)";
}
function inactiveborder(id) {
    let inactives = document.querySelectorAll(".inactivethumbs img")
    for (i = 0; i < inactives.length; i++) {
        inactives[i].style.border = 'none';
        inactives[i].style.opacity = '1';
    }
    id.style.border = '2px solid orange';
    id.style.opacity = "0.6";
    id.style.brightness="20%";
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let slidesact = document.getElementsByClassName("mySlidesact")
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    if (n > slidesact.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slidesact.length; i++) {
        slidesact[i].style.display = "none";
    }
    addBorder(thumbnails[slideIndex-1])
    slides[slideIndex - 1].style.display = "block";
    slidesact[slideIndex - 1].style.display = "block";

}
document.querySelector(".dlt").addEventListener("click", () => {
    document.querySelector(".abs1").classList.add("viz");
    document.querySelector(".abs").classList.remove("viz");
    document.querySelector(".cart1").classList.add("viz");
    document.querySelector(".cart").classList.remove("viz");


    document.querySelector(".circle").innerHTML = 0;

})
document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector(".resnav").style.display = "flex";
    document.querySelector(".overlay").style.display = "block";
    document.querySelector(".slideshow-container").style.filter = "brightness(50%)";
    document.querySelector(".previous").style.display = "none";
    document.querySelector(".next").style.display = "none";
})
document.querySelector("button").addEventListener("click", () => {
    document.querySelector(".resnav").style.display = "none";
    document.querySelector(".overlay").style.display = "none";
    document.querySelector(".slideshow-container").style.filter = "brightness(100%)";
    document.querySelector(".previous").style.display = "flex";
    document.querySelector(".next").style.display = "flex";
})
