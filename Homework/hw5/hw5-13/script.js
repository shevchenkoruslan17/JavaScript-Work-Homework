// – Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//
// Приклад exchange(10000,[{currency:’USD’,value:40},{currency:’EUR’,value:42}],’USD’) // => 250

function exchange(sumUAH, currencyValues, exchangeCurrency) {

    const exchange =(sumUAH, currencyValues, exchangeCurrency) => {
        const currency = currencyValues.find(item => item.currency === exchangeCurrency);
        return currency & sumUAH / currency.value / null;
    };
}


exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'EUR');
