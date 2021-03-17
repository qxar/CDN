window.onload = function() {
  // banner轮播图1
  var mySwiper = new Swiper ('.swiper-container1', {
      loop: true, // 循环模式
      autoplay:true,
      delay:3000,
      effect:"fade",
      // 分页器
      pagination: {
        el: '.swiper-pagination1',
        clickable:true,
      },      
    })  
  // 合作伙伴轮播图
  var certifySwiper = new Swiper('.swiper-container2', {
    watchSlidesProgress: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    loopedSlides: 5,
    autoplay: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination2',
      //clickable :true,
    },
    on: {
      progress: function(progress) {
        for (i = 0; i < this.slides.length; i++) {
          var slide = this.slides.eq(i);
          var slideProgress = this.slides[i].progress;
          modify = 1;
          if (Math.abs(slideProgress) > 1) {
            modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
          }
          translate = slideProgress * modify * 260 + 'px';
          scale = 1 - Math.abs(slideProgress) / 5;
          zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
          slide.transform('translateX(' + translate + ') scale(' + scale + ')');
          slide.css('zIndex', zIndex);
          slide.css('opacity', 1);
          if (Math.abs(slideProgress) > 3) {
            slide.css('opacity', 0);
          }
        }
      },
      setTransition: function(transition) {
        for (var i = 0; i < this.slides.length; i++) {
          var slide = this.slides.eq(i)
          slide.transition(transition);
        }
      }
    }
  })
  // 宣传视频
  //点击播放按钮
  $('.play_video').click(function(){
    $(document.body).css({
      "overflow-y": "hidden"
    });
    $('.shadow').css("display","block");
    $('.video-panel').css("display","block");
    $('video').trigger('play');
  })
  //点击关闭按钮关闭
  $('.shut img').click(function(){
    shut_video()
  })
  //点击视频外区域关闭
  $('.shadow').click(function(){
    shut_video()
  })
  function shut_video(){
    $(document.body).css({
      "overflow-y": "auto"
    });
    $('.shadow').css("display","none");
    $('.video-panel').css("display","none");
    $('video').trigger('pause');
  }
}
