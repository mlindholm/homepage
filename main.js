$( document ).ready(function() {
    $("a[href^='http:'], a[href^='https:']").not("[href*='mathiaslindholm.com']").attr('target','_blank');

    var nightmode = false
    $('#toggle').click(function(e) {
        e.preventDefault()
        if (nightmode == false) {
            $('.bg-white').toggleClass('bg-white bg-near-black');
            $('.near-black').toggleClass('near-black white');
            $('.b--black-10').toggleClass('b--black-10 b--white-10');
            $('.b--black-20').toggleClass('b--black-20 b--white-20');
            $('#inner').animate({left: '+=16px'}, 'fast')
            nightmode = true
        } else {
            $('.bg-near-black').toggleClass('bg-near-black bg-white');
            $('.white').toggleClass('white near-black');
            $('.b--white-10').toggleClass('b--white-10 b--black-10');
            $('.b--white-20').toggleClass('b--white-20 b--black-20');
            $('#inner').animate({left: '-=16px'}, 'fast')
            nightmode = false
        }
    })
});
