const qrIpt = document.querySelector(".form .url"),
generateBtn = document.querySelector(".form .frames"),
qrImg = document.querySelector(".qr-code img");
let preValue;

generateBtn.addEventListener("click", () => {
    let qrValue = qrIpt.value.trim();
    if(!qrValue || preValue === qrValue) return;
    preValue = qrValue;
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=275x275&color=017dcc&data=${qrValue}`;
});

qrIpt.addEventListener("keyup", () => {
    if(!qrIpt.value.trim()) {
        wrapper.classList.remove("active");
        preValue = "";
    }
});