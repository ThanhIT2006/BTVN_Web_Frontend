let count = 0;
document.getElementById('countButton').addEventListener('click', () => {
    count++;
    document.getElementById('count').textContent = count;
});