let textElement = document.querySelector('.text');
let plusButton = document.querySelector('.plus');
let minusButton = document.querySelector('.minus');
let fontSize = 16; 
plusButton.addEventListener('click', () => {
    fontSize += 2;
    textElement.style.fontSize = fontSize + 'px';
});
minusButton.addEventListener('click', () => {
    fontSize -= 2; 
    if (fontSize < 10) fontSize = 10;
    textElement.style.fontSize = fontSize + 'px';
});
