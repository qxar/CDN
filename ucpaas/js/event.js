//banner轮播图
window.onload = function() {
    var mySwiper = new Swiper ('.swiper-container', {
        loop: true, // 循环模式
        autoplay:true,
        delay:3000,
        effect:"fade",
        // 分页器
        pagination: {
          el: '.swiper-pagination',
          clickable:true,
        },      
      })      
  }