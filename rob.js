$(document).ready(function(){
    $('#left').click(function() {
        $('#drop').slideToggle('slow')
    });
    
    /*$('#main h1').mouseenter(function(){
        $(this).effect('shake', 3, 'slow');
        });*/
    
    $('#main h1').click(function(){
        $(this).animate({fontSize: '5em'}, "slow");
        $(this).animate({fontSize: '2em'}, "slow");
        $(this).animate({fontSize: '3.5em'}, "slow");
    });
    

});

