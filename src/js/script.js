// change price (currency)
let prices = document.querySelectorAll('.price');

prices.forEach(price => {
	price.addEventListener('click', function() {
		let currency = this.getAttribute('data-currency');

		if (currency === 'usd') {
			changePrice(price, '₽', 'rub', 90);
		} else if (currency === 'rub') {
			changePrice(price, '€', 'eur', 0.0101);
		} else {
			changePrice(price, '$', 'usd', 1.1);
		}
	});
});

let changePrice = (element, sign, newCurrency, rate) => {
	element.querySelectorAll('span').forEach(span => {
		span.textContent = sign;
	});

	element.querySelectorAll('span').forEach((span) => {
		let price = parseInt(span.nextSibling.textContent);
		span.nextSibling.textContent = Math.round(price * rate);
	})

	element.setAttribute('data-currency', newCurrency);
};

// change price (period)
let periods = document.querySelectorAll('.period-text');

periods.forEach(period => {
	period.addEventListener('click', function() {
		let priceData = period.closest('.price-container').querySelector('.price-data');
	
		if (period.textContent === '/Months') {
			period.textContent = '/Days';
			priceData.textContent = (priceData.textContent / 30).toFixed(2);
		} else {
			period.textContent = '/Months';
			priceData.textContent = (priceData.textContent * 30).toFixed(2);
		}
	});
})