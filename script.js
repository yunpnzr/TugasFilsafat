$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    $('layer_base2').css({
        'transform' : 'translate(0px, '+ wScroll +'%)'
    });

});


