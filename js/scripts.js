$(document).ready(function() {
    // using the button tag hide and show the p tags
    $('#hide').click(function(){
        $('p').hide();
    })
    $('#show').click(function(){
        $('p').show();
    })

    // using the octocat class create an alert that states the user clicked on an octocat
    $('.octocat').click(function(){
        alert('You hovered over an Octocat!')
    })

    // add a color class to the h1 tag
    $('h1').click(function() {
        $('h1').css('color', 'purple');
    })
    $('#topics').click(function(){
        $('a').fadeIn();
    })
    $('.bee').hover(function(){
        $('img').fadeOut();
    })
    $('#fadeInImg').hover(function(){
        $('.bee').fadeIn();
    })
})
/*
1. declare a function
2. give instructions - hide just p tags

*/