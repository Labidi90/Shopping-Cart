/*let addBtn = document.querySelector("product-plus");
let subBtn = document.querySelector("product-minus");
let qty = document.querySelector("qtybox");

addBtn.addEventListener("click", () => {
  qty.value = parseInt(qty.value) + 1;
});

subBtn.addEventListener("click", () => {
  if (qty.value <= 1) {
    qty.value = 1;
  } else {
    qty.value = parseInt(qty.value) - 1;
  }
}); */

var incrementButton = document.getElementsByClassName("product-plus");
var decrementButton = document.getElementsByClassName("product-minus");
var qty = document.getElementsByClassName("qtybox");

for (var i = 0; i < incrementButton.length; i++) {
  var button = incrementButton[i];
  button.addEventListener("click", function (event) {
    var buttonClicked = event.target;
    var input = buttonClicked.parentElement.children[3];
    var inputValue = input.value;
    var newValue = parseInt(inputValue) + 1;
    input.value = newValue;
  });
}
