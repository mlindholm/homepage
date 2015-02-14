jQuery("a[href^='http:'], a[href^='https:']").not("[href*='mathiaslindholm.com']").attr('target','_blank');
jQuery("a[href^='http:'], a[href^='https:']").not("[href*='localhost']").attr('target','_blank');
jQuery("a[href$='.pdf']").attr('target','_blank');

$(document).ready(function() {

  // show grid
    $('body').keydown(function(e) {
      if(e.keyCode == 87) {
        $('body').toggleClass('grid-baseline');
      }
    });

	//lazyload images
	$('.project-images img').unveil();

});