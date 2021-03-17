

function getReg() {
    $regPhone=(/^\d{11}$/g).test($("#phoneNum").val());
    $regCode=(/^[A-Za-z\d]{4}$/g).test($(".code").val());
    $regUser=(/^[a-zA-Z0-9_-]{4,16}$/).test($("#user").val());
    $regPassword=(/^[\w]{6,18}$/g).test($("#password").val());
}
/*$("#phoneNum").on("blur",function () {
    if(!($("#phoneNum").val().match($regPhone))){
        $($("#phoneNum").prev().css("display","block").children().get(0)).text("您输入的手机号有误，需为11位纯数字格式")
    }
}).on("focus",function () {
    $("#phoneNum").prev().css("display","none")
});*/

$("#phoneNum").on("blur",function () {
    getReg();
    if(!$regPhone){
        $($("#phoneNum").prev().css("display","block").children().get(0)).text("您输入的手机号有误，需为11位纯数字格式")
    }
}).on("focus",function () {
    $("#phoneNum").prev().css("display","none")
});

$(".code").on("blur",function () {
    getReg();
    if(!$regCode){
        $($(".code").prev().css("display","block").children().get(0)).text("验证码输入有误")
    }
}).on("focus",function () {
    $(".code").prev().css("display","none")
});

$("#user").on("blur",function () {
    getReg();
    if(!$regUser){
        $($("#user").prev().css("display","block").children().get(0)).text("4到16位（字母，数字，下划线，减号）")
    }
}).on("focus",function () {
    $("#user").prev().css("display","none")
});

$("#password").on("blur",function () {
    getReg();
    if(!$regPassword){
        $($("#password").prev().css("display","block").children().get(0)).text("6到18位字母数字下划线")
    }
}).on("focus",function () {
    $("#password").prev().css("display","none")
});

$("#rePassword").on("blur",function () {
    if($("#password").val()!==$("#rePassword").val()){
        $($("#rePassword").prev().css("display","block").children().get(0)).text("两次密码不一致")
    }
}).on("focus",function () {
    $("#rePassword").prev().css("display","none")
});

