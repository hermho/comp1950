/*
-------------------------------------
COMP 1950 PROJECT

Author: Joanna Flores (#A00733856)
Last Updated: 2015-Nov-30
-------------------------------------
*/

$(function() {
    /*
    ++++++++++++++++++++++++++++++++
    For activating the side navigation
    ++++++++++++++++++++++++++++++++
    */
    $("#menu").mmenu({
        slidingSubmenus: true
    });
    
    /*
    ++++++++++++++++++++++++++++++++
    For switching styles
    ++++++++++++++++++++++++++++++++
    */
    
    $("#switchstylelink").click(function(event){
        event.preventDefault();

        var currentstyle = $(this).attr('class');
        if (currentstyle == "day") {
            setActiveStyleSheet('White on Black');
            
            $(this).removeClass("day");
            $(this).addClass("night");
        }
        else {
            setActiveStyleSheet('Black on White');
            
            $(this).removeClass("night");
            $(this).addClass("day");
        }
    });
});
