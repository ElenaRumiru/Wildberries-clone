// Функция счетчик количества товаров

const counterMinus = document.querySelector('.counter-minus');
const counterPlus = document.querySelector('.counter-plus');
let countGoods = document.querySelector('.counter-count');
let countLeft = document.querySelector('.count-left');


const plus = () => {
    let countGoodsNumber = Number(countGoods.innerHTML);
    let countGoodsLeft = Number(countLeft.innerHTML);
    countGoodsNumber++;
    countGoods.innerHTML = countGoodsNumber;
}

const minus = () => {
    let countGoodsNumber = Number(countGoods.innerHTML);
    if (countGoodsNumber >= 2) {
        countGoodsNumber--;
        countGoods.innerHTML = countGoodsNumber;
    }

}

counterPlus.addEventListener('click', plus);
counterMinus.addEventListener('click', minus);