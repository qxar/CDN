//控制header背景
$(function () {            
        //绑定滚动条事件
        $(window).bind("scroll", function () {
            var sTop = $(window).scrollTop();
            var sTop = parseInt(sTop);
            if(sTop===0){
                $(".header").css({"background":""})
            }else{
                $(".header").css({"background":"rgb(23, 101, 222)"})
            }
        });
    })

// 返回顶部按钮
$(function () {            
        //绑定滚动条事件
        $(window).bind("scroll", function () {
            var scrollTop = $(window).scrollTop();
            var scrollTop = parseInt(scrollTop);
            if(scrollTop>=1000){
                $("#back-top").css({"display":"block"})
            }else{
                $("#back-top").css({"display":"none"})
            }
        });
    })