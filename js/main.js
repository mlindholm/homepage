var nightmode = false
var now = new Date()
var hours = now.getHours()

function setNightMode() {
    $('.bg-white').toggleClass('bg-white bg-oc-gray-9');
    $('.oc-gray-8').toggleClass('oc-gray-8 oc-gray-1');
    $('.oc-blue-8').toggleClass('oc-blue-8 oc-blue-4');
    $('#inner').animate({left: '+=16px'}, 'fast')
    nightmode = true
}

function setDayMode() {
    $('.bg-oc-gray-9').toggleClass('bg-oc-gray-9 bg-white');
    $('.oc-gray-1').toggleClass('oc-gray-1 oc-gray-8');
    $('.oc-blue-4').toggleClass('oc-blue-4 oc-blue-8');
    $('#inner').animate({left: '-=16px'}, 'fast')
    nightmode = false
}



$( document ).ready(function() {
    $("a[href^='http:'], a[href^='https:']").not("[href*='mathiaslindholm.com']").attr({target: '_blank', rel: 'noopener'});

    $('#toggle').click(function(e) {
        e.preventDefault()
        if (!nightmode) {
            setNightMode()
        } else {
            setDayMode()
        }
    })
});
