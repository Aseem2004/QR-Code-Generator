const qrText=document.getElementById("txt");
const sizes=document.getElementById("size");
const GenerateBtn=document.getElementById("GenerateBtn");
const DownloadBtn=document.getElementById("DownloadBtn");
const qrContainer=document.querySelector(".body");

let s=sizes.value;
GenerateBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    qrText.value.length > 0 ? generateQRCode() : alert("Enter the text or URL to generate your QR code");;
    generateQRCode();
});

function generateQRCode(){
    qrContainer.innerHTML = "";
    new QRCode(qrContainer, {
        text:qrText.value,
        height:s,
        width:s,
        colorLight:"#fff",
        colorDark:"#000",
    });
}

sizes.addEventListener('change',(e)=>{
    s=e.target.value;
    generateQRCode;
});