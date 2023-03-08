const btnCart = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const btnClose = document.querySelector("#cart-close");

btnCart.addEventListener("click", () => {

  cart.classList.add("cart-active");
  console.log("hi");
  
});

btnClose.addEventListener("click", () => {
  cart.classList.remove("cart-active");
});

document.addEventListener("DOMContentLoaded", loading);

function loading() {
  loadContent();
}

function loadContent() {
  //remove
  let btnRemove = document.querySelectorAll(".cart-remove");
  let qtyElement = document.querySelectorAll(".cart-quantity");
  let addToCart = document.querySelectorAll(".add-cart");

  btnRemove.forEach((btn) => {
    btn.addEventListener("click", removeItem);
  });

  //product increment

  qtyElement.forEach((input) => {
    input.addEventListener("click", changeQty);
  });

  addToCart.forEach((item) => {

	item.addEventListener('click', addItem)
	
  })

  updatetotal();
}

//remove item form cart

function removeItem() {
  if(confirm("sure")){
  let title = this.parentElement.querySelector(".cart-food-title").innerHTML;
  itemlist = itemlist.filter(el => el.title != title);
  this.parentElement.remove();
  loadContent();
  }
}



function changeQty() {
  if (isNaN(this.value) || this.value < 1) {
    this.value = 1;
  }
  loadContent();
}

let itemlist = [];



function addItem(){

	let product = this.parentElement;
	let title = product.querySelector(".food-title").innerHTML;
	let price = product.querySelector(".food-price").innerHTML;
	let imgsrc = product.querySelector(".food-img").src;

	//console.log(title,imgsrc ,price)

	let newProduct = {title,price,imgsrc}

	if(itemlist.find((e) => e.title == newProduct.title)){
		alert("Product Already Added in Cart")
		return;
	}
	else{

		itemlist.push(newProduct)
	}

	let newProductElement = createCartProduct(title,price,imgsrc)
    
	let element = document.createElement('div')

	element.innerHTML = newProductElement;

	let cartBasket = document.querySelector('.cart-content');

	cartBasket.append(element);
	loadContent()


	let count = document.querySelector(".cart-count")

	count.innerText = itemlist.length;

}


function createCartProduct(title,price,imgsrc){

	return ` <div class="cart-box">
	<img src="${imgsrc}" class="cart-img" />
	<div class="detail-box">
	  <div class="cart-food-title">${title}</div>
	  <div class="price-box">
		<div class="cart-price">${price}</div>
		<div class="cart-amt">${price}</div>
	  </div>

	  <input type="number" value="1" class="cart-quantity" />
	</div>
	<ion-icon name="trash" class="cart-remove"></ion-icon>
  </div>`;

}


function updatetotal(){

	const cartItems = document.querySelectorAll(".cart-box");
	const totalValue = document.querySelector(".total-price");

	let total = 0;

	cartItems.forEach(product => {

		let priceelement = product.querySelector(".cart-price");
		let price = parseFloat(priceelement.innerHTML.replace("Rs.", ""));
		let qty = product.querySelector(".cart-quantity").value;
		total+= (price*qty);
		product.querySelector(".cart-amt").innerText = "Rs." + (price * qty)

	});

	totalValue.innerHTML = "Rs." + total;

}

