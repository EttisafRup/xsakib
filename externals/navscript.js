let nav = document.querySelector('.nav');
let ul = document.querySelector('.ul');
let img = document.querySelector('.sakibBhai');
let burgerButton = document.querySelector('.container');

function myFunction() {
    burgerButton.classList.toggle("change");
    nav.classList.toggle("hide");
    ul.classList.toggle("hide");
    img.classList.toggle("hide");
}

