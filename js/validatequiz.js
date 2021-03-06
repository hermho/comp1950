/*
-------------------------------------
COMP 1950 PROJECT

Author: Joanna Flores (#A00733856)
Last Updated: 2015-Dec-02
-------------------------------------
*/

$(function() {
    
    /*
    ++++++++++++++++++++++++++++++++
    For setting the timer
    ++++++++++++++++++++++++++++++++
    */
    var quizTimer = new (function() {
        var $countdown,
            incrementTime = 70,
            currentTime = 18000,
            updateTimer = function() {
                $countdown.html(formatTime(currentTime));
                if (currentTime == 0) {
                    quizTimer.Timer.stop();
                    timerComplete();
                    return;
                }
                if (currentTime <= 9000) {
                    /*styles the timer in red*/
                    $countdown.removeClass("upperhalf");
                    $countdown.addClass("lowerhalf");
                }
                currentTime -= incrementTime / 10;
                if (currentTime < 0) currentTime = 0;
            },
            timerComplete = function() {
                alert("The quiz has ended. You can no longer submit the quiz.");
                
                hideSection();
            },
            init = function() {
                $countdown = $('#countdown');
                quizTimer.Timer = $.timer(updateTimer, incrementTime, false);
            };
        $(init);
    });
    
    /*formats the time*/
    function pad(number, length) {
        var str = '' + number;
        while (str.length < length) {str = '0' + str;}
        return str;
    }
    
    function formatTime(time) {
        var min = parseInt(time / 6000),
            sec = parseInt(time / 100) - (min * 60),
            hundredths = pad(time - (sec * 100) - (min * 6000), 2);
        return (min > 0 ? pad(min, 2) : "00") + ":" + pad(sec, 2) + ":" + hundredths;
    }
    
    /*
    ++++++++++++++++++++++++++++++++
    For hiding/showing the timer and the quiz section
    and for disabling the submit button
    ++++++++++++++++++++++++++++++++
    */
    
    function hideSection() {
        //disables the submit button
        $("#startquiz").attr('disabled', true);
        $("#submitquiz").attr('disabled', true);
                
        /*hides the quiz*/
        $("#quizform").removeClass("show");
        $("#quizform").addClass("hide");

        /*stops and hides the timer*/
        $("#countdown").removeClass("show");
        $("#countdown").addClass("hide");
        quizTimer.Timer.stop();
        
        //disables the submit and start buttons
        $("#startquiz span").text("Quiz has ended");
        $("#startquiz").show();
        $("#submitquiz").hide();
    }

    
    /*
    ++++++++++++++++++++++++++++++++
    For validating the quiz
    ++++++++++++++++++++++++++++++++
    */
    
    $("#startquiz").click(function(event){
        event.preventDefault();
        
        /*gets the student information*/
        var studentname = $("#name").val();
        var studentnumber = $("#studentnumber").val();

        if (studentname.trim() == "") {
            alert("Please specify your name");
        }
        else if (studentnumber.trim() == "") {
            alert("Please specify your student number");
        }
        else if (!studentnumber.match(/A00[0-9]{6}/) || studentnumber.length > 9) {
            alert("Please provide a valid student number. The student number must start with A00 followed by 6-digits.");
        }
        else {
            var buttonText = $("#startquiz span").text();
            if (buttonText != "Submit Quiz") {
                /*shows the quiz*/
                $("#submitquiz span").text("Submit Quiz");
                $("#quizform").toggleClass("show");
                
                /*shows and starts the timer*/
                $("#countdown").toggleClass("show");
                quizTimer.Timer.toggle();
                $("#startquiz span").text("Quiz has started");
                
                /*hides the start quiz button*/
                $("#startquiz").attr('disabled', true);
                
                /*focuses on item#1*/
                $("#item1").focus();
            }
        }
    });
    
    $("#submitquiz").click(function(event){
        event.preventDefault();
        
        /*submits the quiz*/
        alert("You have now submitted quiz!");
        $("#submitquiz").hide();

        hideSection();
    });
});