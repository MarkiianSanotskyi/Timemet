

/*Scroll To TOP*/		
$(function() {
	$(window).scroll(function() {
		if($(this).scrollTop() != 0) {
			$('.to-top a').fadeIn();	
		} else {
			$('.to-top a').fadeOut();
		}
	});
 
	$('.to-top a').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});	
});

/*placeholder*/
$(document).ready(function(){
        $.Placeholder.init({ color : "#6E6E78" });
 });
 
 
$(document).ready(function(){
   $('a[href*=#]').bind("click", function(e){
      var anchor = $(this);
      $('html, body').stop().animate({
         scrollTop: $(anchor.attr('href')).offset().top
      }, 900);
      e.preventDefault();
   });
   return false;
});
