$( window ).on( "load", function() {
    var but = $('.but');
    var conteinerMenu = $('.conteiner-menu');
    var i = 0;
     var posici = 0;
    but.click(function(){
       i = i+1;
        
        if (i % 2 != 0){
        conteinerMenu.removeClass("left");
        conteinerMenu.removeClass("active-left");
        
            
        conteinerMenu.addClass("active-right");
        conteinerMenu.addClass("right");
        } else{
        conteinerMenu.removeClass("right");  
        conteinerMenu.removeClass("active-right");
            
        conteinerMenu.addClass("active-left");
        conteinerMenu.addClass("left");
        }
        
    });
    
    function pos1(){ $('html, body').animate({scrollTop: $(".img2").offset().top }, 550);}
    function pos2(){ $('html, body').animate({scrollTop: $(".img1").offset().top }, 550);}
    function pos3(){ $('html, body').animate({scrollTop: $(".img3").offset().top }, 550);}
    function pos4(){ $('html, body').animate({scrollTop: $(".img2").offset().top }, 550);}
    function pos5(){ $('html, body').animate({scrollTop: $(".img4").offset().top }, 550);}
    function pos6(){ $('html, body').animate({scrollTop: $(".img3").offset().top }, 550);}
    
    var elem1 = $('#nav1');
    var elem2 = $('#nav2');
    var elem3 = $('#nav3');
    var elem4 = $('#nav4');
    var elem5 = $('#nav5');
    var elem6 = $('#nav6');
   
    elem1.click(function(){
        $('html, body').animate({scrollTop: $(".img2").offset().top }, 550);
    });
    elem2.click(function(){
        $('html, body').animate({scrollTop: $(".img1").offset().top }, 550);
    });
    elem3.click(function(){
       $('html, body').animate({scrollTop: $(".img3").offset().top }, 550);
    });
    elem4.click(function(){
        $('html, body').animate({scrollTop: $(".img2").offset().top }, 550);
    });
    elem5.click(function(){
        $('html, body').animate({scrollTop: $(".img4").offset().top }, 550);
    });
    elem6.click(function(){
        $('html, body').animate({scrollTop: $(".img3").offset().top }, 550);
    });
    
 /*  
setInterval(pos,300);
    var height = document.documentElement.clientHeight;
    var decHeight = Math.round(height/2);
    
function pos (){
  if ( ($(window).scrollTop() >= 3) && ($(window).scrollTop() <= decHeight)  ){                  
        $('html, body').animate({scrollTop: $(".img2").offset().top }, 250);
   }  else if ( ($(window).scrollTop() >= decHeight+1) && ($(window).scrollTop() <= height - 1)  ){                  
        $('html, body').animate({scrollTop: $(".img1").offset().top }, 250);
       
   }   else if ( ($(window).scrollTop() >= (height+3) ) && ($(window).scrollTop() <= (height + decHeight))  ){                  
        $('html, body').animate({scrollTop: $(".img3").offset().top }, 250);
   }    else if ( ($(window).scrollTop() >= (2*height - decHeight)) && ($(window).scrollTop() <= (2*height - 3))  ){                  
        $('html, body').animate({scrollTop: $(".img2").offset().top }, 250);
       
   }   else if ( ($(window).scrollTop() >= (2*height + 30)) && ($(window).scrollTop() <= (2*height + 280))  ){                  
        $('html, body').animate({scrollTop: $(".img4").offset().top }, 250);
   }   else if ( ($(window).scrollTop() >= (3*height - decHeight)) && ($(window).scrollTop() <= (3*height - 50))  ){                  
        $('html, body').animate({scrollTop: $(".img3").offset().top }, 250);
   }    
}
  */
    
  /*  $(window).scroll(function(){                              
   if ( ($(window).scrollTop() >= 100) && ($(window).scrollTop() <= 200)  ){                  
        $('html, body').animate({scrollTop: $(".img2").offset().top }, 500);
   }                    
         if ( ($(window).scrollTop() >= 400) && ($(window).scrollTop() <= 500)  ){                  
        $('html, body').animate({scrollTop: $(".img1").offset().top }, 500);
   }                    
});
   */ 
});