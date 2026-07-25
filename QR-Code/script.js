const qrContainer = document.getElementById("qrcode");
const url = document.getElementById('url');

const generateQRCode = () => {
    const link = url.value;
    qrContainer.innerHTML = "";
    const qrcode = new QRCode(qrContainer, {
        text: `${link}`, // The URL or text to encode
        width: 256,                 // Width in pixels
        height: 256,                // Height in pixels
        colorDark: "#000000",       // Color of the dots
        colorLight: "#ffffff",      // Background color
        correctLevel: QRCode.CorrectLevel.H // Error correction level (L, M, Q, H)
    });
    qrcode.makeCode(`${link}`);

}

document.getElementById('button').addEventListener('click', e => {
    generateQRCode();
});