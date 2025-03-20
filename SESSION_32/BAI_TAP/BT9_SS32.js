let progressBar = document.querySelector('.progress-bar');
let increaseBtn = document.getElementById('increase');
let decreaseBtn = document.getElementById('decrease');
let progress = 0;

function updateProgressBar() {
    progressBar.style.width = progress + '%';
    progressBar.style.opacity = 0.3 + (progress / 100) * 0.7; 
    document.body.style.opacity = 0.3 + (progress / 100) * 0.7;
}
increaseBtn.addEventListener('click', () => {
    if (progress < 100) {
        progress += 10;
        updateProgressBar();
    }
});
decreaseBtn.addEventListener('click', () => {
    if (progress > 0) {
        progress -= 10;
        updateProgressBar();
    }
});
updateProgressBar();