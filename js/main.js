$( document ).ready(function() {
    $("a[href^='http:'], a[href^='https:']").not("[href*='mathiaslindholm.com']").attr({target: '_blank', rel: 'noopener'});

    var nightmode = false
    $('#toggle').click(function(e) {
        e.preventDefault()
        if (nightmode == false) {
            $('.bg-white').toggleClass('bg-white bg-oc-gray-9');
            $('.oc-gray-8').toggleClass('oc-gray-8 oc-gray-1');
            $('.oc-blue-8').toggleClass('oc-blue-8 oc-blue-4');
            $('#inner').animate({left: '+=16px'}, 'fast')
            nightmode = true
        } else {
            $('.bg-oc-gray-9').toggleClass('bg-oc-gray-9 bg-white');
            $('.oc-gray-1').toggleClass('oc-gray-1 oc-gray-8');
            $('.oc-blue-4').toggleClass('oc-blue-4 oc-blue-8');
            $('#inner').animate({left: '-=16px'}, 'fast')
            nightmode = false
        }
    })
});
