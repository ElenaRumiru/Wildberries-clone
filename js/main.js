
const totalPrice = document.querySelector('.total-price');
const totalCountGoods = document.querySelector('.total-count');
const totalOldPrice = document.querySelector('.total-old-price');
const totalDiscount = document.querySelector('.total-discount');
const countGoodsAll = document.querySelectorAll('.counter-count');
const goodPriceElAll = document.querySelectorAll('.item-price__inbasket');
const oldPriceAll = document.querySelectorAll('.price-before__count');
const itemPriceBlock = document.querySelectorAll('.item-price');



  //Считаем суммы


//   Утилиты для перевода в строку и в цифры
function toNum(str) {
    const num = Number(str.replace(/ /g, ""));
    return num;
  }
function toCurrency(num) {
    const format = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return format;
  }
  
// let arrayGoodPriceElAll = [];
// goodPriceElAll.forEach(function(element) {
//     arrayGoodPriceElAll.push(element.textContent.replaceAll(' ', ''));
// });
  
// console.log(goodPriceElAll);
// console.log(arrayGoodPriceElAll);


// const getTotalPrice = () => {
//     let result = 0;
//     for (let i = 0; i < arrayGoodPriceElAll.length; i++) {
//         result = result + parseInt(arrayGoodPriceElAll[i]);
//     }

//     totalPrice.textContent = result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
//     return console.log(totalPrice.textContent);        
// }


//     let arr = [];
//     itemPriceBlock.forEach(function(element) {
//     arr.push(element.dataset.totalprice);
// });





// Добавляем гибкий счетчик количества товаров
function addHandlers(count) {
    let itemPriceBlock = count.querySelector('.item-price');
    let counterMinus = count.querySelector('.counter-minus');
    let counterPlus = count.querySelector('.counter-plus');
    let countGoods = count.querySelector('.counter-count');
    let goodPriceEl = count.querySelector('.item-price__inbasket');
    let oldPrice = count.querySelector('.price-before__count');

    
    counterPlus.addEventListener("click", function() {
        countGoods.innerText++;
        itemPriceBlock.dataset.count++;
        itemPriceBlock.dataset.totalprice = parseInt(itemPriceBlock.dataset.price) * parseInt(itemPriceBlock.dataset.count);
        goodPriceEl.textContent = itemPriceBlock.dataset.totalprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        itemPriceBlock.dataset.oldtotalprice = (parseInt(itemPriceBlock.dataset.old) * parseInt(itemPriceBlock.dataset.count));
        oldPrice.textContent = itemPriceBlock.dataset.oldtotalprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        // getTotalPrice();
    });
    counterMinus.addEventListener("click", function() {
        if (countGoods.innerText >= 2) {
        countGoods.innerText--;
        itemPriceBlock.dataset.count--;
        itemPriceBlock.dataset.totalprice = parseInt(itemPriceBlock.dataset.price) * parseInt(itemPriceBlock.dataset.count);
        goodPriceEl.textContent = itemPriceBlock.dataset.totalprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        itemPriceBlock.dataset.oldtotalprice = (parseInt(itemPriceBlock.dataset.old) * parseInt(itemPriceBlock.dataset.count));
        oldPrice.textContent = itemPriceBlock.dataset.oldtotalprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');        
        }
        // getTotalPrice();
    });  
}
  
  let countsBlock = document.querySelectorAll(".good");
  countsBlock.forEach(addHandlers);





  // Считаем общую сумму по корзине

//   const getTotalBasketPrice = () => {
//     totalPrice = ().toLocaleString("ru-RU");
//   }

  //Добавляем изменение цены в зависимости от количества товара

//   item-price-mobile__inbasket
//   price-before-mobile__count
//   item-price__inbasket
//   price-before__count  10 500
