
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
        goodPriceEl.textContent = (parseInt(itemPriceBlock.dataset.price) * countGoods.innerText).toLocaleString("ru-RU");
        oldPrice.textContent = (parseInt(itemPriceBlock.dataset.old) * countGoods.innerText).toLocaleString("ru-RU");
    });
    counterMinus.addEventListener("click", function() {
        if (countGoods.innerText >= 2) {
        countGoods.innerText--;
        goodPriceEl.textContent = (parseInt(itemPriceBlock.dataset.price) * countGoods.innerText).toLocaleString("ru-RU");
        oldPrice.textContent = (parseInt(itemPriceBlock.dataset.old) * countGoods.innerText).toLocaleString("ru-RU");
        }
    });  
    
}
  
  let countsBlock = document.querySelectorAll(".good");
  countsBlock.forEach(addHandlers);


  //Добавляем изменение цены в зависимости от количества товара

//   item-price-mobile__inbasket
//   price-before-mobile__count
//   item-price__inbasket
//   price-before__count  10 500
