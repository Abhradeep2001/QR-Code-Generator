const cont=$(".content");
qrInput=cont.find(".form input");
qrbutton=cont.find(".form button");
qrImg=cont.find(".qr-image img");
let preValue;


qrbutton.on("click",function(){
    let qrValue=qrInput.val().trim();
    if(!qrValue || preValue === qrValue){
        return;
    }
    preValue=qrValue;
    // console.log(qrValue);
    qrbutton.text("Wait, QR Code is generating!!");
    qrImg.attr("src",'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}');
    qrImg.on("load",function(){
        cont.addClass("active");
        qrbutton.text("Generate QR Code");
    });
    
});
qrInput.keyup(function(){
    if(!$(this).val().trim()){
        cont.removeClass("active");
        preValue= "";
    }
});
