(function ($) {
    // all JS code here
    $(document).ready(function(){
        $('.nav-link').click(function(){
            $('.nav-link').removeClass('active-nav');
            $(this).addClass('active-nav');
        });  
        $('#menu-toggle').click(function(){
            $('#main-header').toggleClass('active-nav');
            $('#sidebar').toggleClass('active');
        });
        if($(window).width() < 1025){
            $('#sidebar a.nav-link').click(function(){
                $('#main-header').toggleClass('active-nav');
                $('#sidebar').toggleClass('active');
            })
        } 
        
        $(document).on('change', function () {
            console.log('changed');
            $('.progressbar-inner').each(function(){
                var itemProgress = $(this).attr('data-status');
                console.log(itemProgress);
                $(this).animate({
                    width: itemProgress+'%'
                }, 400);
            })  

        });
        
        $(document).on('click', '#tech-sheet-tabs .toggle-button', function(){
            $('.toggle-button').each(function(){
                $(this).removeClass('active');
            });
            $(this).addClass('active');
            var activeForm = $(this).attr('data-target');
            $('.inner-form-wrap').each(function(){
                $(this).removeClass('active');
            });
            $(activeForm).addClass('active');
        });

        $(document).on('click','.checkbox-all', function(){
            if($('.checkbox-all').is(':checked')){
                console.log('is checked');
                $('.special-checkbox').each(function(){
                    $(this).prop('checked',true);
                })
            } else {
                console.log('is unchecked');
                $('.special-checkbox').each(function(){
                    $(this).prop('checked',false);
                })
            }
        });

        $(document).on('click','.special-checkbox', function(){
            var allCheckboxes = $('.special-checkbox').length;
            var checkedCheckboxes = $('.special-checkbox:checked:checked').length;
            console.log('checked: '+checkedCheckboxes+' / all: '+allCheckboxes);
            if( allCheckboxes === checkedCheckboxes ){
                $('.checkbox-all').prop('checked',true);
            } else {
                $('.checkbox-all').prop('checked', false);
            }
        });
          
    }); 

    $(window).resize(function(){
        if($(window).width() < 1025){
            $('#sidebar a.nav-link').click(function(){
                $('#main-header').toggleClass('active-nav');
                $('#sidebar').toggleClass('active');
            })
        }
    })
    
})(jQuery);