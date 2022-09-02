const chosenCryptocurrency = document.querySelector('#cryptocurrency');
const price = document.querySelector('.price');
const higherUnitPrice = document.querySelector('.price--higher-unit-price b');
const quantityTraded = document.querySelector('.price--quantity-traded b');
const highestOfferPrice = document.querySelector('.price--highest-offer-price b');


chosenCryptocurrency.addEventListener('change', function () {
    const cryptocurrency = chosenCryptocurrency.value;

    if (!cryptocurrency) {
        price.style.display = 'none';
        return;
    };

    const promiseAnswer = fetch(`https://www.mercadobitcoin.net/api/${cryptocurrency}/ticker/`);

    promiseAnswer.then(answer => {
        const promiseBody = answer.json();

        promiseBody.then(body => {
            price.style.display = 'block';
            higherUnitPrice.textContent = Number(body.ticker.high).toFixed(2);
            quantityTraded.textContent = Number(body.ticker.vol).toFixed();
            highestOfferPrice.textContent = Number(body.ticker.buy).toFixed(2);
        })
    })

});