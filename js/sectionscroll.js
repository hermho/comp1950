/*
-------------------------------------
COMP 1950 PROJECT

Author: Joanna Flores (#A00733856)
Last Updated: 2015-Dec-05
-------------------------------------
*/

$(function() {
    
    /*
    ++++++++++++++++++++++++++++++++
    For activating the scrollify jQuery plugin 
    used for sectioning and scrolling
    ++++++++++++++++++++++++++++++++
    */
    
    var up = $("#up");
    var down = $("#down");
    var lecture = $("#lecture");
    var exercise = $("#exercise");
    
    //initializes the scrollify plugin
    $.scrollify({
        // defines the element that will be scrolled
        section : ".scroller",

        // Defines the easing method and speed.
        easing: "easeInOutExpo",
        scrollSpeed: 1100,

        // after scrollify is called, 
        // the following function hides/shows top navigational icons depending on the current section
        after:function() { displayLinks(arguments[0], arguments[1].length, arguments[1][arguments[0]]); },

        // A distance in pixels to offset each sections position by.
        offset : 0

    });
    
    //waits for the SVG elements to load before hiding the icons
    function checkReady() {
        
        if (exercise == null) {
            setTimeout(checkReady(), 2000);
        } else {
            hidePageLinks();
            up.css('visibility', 'hidden');
        }
    }
    setTimeout(checkReady(), 2000);
    
    /*
    ++++++++++++++++++++++++++++++++
    For hiding and showing the top navigational icons
    ++++++++++++++++++++++++++++++++
    */
    
    //hides the exercise and lecture icons
    function hidePageLinks() {
        //hides the exercise and lecture icons
        exercise.hide();
        lecture.hide();
        
        //resets the url for the exercise and lecture pages
        $("#exerciselink").attr("href","#");
        $("#lecturelink").attr("href","#");
    }
    
    //determines which icons to display depending on the current section
    function displayLinks(currentindex, length, currentsection) {
        //initially displays the up and down icons
        up.css('visibility', 'visible');
        down.css('visibility', 'visible');
        
        //initially hides the lecture and exercise icons
        hidePageLinks();
        
        //customizes the icons shown on each section
        if (currentindex == 0) {
            //hides the up icon on the first section
            up.css('visibility', 'hidden');
        }
        else if (currentindex == (length-1)) {
            //hides the down icon on the last section
            down.css('visibility', 'hidden');
        }
        
        /*
        ++++++++++++++++++++++++++++++
        Links to Exercises
        ++++++++++++++++++++++++++++++
        */
        var currentsectionname = currentsection[0].baseURI.split('#')[1];
        
        if (currentsectionname == "newcolormodel") {
            //forwards the user to the associated exercise for week 6 (new color models)
            $("#exerciselink").attr("href","/comp1950/exercises/week06.html#wk06ex01");
            exercise.show();
        }

        if (currentsectionname == "transitionsoptions") {
            //forwards the user to the associated exercise for week 6 (transitions)
            $("#exerciselink").attr("href","/comp1950/exercises/week06.html#wk06ex02a");
            exercise.show();
        }

        if (currentsectionname == "animations2") {
            //forwards the user to the associated exercise for week 6 (animations and keyframes)
            $("#exerciselink").attr("href","/comp1950/exercises/week06.html#wk06ex03");
            exercise.show();
        }

        if (currentsectionname == "multiplebackgrounds") {
            //forwards the user to the associated exercise for week 6 (multiple backgrounds)
            $("#exerciselink").attr("href","/comp1950/exercises/week06.html#wk06ex04");
            exercise.show();
        }

        /*
        ++++++++++++++++++++++++++++++
        Links to Lectures
        ++++++++++++++++++++++++++++++
        */
        if (currentsectionname == "wk06ex01") {
            //forwards the user to the associated lecture for week 6 (new color models)
            $("#lecturelink").attr("href","/comp1950/lectures/week06.html#newcolormodel");
            lecture.show();
        }

        if (currentsectionname == "wk06ex02a" || currentsectionname == "wk06ex02b") {
            //forwards the user to the associated lecture for week 6 (transitions)
            $("#lecturelink").attr("href","/comp1950/lectures/week06.html#transitionsoptions");
            lecture.show();
        }

        if (currentsectionname == "wk06ex03") {
            //forwards the user to the associated lecture for week 6 (animations and keyframes)
            $("#lecturelink").attr("href","/comp1950/lectures/week06.html#animations2");
            lecture.show();
        }

        if (currentsectionname == "wk06ex04") {
            //forwards the user to the associated lecture for week 6 (multiple backgrounds)
            $("#lecturelink").attr("href","/comp1950/lectures/week06.html#multiplebackgrounds");
            lecture.show();
        }
    }
    
    /*
    ++++++++++++++++++++++++++++++++
    For scrolling through the page
    ++++++++++++++++++++++++++++++++
    */
    
    up.click(function (e) {
        e.preventDefault();
        $.scrollify.previous();
    });
    
    down.click(function (e) {
        e.preventDefault();
        $.scrollify.next();
    });
    
    $(".lecture06 a").click(function (e) {
        e.preventDefault();
        var linkIndex = $(this).attr("href").split('#');
        var destination = linkIndex[0].split("/");
        var currentlocation = window.location.href.split("/");
        
        if (destination[destination.length-2] != currentlocation[currentlocation.length-2]) {
            //forwards the user to selected url
            window.location.href = $(this).attr("href");
        }
        else {
            //scrolls to the selected section
            $.scrollify.move("#" + linkIndex[1]);
        }
    });
    
    $(".exercise06 a").click(function (e) {
        e.preventDefault();
        var linkIndex = $(this).attr("href").split('#');
        var destination = linkIndex[0].split("/");
        var currentlocation = window.location.href.split("/");
        
        if (destination[destination.length-2] != currentlocation[currentlocation.length-2]) {
            //forwards the user to selected url
            window.location.href = $(this).attr("href");
        }
        else {
            //scrolls to the selected section
            $.scrollify.move("#" + linkIndex[1]);
        }
    });
    
    $(".animsition-link").each(function(i, obj) {
        
        var linkIndex = $(this).attr("href").split('#');
        var destination = linkIndex[0].split("/");
        var currentlocation = window.location.href.split("/");
        
        if (destination[destination.length-2] == currentlocation[currentlocation.length-2]) {
            $(this).removeClass("animsition-link");
        }
        else {
            $(this).addClass("animsition-link");
        }
    });
});
