alert("Selamat datang di Pulau Aoshima~ 🌸")

const buttons =  document.querySelectorAll("button");

buttons.forEach((btn) => {
    btn.addEventListener("mouseover", () => {
        btn.style.transform = "scale(1.05)";
        btn.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)"
        btn.style.transition = "0.2s ease-in-out";
    });

    btn.addEventListener("mouseout", () => {
        btn.style.transform = "scale(1)";
        btn.style.boxShadow = "none";
    });
});

const imgs = document.querySelectorAll(".item img");

imgs.forEach((img) => {
    img.addEventListener("click", () => {
        img.style.transform = "rotate(2deg) scale(1.05)";
        setTimeout(() => {
            img.style.transform = "rotate(0) scale(1)";
        }, 300);
    });
});