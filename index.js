const qrText=document.getElementById("txt");
const sizes=document.getElementById("size");
const GenerateBtn=document.getElementById("GenerateBtn");
const DownloadBtn=document.getElementById("DownloadBtn");
const qrContainer=document.querySelector(".body");

let s=sizes.value;
GenerateBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    if(qrText.value.length)
    generateQRCode();
})
