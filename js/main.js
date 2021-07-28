$(function(){
  //그래픽부분 팝업창 작동
    $(".box").each(function () {
     $(this).click(function () {
       var img_name = $(this).find("a");
       var img_src = $(img_name).attr("phref");
      //  var img_title = $(img_name).attr("title");
       var img_size = $(img_name).attr("data");
       var img_padding = $(img_name).attr("padding");
       $(".pop").show();
       $(".pop img").attr("src", img_src);
      //  $(".pop .txt").text( img_title);
       $(".pop img").width(img_size);
       $(".pop img").css({'margin-top':img_padding});
     });
   });

    

   $(document).ready(function() {
	
    /*스크롤 내릴때 어바웃 스킬 막대바 애니메이션 */
    $(window).scroll(function() { 
      /*if ($(document).scrollTop()>300) { 
            $(".skill>li").addClass("line");
      }*/
      
    if ($(document).scrollTop()>300) {
        $(".skill>li").each(function(j){
          setTimeout(function(){
            $(".skill>li").eq(j).addClass("line");
          }, j * 500 );
        });
    }
      
      
      /*오른쪽 메뉴가 어바웃부터 나타남*/
    
          if($(this).scrollTop() > 600) {
          $("#remote").css('display', 'block');
         } else {
         $("#remote").css('display', 'none');   
       }
  
      
    /*포트폴리오1,3 왼쪽에서 슬라이드+패이드인*/
  
          $("#portfolio1,#portfolio3").each(function(i){
              
              var bottom_of_element = $(this).offset().top + $(this).height();
              var bottom_of_window = $(window).scrollTop() + $(window).height();
              
              if( bottom_of_window > bottom_of_element ){
                  $(this).animate({"opacity":"1","margin-left":"0px"},1000);
              }
              
          }); 
  
    
    /*포트폴리오2,4	오른쪽에서 슬라이드+패이드인*/
  
          $("#portfolio2,#portfolio4").each(function(i){
              
              var bottom_of_element = $(this).offset().top + $(this).height();
              var bottom_of_window = $(window).scrollTop() + $(window).height();
              
              if( bottom_of_window > bottom_of_element ){
                  $(this).animate({"opacity":"1","margin-left":"0px"},1000);
              }
              
          }); 
  
  
    /*오른쪽 메뉴 스크롤*/
        //어바웃 스크롤
  
                  if($(this).scrollTop() > 500) {
                      $("#list2").css('background-color', '#e5e5e5');
                  } else {
                      $("#list2").css('background-color', 'transparent');
                  }
  
  
                  if($(this).scrollTop() > 1500) {
                      $("#list2").css('background-color', 'transparent');
                  } 
  
        //포트폴리오1 스크롤
  
                  if($(this).scrollTop() > 1600) {
                      $("#list3").css('background-color', '#e5e5e5');
                  } else {
                      $("#list3").css('background-color', 'transparent');
                  }
  
  
                  if($(this).scrollTop() > 2400) {
                      $("#list3").css('background-color', 'transparent');
                  } 
  
        //포트폴리오2 스크롤
  
                  if($(this).scrollTop() > 2500) {
                      $("#list4").css('background-color', '#e5e5e5');
                  } else {
                      $("#list4").css('background-color', 'transparent');
                  }
  
                  if($(this).scrollTop() > 3300) {
                      $("#list4").css('background-color', 'transparent');
                  } 
   
        //포트폴리오3 스크롤
  
                  if($(this).scrollTop() > 3400) {
                      $("#list5").css('background-color', '#e5e5e5');
                  } else {
                      $("#list5").css('background-color', 'transparent');
                  }
  
  
                  if($(this).scrollTop() > 4300) {
                      $("#list5").css('background-color', 'transparent');
                  } 
  
        //포트폴리오4 스크롤
  
                  if($(this).scrollTop() > 4450) {
                      $("#list6").css('background-color', '#e5e5e5');
                  } else {
                      $("#list6").css('background-color', 'transparent');
                  }
  
  
                  if($(this).scrollTop() > 5300) {
                      $("#list6").css('background-color', 'transparent');
                  } 
  
        //디자인 스크롤
  
                  if($(this).scrollTop() > 5300) {
                      $("#list7").css('background-color', '#e5e5e5');
                  } else {
                      $("#list7").css('background-color', 'transparent');
                  }
  
  
                  if($(this).scrollTop() > 5800) {
                      $("#list7").css('background-color', 'transparent');
                  } 
  
        //콘택트 스크롤
  
                  if($(this).scrollTop() > 5900) {
                      $("#list8").css('background-color', '#e5e5e5');
                  } else {
                      $("#list8").css('background-color', 'transparent');
                  }
   
  
                  if($(this).scrollTop() > 6500) {
                      $("#list8").css('background-color', 'transparent');
                  } 
    
      
      
    });
    
    
    
  
        
  
    /*디자인 영역 화살표로 하나씩 넘어가기*/
    $("#leftBtn").click(function(){
      $("#rolling").stop().animate({left:"+=370px"},600,function(){
        $("#rolling").prepend($("#rolling>:last-child"));
        $("#rolling").css("left","-370px");
      });		
      
    });
    $("#rightBtn").click(function(){
      $("#rolling").stop().animate({left:"-=200px"},600,function(){
        $("#rolling").append($("#rolling>:first-child"));
        $("#rolling").css("left","-370px");			
      });
    });
  
    /*이벤트 이미지 클릭시 팝업활성화*/
    
    $("#rolling>img").click(function(){
      var $img1 = $(this).attr("src");
      var $img2 = $img1.substr(-4);
      var $img3 = $img1.slice(0,-4) + "_big" + $img2;
      var $alt = $(this).children("img").eq(0).attr("alt");
      $("#popup").fadeIn();
      $("#popup>img").attr({"src":$img3,"alt":$alt});
      $("#popup>h2").text($alt);
      $("body").css("overflow","hidden");
    });
  
    ////////////////////////////////////////
    $("#popup").click(function(){
      enterkey();
    });
    $(document).keydown(function(key) {
      
    /*esc 누르면 팝업사라짐*/
      if (key.keyCode == 27) {
              enterkey();
           }
      });
    function enterkey() {
          $("#popup").fadeOut();
      $("body").css("overflow","auto");
    }	
    
    
    
  });
  
   });