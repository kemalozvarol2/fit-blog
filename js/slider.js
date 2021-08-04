$(document).ready(function(){
  $('.slider-container').slick({
    autoplay: false,
    speed:1000,
    dots:true,
    arrows:false
  });
});

$(document).ready(function(){

          $('.slider-container .slider').each(function(){
               var current_class = $(this).attr('class').split(" ")[1];
               var current_id = current_class.substr(current_class.length - 1);
               $('.' + current_class).css('background-image','url("images/slider/' + current_id + '.jpg")');
          });
          $('.recent').each(function(){
               var current_class = $(this).attr('class').split(" ")[1];
               var current_id = current_class.substr(current_class.length - 1);
               $('.' + current_class).css('background-image','url("images/slider/' + current_id + '.jpg")');
          });
});

$(document).ready(function(){
     $('.slider .overlay h1 a').each(function(){
          if($(this).text().length > 20){
               $(this).css('font-size','2.5rem');
               $(this).css('display','block');
               $(this).css('line-height','3rem');
          };
          if($(this).text().length < 12){
               $(this).css('font-size','9rem');
          };
     });
});

$(document).ready(function(){
     $('.recent .overlay h1').each(function(){
          if($(this).text().length > 20){
               $(this).css('font-size','2rem');
               $(this).parent().css('padding-bottom','3rem');
          };
          if($(this).text().length < 12){
               $(this).css('font-size','9rem');
          };
     });
});

$('#burger').click(function(){
     $('.categories').slideToggle(300);
});
