calculateTotalPrice();
//increment and decrement buttons
var incButtons = document.querySelectorAll(".product-plus");
for (var i = 0; i < incButtons.length; i++) {
  incButtons[i].addEventListener("click", function (event) {
    quantity(event.target);
  });
}
var decButtons = document.querySelectorAll(".product-minus");
// console.log(incButtons);
for (var i = 0; i < decButtons.length; i++) {
  // console.log(decButtons[i]);
  decButtons[i].addEventListener("click", function (event) {
    // console.log(event.target);
    quantity(event.target);
  });
}

function quantity(btn) {
  // console.dir(btn.className);
  if (btn.className.includes("product-plus") === true) {
    // console.log(btn.previousElementSibling);
    var span = btn.previousElementSibling;
    // console.log(span.innerText);
    span.innerText++;
  }

  if (btn.className.includes("product-minus") === true) {
    var span = btn.nextElementSibling;
    if (span.innerText > 1) {
      span.innerText--;
    }
  }
  calculateTotalPrice();
}

var likeIcons = document.querySelectorAll(".like");
for (var i = 0; i < likeIcons.length; i++) {
  likeIcons[i].addEventListener("click", function (event) {
    console.log(event.target.classList);
    event.target.classList.toggle("text-primary");
    console.dir(event.target);
  });
}

// Get All remove icons
var deleteIcon = document.querySelectorAll(".delete");
for (var i = 0; i < deleteIcon.length; i++) {
  deleteIcon[i].addEventListener("click", function (event) {
    // console.dir(event.target.parentElement.parentElement.parentElement);
    // console.dir(event.target.closest('.single-item'));
    event.target.closest(".product-item").remove();
    calculateTotalPrice();
  });
}

function calculateTotalPrice() {
  // Get all cart items
  var cartItems = document.querySelectorAll(".product-item");

  // Initialize the total price
  var totalPrice = 0;

  for (var i = 0; i < cartItems.length; i++) {
    var item = cartItems[i];
    console.log(item.querySelector("h3 span"));
    var unitPrice = Number(item.querySelector("h3 span").innerText);
    console.log(unitPrice);
    var quantity = Number(item.querySelector(".buttons span").innerText);
    console.log(typeof quantity);
    totalPrice += unitPrice * quantity;
    // console.log(totalPrice);
  }

  // Get the total
  var total = document.getElementById("total");
  // console.log(total.innerText);
  total.innerText = totalPrice;
}
