$( document ).ready(function() {
    $("a[href^='http:'], a[href^='https:']").not("[href*='mathiaslindholm.com']").attr('target','_blank');

    var nightmode = false
    $('#toggle').click(function(e) {
        e.preventDefault()
        if (nightmode == false) {
            $('.bg-white').toggleClass('bg-white bg-near-black');
            $('.dark-gray').toggleClass('dark-gray near-white');
            $('.blue').toggleClass('blue light-blue');
            $('#inner').animate({left: '+=16px'}, 'fast')
            nightmode = true
        } else {
            $('.bg-near-black').toggleClass('bg-near-black bg-white');
            $('.near-white').toggleClass('near-white dark-gray');
            $('.light-blue').toggleClass('light-blue blue');
            $('#inner').animate({left: '-=16px'}, 'fast')
            nightmode = false
        }
    })
});
