$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $('.topBtn').fadeIn(1000);
          }
        else{
            $('.topBtn').fadeOut(1000);
        }
    });

    $('.topBtn').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});
