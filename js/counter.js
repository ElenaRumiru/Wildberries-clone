const totalPrice = document.querySelector('.total-price');
const totalCount = document.querySelector('.total-count');
const totalPriceOld = document.querySelector('.total-old-price');
const totalDiscount = document.querySelector('.total-discount');
const goodCount = document.querySelectorAll('.number-input');




//Пишем функцию обработчик по клику в каждом товаре
function addHandlers(count) {
    let itemPriceBlock = count.querySelector('.item-price');
    let counterMinus = count.querySelector('.number-minus');
    let counterPlus = count.querySelector('.number-plus');
    let countGoods = count.querySelector('.number-input');
    let goodPriceEl = count.querySelector('.item-price__inbasket');
    let oldPrice = count.querySelector('.price-before__count');
	let countLeft = count.querySelector('.left');	

		//Выносим функцию изменения количества товара и цены чтобы не повторяться в условиях
	const changeCount = () => {
	countGoods.value++;
	itemPriceBlock.dataset.count++;
		// Считаем стоимость товаров: количество умножить на цену со скидкой
	itemPriceBlock.dataset.totalprice = parseInt(itemPriceBlock.dataset.price) * parseInt(itemPriceBlock.dataset.count);
	goodPriceEl.textContent = itemPriceBlock.dataset.totalprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
		// Считаем стоимость товаров: количество умножить на цену без скидки
	itemPriceBlock.dataset.oldtotalprice = (parseInt(itemPriceBlock.dataset.old) * parseInt(itemPriceBlock.dataset.count));
	oldPrice.textContent = itemPriceBlock.dataset.oldtotalprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
		// Убираем серый цвет минуса
	counterMinus.classList.remove('gray_color');
		// Прибавляет стоимость товара к общей сумме в корзине
	totalPrice.dataset.baskettotalprice = (parseInt(totalPrice.dataset.baskettotalprice) + parseInt(itemPriceBlock.dataset.price));
	totalPrice.textContent = totalPrice.dataset.baskettotalprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
		// Прибавляет количество товаров к общей сумме в корзине
	totalCount.dataset.baskettotalcount = parseInt(totalCount.dataset.baskettotalcount) + 1;
	totalCount.textContent = totalCount.dataset.baskettotalcount.toString();
		// Прибавляет стоимость товара к общей сумме без скидки в корзине
	totalPriceOld.dataset.baskettotalpriceold = (parseInt(totalPriceOld.dataset.baskettotalpriceold) + parseInt(itemPriceBlock.dataset.price));
	totalPriceOld.textContent = totalPriceOld.dataset.baskettotalpriceold.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

   //Обрабочик на увеличение количества товара
    counterPlus.addEventListener("click", function() {
		if (count === countsBlock[0] && countGoods.value < 3) {
			changeCount();	
			countLeft.textContent--;
			// Прибавляет скидку 50% по товару к общей скидке
			totalDiscount.dataset.basketdiscount = (parseInt(totalDiscount.dataset.basketdiscount) + (parseInt(itemPriceBlock.dataset.price) * 0.5));
			totalDiscount.textContent = totalDiscount.dataset.basketdiscount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
		} else if (count === countsBlock[2] && countGoods.value < 4) {
			changeCount();				
			countLeft.textContent--;
			// Прибавляет скидку 50% по товару к общей скидке
			totalDiscount.dataset.basketdiscount = (parseInt(totalDiscount.dataset.basketdiscount) + (parseInt(itemPriceBlock.dataset.price) * 0.5));
			totalDiscount.textContent = totalDiscount.dataset.basketdiscount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');		
		} else if (count === countsBlock[1]) {
			changeCount();
			// Прибавляет скидку 10% по товару к общей скидке
			totalDiscount.dataset.basketdiscount = (parseInt(totalDiscount.dataset.basketdiscount) + (parseInt(itemPriceBlock.dataset.price) * 0.1));
			totalDiscount.textContent = totalDiscount.dataset.basketdiscount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
		}
    });

	//Обрабочик на уменьшение количества товара
    counterMinus.addEventListener("click", function() {
        if (countGoods.value >= 2) {
		countGoods.value--;  // -1 в input
        itemPriceBlock.dataset.count--; // -1 в data-count
			// Считаем стоимость товаров: количество умножить на цену со скидкой
        itemPriceBlock.dataset.totalprice = parseInt(itemPriceBlock.dataset.price) * parseInt(itemPriceBlock.dataset.count);
        goodPriceEl.textContent = itemPriceBlock.dataset.totalprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        	// Считаем стоимость товаров: количество умножить на цену без скидки
		itemPriceBlock.dataset.oldtotalprice = (parseInt(itemPriceBlock.dataset.old) * parseInt(itemPriceBlock.dataset.count));
        oldPrice.textContent = itemPriceBlock.dataset.oldtotalprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
			// Вычитает стоимость товара к общей сумме в корзине
		totalPrice.dataset.baskettotalprice = (parseInt(totalPrice.dataset.baskettotalprice) - parseInt(itemPriceBlock.dataset.price));
		totalPrice.textContent = totalPrice.dataset.baskettotalprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
			// Вычитает 1 товар из общей суммы в корзине
		totalCount.dataset.baskettotalcount = parseInt(totalCount.dataset.baskettotalcount) - 1;
		totalCount.textContent = totalCount.dataset.baskettotalcount.toString();
			// Вычитает стоимость товара к общей сумме без скидки в корзине
		totalPriceOld.dataset.baskettotalpriceold = (parseInt(totalPriceOld.dataset.baskettotalpriceold) - parseInt(itemPriceBlock.dataset.price));
		totalPriceOld.textContent = totalPriceOld.dataset.baskettotalpriceold.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
			if (countLeft !== null) {			
				countLeft.textContent++; // Осталось n товаров счетчик
			}
			if (countGoods.value == 1) {			
				counterMinus.classList.add('gray_color');
			}
			if (count === countsBlock[0] || count === countsBlock[2]) {
				// Вычитает скидку 50% по товару к общей скидке
				totalDiscount.dataset.basketdiscount = (parseInt(totalDiscount.dataset.basketdiscount) - (parseInt(itemPriceBlock.dataset.price) * 0.5));
				totalDiscount.textContent = totalDiscount.dataset.basketdiscount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
			} else if (count === countsBlock[1]) {
				// Вычитает скидку 10% по товару к общей скидке
				totalDiscount.dataset.basketdiscount = (parseInt(totalDiscount.dataset.basketdiscount) - (parseInt(itemPriceBlock.dataset.price) * 0.1));
				totalDiscount.textContent = totalDiscount.dataset.basketdiscount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
			} 
        }
        
    });  
	
}
  // Находим все товары
let countsBlock = document.querySelectorAll(".good");
  //Для каждого товара вызываем функцию обработчик кликов
countsBlock.forEach(addHandlers);


// Добавляем корректную работу "Выбрать все"
const chooseAllGoods = document.querySelector('.checkboxesAll');

chooseAllGoods.addEventListener("click", function() {
	const basketPage = document.querySelector('.basket-page');
 	let items = basketPage.querySelectorAll('.checkboxes');
	let len = items.length;
  	for (let i = 0; i < len; i += 1) {
		if (items.item(i).type && items.item(i).type === "checkbox") {       
		if (chooseAllGoods.checked) {
		items.item(i).checked = true;
		} else {
		items.item(i).checked = false;
		}       
  }
}
})


