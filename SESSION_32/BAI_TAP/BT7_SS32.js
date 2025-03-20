document.querySelectorAll(".container img").forEach(img => {
    img.addEventListener("click", function () {
        if (this.classList.contains("enlarged")) {
            this.classList.remove("enlarged");
            document.body.removeEventListener("click", resetImage);
        } else {
            document.querySelectorAll(".enlarged").forEach(enlargedImg => {
                enlargedImg.classList.remove("enlarged");
            });
            this.classList.add("enlarged");
            document.body.addEventListener("click", resetImage);
        }
    });
    function resetImage(event) {
        if (!event.target.classList.contains("enlarged")) {
            document.querySelectorAll(".enlarged").forEach(enlargedImg => {
                enlargedImg.classList.remove("enlarged");
            });
            document.body.removeEventListener("click", resetImage);
        }
    }
});
let style = document.createElement("style");
style.innerHTML = `
    .enlarged {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80%;
        height: auto;
        z-index: 1000;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
    }
`;
document.head.appendChild(style);
