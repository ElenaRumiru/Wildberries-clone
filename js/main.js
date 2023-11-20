
function addHandlers(count) {
    let counterMinus = count.querySelector('.counter-minus');
    let counterPlus = count.querySelector('.counter-plus');
    let countGoods = count.querySelector('.counter-count');
    counterPlus.addEventListener("click", function() {
        countGoods.innerText++;
    });
    counterMinus.addEventListener("click", function() {
        if (countGoods.innerText >= 2) {
        countGoods.innerText--;
        }
    });
  }
  
  let countsBlock = document.querySelectorAll(".item-count__counter");
  countsBlock.forEach(addHandlers);

