const rates = {
    1: [1, 1/2, 8, 2/5, 10, 1/3, 5, 1/14, 5/3, 18],
    2: [3/2, 1, 14, 1, 15, 1/2, 1/20, 1/2, 1/100, 1/10, 3/2],
    3: [1/10, 1/14, 1, 1/15, 2/3, 1/20, 1/2, 1/100, 1/10, 3/2],
    4: [5/3, 2/3, 10, 1, 12, 1/2, 8, 1/10, 3/2, 20],
    5: [1/12, 1/18, 2/3, 1/12, 1, 1/35, 2/3, 1/110, 1/10, 1],
    6: [5/2, 3/2, 16, 30, 1, 16, 1/7, 3, 40],
    7: [1/8, 1/12, 3/2, 1/10, 5/4, 1/16, 1, 1/50, 1/4, 5/2], 
    8: [4/7, 2/7, 11/2, 2/5, 13/2, 4/15, 5,2, 0, 1, 21/2],
    9: [10, 5, 90, 7, 105, 4, 45, 1, 16, 176],
    10: [2/3, 1/3, 6, 1/2, 7, 2/7, 3, 1/16, 1, 11],
    11: [1/20, 1/35, 3,5, 1/25, 2/3, 1/45, 1/3, 1/176, 1/11, 1]
}

function calculate() {
    const value = event.target.value;
    const selectedCountry = document.querySelector('input[name="country"]:checked').value;
    const selectedRates = rates[selectedCountry];

    for (let i = 1; i <= 10; i++) {
        const element = document.getElementById(i.toString());
        const rate = selectedRates[i - 1];
        const result = value / rate;
        element.innerHTML = result.toFixed(2);
    }
}

function subscribe() {
    const radios = document.getElementsByName('country');
    for (let i = 0; i < radios.length; i++) {
        radios[i].addEventListener('change', select);
    }
}

function select(event) {
    const cash = document.getElementById('cash');
    const mouseEvent = new InputEvent('input');
    cash.dispatchEvent(mouseEvent);
}