
    const PRICE_KEY = 'price';
    const TIME_KEY = 'lastReloadTime';

    let currentPrice = Number(localStorage.getItem(PRICE_KEY)) || 100;
    let lastReloadTime = Number(localStorage.getItem(TIME_KEY)) || 0;

    const now = Date.now();


    if (now - lastReloadTime >= 10000) {
        currentPrice += 10;

        localStorage.setItem(PRICE_KEY, currentPrice);
        localStorage.setItem(TIME_KEY, now);
    }

    document.getElementById('price').textContent = currentPrice + 'грн';
