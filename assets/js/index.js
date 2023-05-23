const price = document.querySelectorAll('.buycard__price_value');
const firstPrice = Number((Price[0].innerText).slice(0, -1));
const secondPrice = Number((Price[1].innerText).slice(0, -1));
const thirdPrice = Number((Price[2].innerText).slice(0, -1));
const fourthPrice = Number((Price[3].innerText).slice(0, -1));
const result = firstPrice + secondPrice + thirdPrice + fourthPrice;

const resultTotal = document.querySelector('#result__total');
resultTotal.textContent = String(result) + 'р';

function getDiscount() {
    resultTotal.textContent = String(result * 0.8) + 'руб.';
    const newPrice = document.querySelector('.coupon');
    newPrice.textContent = 'Вы применили скидку :)';
};