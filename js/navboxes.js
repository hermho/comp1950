/*
-------------------------------------
COMP 1950 PROJECT

Author: Joanna Flores (#A00733856)
Last Updated: 2015-Dec-03
-------------------------------------
*/

$(function() {
    
    /*
    ++++++++++++++++++++++++++++++++
    For activating the Isotope jQuery plugin
    ++++++++++++++++++++++++++++++++
    */
    
    // init Isotope
    var $grid = $('.grid').isotope({
        itemSelector: '.element-item',
        layoutMode: 'masonry'
    });
    
    // for filtering the list of lectures, exercises and homeworks
    $('.indexoptions').on( 'click', 'button', function() {
        var filterValue = $( this ).attr('data-filter');
        
        // filters the grid-list based on the selected data-filter
        filterValue = filterValue;
        $grid.isotope({ filter: filterValue });
    });
    
    // change is-checked class on buttons
    $('.button-group').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'button', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $( this ).addClass('is-checked');
        });
    });
    
    // for filtering the list of resources
    $('.resourceoptions').on( 'click', 'button', function() {
        var filterValue = $( this ).attr('data-filter');
        
        // hides/shows resource categories based on the selected data-filter
        hidePageLinks(filterValue);
    });
    
    // for hiding/showing resource categories based on the selected data-filter
    function hidePageLinks(selectedfilter) {
        var linkItems = $(".resourcecategory");
        $.each(linkItems, function(i, obj){
            var linkAttr = "." + $(this).attr('data-category');
            
            if (selectedfilter == "*") {
                $(this).show();
            }
            else {
                if (selectedfilter == linkAttr) {
                    $(this).show();
                }
                else {
                    $(this).hide();
                }
            }
        });
    }
});
