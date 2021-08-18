// case update function
function productUpdateNumber(product, price, increasing) {
  const productInput = document.getElementById(product + '-counter');
  let productNumber = productInput.value;
  if (increasing == true) {
    productNumber = parseInt(productNumber) + 1;
  } else if (productNumber > 0) {
    productNumber = parseInt(productNumber) - 1;
  }
  productInput.value = productNumber;

  //   update case total
  const caseTotal = document.getElementById(product + '-total');
  caseTotal.innerText = productNumber * price;
  //   cal update total
  updateTotal();
}
// get input value
function getInputValue(product, price) {
  const productId = document.getElementById(product + '-counter');
  const productNumber = parseInt(productId.value);
  const productSubTotal = productNumber * price;
  return productSubTotal;
}

// updateTotal
function updateTotal() {
  const phoneTotalAmount = getInputValue('phone', 1219);
  const caseTotalAmount = getInputValue('case', 59);
  const subTotal = phoneTotalAmount + caseTotalAmount;
  const tax = subTotal / 10;
  const total = subTotal + tax;

  document.getElementById('sub-total').innerText = subTotal;
  document.getElementById('tax').innerText = tax;
  document.getElementById('total').innerText = total;
}

// phone update
// plus
document.getElementById('phone-plus').addEventListener('click', function () {
  productUpdateNumber('phone', 1219, true);
});
// minus
document.getElementById('phone-minus').addEventListener('click', function () {
  productUpdateNumber('phone', 1219, false);
});

// case Update
// plus button event
document.getElementById('case-plus').addEventListener('click', function () {
  productUpdateNumber('case', 59, true);
});

// minus button event
document.getElementById('case-minus').addEventListener('click', function () {
  productUpdateNumber('case', 59, false);
});
