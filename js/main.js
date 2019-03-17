
/* dropdown username options*/

$(".dropdown-username").click(function () {
    $('#usernamedrop').toggleClass("show");
})




/* dropdown settings*/

$(".dropdown-settings").click(function () {
    $('#settings').toggleClass("show");
})


/* dropdown language*/

$(".dropdown-language").click(function () {
    $('#language').toggleClass("show");
})




$(document).ready(function () {
    /* fullscreen btn*/
    $(".card-op-fullscreen").click(function () {

        $('.card').toggleClass("panel-fullscreen");
    });



    /* close btn*/
    $(".card-op-close").click(function () {
        $(this).parent().parent().parent().parent().addClass("remove-item");
    });


});


/* close minimize and maximize*/
$(".card-op-collapse").click(function () {
    $(this).toggleClass('fa-minus fa-plus');
    $(this).parent().parent().parent().children(".card-body").slideToggle("slow");
}, function () {
    $(this).toggleClass('fa-plus fa-minus');
    $(this).parent().parent().parent().children(".card-body").slideToggle("slow");
});



/* to show color menu*/
$(".card-op-color").click(function () {
$(this).parent().parent().parent().children(".card-color").fadeToggle("slow");
});

/* color blue*/
$(".card-color .header-color4").click(function () {
    $(this).parent().parent().parent().parent().children(".card-header").css({ 'background-color': '#1f92d1' })
    $(this).parent().parent().parent().parent().children(".card-header").children(".card-options").children("a").css({ 'color': '#fff' })
    $(this).parent().parent().parent().parent().children(".card-header").children(".card-title").css({ 'color': '#fff' })
});
/* color red*/
$(".card-color .header-color3").click(function () {
    $(this).parent().parent().parent().parent().children(".card-header").css({ 'background-color': '#ff6c74' })
    $(this).parent().parent().parent().parent().children(".card-header").children(".card-options").children("a").css({ 'color': '#fff' })
    $(this).parent().parent().parent().parent().children(".card-header").children(".card-title").css({ 'color': '#fff' })
});

/* color yellow*/
$(".card-color .header-color2").click(function () {
    $(this).parent().parent().parent().parent().children(".card-header").css({ 'background-color': '#ffd01e' })
    $(this).parent().parent().parent().parent().children(".card-header").children(".card-options").children("a").css({ 'color': '#fff' })
    $(this).parent().parent().parent().parent().children(".card-header").children(".card-title").css({ 'color': '#fff' })
});


/* color green*/
$(".card-color .header-color1").click(function () {
    $(this).parent().parent().parent().parent().children(".card-header").css({ 'background-color': '#89d689' })
    $(this).parent().parent().parent().parent().children(".card-header").children(".card-options").children("a").css({ 'color': '#fff' })
    $(this).parent().parent().parent().parent().children(".card-header").children(".card-title").css({ 'color': '#fff' })
});

/*Counter happineesmeter*/
$(document).ready(function () {

    $('.case-counter').counterUp({
        delay: 10,
        time: 1000
    });

});





/*daterangepicker bootsrab*/

$(function () {
    $('input[name="daterange"] , .input-group-append .calender').daterangepicker({
        opens: 'left'
    }, function (start, end, label) {
        console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
});



/*active class happiness meter bootsrab*/
$('.MapChart span').click(function(){
			
    var tab_id = $(this).attr('data-tab');

    $('.MapChart span').removeClass('current');

    $(this).addClass('current');
		
})

