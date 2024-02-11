let buyf = false;
const btn = document.getElementById('btn');
let bank = 0
let product_cost = document.querySelector('.product__cost')
let basket_cost = document.querySelector('.busket__cost')
console.log(product_cost)

function buy() {
	if(!buyf) {
		btn.style.background = 'white';
		btn.innerHTML = 'In the bag';
		btn.style.color = 'black';
        buyf = true

	} else {
		btn.style.background = '#0D0C0C';
		btn.innerHTML = 'Add to bag';
		btn.style.color = 'white';
        buyf = false
	}
}