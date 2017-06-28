$( document ).ready(function() {
    $("a[href^='http:'], a[href^='https:']").not("[href*='mathiaslindholm.com']").attr('target','_blank');

    var nightmode = false
    $('#toggle').click(function(e) {
        e.preventDefault()
        if (nightmode == false) {
            $('.bg-white').toggleClass('bg-white bg-near-black');
            $('.dark-gray').toggleClass('dark-gray light-gray');
            $('.near-black').toggleClass('near-black near-white');
            $('#inner').animate({left: '+=16px'}, 'fast')
            nightmode = true
        } else {
            $('.bg-near-black').toggleClass('bg-near-black bg-white');
            $('.light-gray').toggleClass('light-gray dark-gray');
            $('.near-white').toggleClass('near-white near-black');
            $('#inner').animate({left: '-=16px'}, 'fast')
            nightmode = false
        }
    })
});
