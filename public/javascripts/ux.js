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
            $('.progressbar-inner').each(function(){
                var itemProgress = $(this).attr('data-status');
                $(this).animate({
                    width: itemProgress+'%'
                }, 0);
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
                $('.special-checkbox').each(function(){
                  if(! $(this).is(':checked')){
                      $(this).click();
                  }
                })
            } else {
                $('.special-checkbox').each(function(){
                    if( $(this).is(':checked')){
                        $(this).click();
                    }
                })
            }
        });

        $(document).on('click','.special-checkbox', function(){
            var allCheckboxes = $('.special-checkbox').length;
            var checkedCheckboxes = $('.special-checkbox:checked:checked').length;
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

    $(document).click(function(e) {
        // check that your clicked
        // element has no id=info
      
        if( !e.target.classList.contains('notification')) {
            $('li.notification').removeClass('expanded');
        }
    });

    $(document).on('click','li.notification', function(){
        if($(this).hasClass('expanded')){
            $('li.notification').removeClass('expanded');
        } else {
            $('li.notification').removeClass('expanded');
            $(this).addClass('expanded');
        }
    })

    $(document).on('click','#add-order-toggle',function(){
        $('#add-order').slideToggle(200);
    })

    
})(jQuery);