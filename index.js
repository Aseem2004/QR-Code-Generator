const qrText=document.getElementById("txt");
const sizes=document.getElementById("size");
const GenerateBtn=document.getElementById("GenerateBtn");
const DownloadBtn=document.getElementById("DownloadBtn");
const qrContainer=document.querySelector(".body");

let s=sizes.value;

sizes.addEventListener('change',(e)=>{
    s=e.target.value;
    qrText.value.length > 0 ? generateQRCode() : alert("Enter the text or URL to change size of QR code");
});

GenerateBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    qrText.value.length > 0 ? generateQRCode() : alert("Enter the text or URL to generate the QR code");
    generateQRCode();
});

DownloadBtn.addEventListener('click', ()=>{
    let img = document.querySelector('.body img');
    if(img !== null){
        let ImgAtrribute = img.getAttribute('src');
        DownloadBtn.setAttribute("href", ImgAtrribute);
    }
    else{
        DownloadBtn.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
    }
});

function generateQRCode(){            //From the qrcode.js library (https://davidshimjs.github.io/qrcodejs/)
    qrContainer.innerHTML = "";
    new QRCode(qrContainer, {
        text:qrText.value,
        height:s,
        width:s,
        colorLight:"#fff",
        colorDark:"#000",
    });
}
