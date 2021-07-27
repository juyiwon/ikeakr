$(function(){
   $(".regular").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true
      });
  $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,
        dots: true,
        arrows: true,
        autoplay:{
          delay:5000
        }
      });

  $(".close").click(function(){
    $('#pop_up').hide();
  })

   slide = setInterval(function(){ 
            $('.notice_list >li:nth-child(1)').animate({ 
                'margin-top':(-2)+'em' },600,function(){ 
                    $('.notice_list').append($('.notice_list >li:nth-child(1)')); 
                    $('.notice_list > li:nth-child(3)').css('margin-top','0px'); 
                    });
             },2500); 


/* var lang = 0;
$('.lang').click(function(){
  $('.top div.login_box').hide();
  $('.top button.login').removeClass('on');
  login = 0;
  $('.top div.search_box').hide();
  $('.top button.search').removeClass('on');
  search = 0;
  if(lang == 0) {
  $('.lang_box').fadeIn();
  $(this).addClass('on');
  lang = 1;
  } else{
    $('.lang_box').fadeOut();
    $(this).removeClass('on');
    lang = 0;
  }
})

var login = 0;
$('.login').click(function(){
  $('.top div.lang_box').hide();
  $('.top button.lang').removeClass('on');
  lang = 0;
  $('.top div.search_box').hide();
  $('.top button.search').removeClass('on');
  search = 0;
  if(login == 0) {
  $('.login_box').fadeIn();
  $('.top div').addClass('on');
  login = 1;
  } else{
    $('.login_box').fadeOut();
    $(this).removeClass('on');
    login = 0;
  }
})

var search = 0;
$('.search').click(function(){
  $('.top div.lang_box').hide();
  $('.top button.lang').removeClass('on');
  lang = 0;
  $('.top div.login_box').hide();
  $('.top button.login').removeClass('on');
  login = 0;
  if(search == 0) {
  $('.search_box').fadeIn();
  $('.top div').addClass('on');
  search = 1;
  } else{
    $('.search_box').fadeOut();
    $(this).removeClass('on');
    search = 0; 
  }
}) */




}) // 전체 끝
