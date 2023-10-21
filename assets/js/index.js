const price = document.querySelectorAll('.buycard__price_value');
const firstPrice = Number((price[0].innerText).slice(0, -4));
const secondPrice = Number((price[1].innerText).slice(0, -4));
const thirdPrice = Number((price[2].innerText).slice(0, -4));
const fourthPrice = Number((price[3].innerText).slice(0, -4));
const result = firstPrice + secondPrice + thirdPrice + fourthPrice;

const resultTotal = document.querySelector('#result__total');
resultTotal.textContent = String(result) + ' RUB';

function getDiscount() {
    resultTotal.textContent = String(result * 0.8) + ' RUB';
    const newPrice = document.querySelector('.coupon');
    newPrice.textContent = 'Вы применили скидку :)';
};