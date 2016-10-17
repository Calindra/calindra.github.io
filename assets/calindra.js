//= require vendor/jquery-2.1.3

$(function () {
    function adjustLogo() {
        var windowHeight = $(window).height();
        var windowWidth = $(window).width();
        var brandHeight = $('h1.brand').height();
        var brandLogo = $('h1.brand');
        var topBottomMargin = (windowHeight - brandHeight) / 2;
        if (windowWidth > 700) {
            brandLogo.css('margin-top', topBottomMargin)
                .css('margin-bottom', topBottomMargin);
        }else{
            brandLogo.css('margin-top', 100)
                .css('margin-bottom', 60);
        }
    }

    //$(window).on('resize', adjustLogo);
    adjustLogo();
    $("body").fadeIn(700);

    $("video").on('ended',restartvideo );

    function restartvideo(){
        var clone = $("video").clone();
        $("video").remove();
        $("body").prepend(clone);
        clone[0].play();
    }

});


