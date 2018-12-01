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
            $('.toggle-button').removeClass('active');
            $(this).addClass('active');
            var clickTarget = $(this).attr('data-target');
            $('.configurations-panel').removeClass('active');
            $(clickTarget).addClass('active');
            /* var activeForm = $(this).attr('data-target');
            if($(this).hasClass('secondary-conf')){
                $('#primary-config').hide();
                $('#conf-boxes-wrap').show();
            } else {
                $('#conf-boxes-wrap').hide();
                $('#primary-config').show();
                $('.inner-form-wrap').each(function(){
                    $(this).removeClass('active');
                });
                $(activeForm).addClass('active');
            } */
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

    $(window).on('load',function(){
        $('li.notification').each(function(){
            var notifLines = $(this).find('.notification-item');
            var notifAmt = notifLines.length;
            if (notifAmt >= 1){
                $(this).find('.notification-label').html(notifAmt);
                $(this).addClass('has-children');
            } else {
                $(this).find('.notification-label').hide();
            }
        })  
    })

    $(document).on('click','li.notification.has-children', function(){
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

     $(document).on('click','#order-products-table .item-inner-wrap',function(){
         if(!$(this).hasClass('expanded')){
            $('#order-products-table .item-inner-wrap').removeClass('expanded');
            $(this).addClass('expanded');
         } else {
            $('#order-products-table .item-inner-wrap').removeClass('expanded');
         }  
    })

    $(document).on('click', '#conf-save', function(){
        $('#conf-notification').addClass('active');
        setTimeout(function(){
            $('#conf-notification').removeClass('active');
        },3000);
    })

    $(document).on('click', '.nav-link', function(){
        $('.progressbar-inner').each(function () {
            $(this).prop('progression',0).animate({
                progression: $(this).attr('data-status')
            }, {
                duration: 800,
                easing: 'linear',
                step: function (now) {
                    $(this).css('width',Math.ceil(now)+'%');
                    $(this).css('background-color', "hsl(calc("+Math.ceil(now)+" * .9), 50%, 50%)");
                }
            });
        });
    });

    $(document).on('change',function(){
        if($('#home').hasClass('home-page')){
            console.log('is home');
        }
    })

})(jQuery);