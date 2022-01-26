const window_top = $(window).height();

var scroll_flag = true;
var scroll_flag_procedure = [true, true, true, true, true];
$(window).bind('scroll resize', function(){
    var which_step_top = $('.which-step').offset().top;
    var which_step_bottom = which_step_top + parseInt($('.which-step').css('height'));
    if((which_step_top <= window_top + $(document).scrollTop() && which_step_bottom + window_top >= window_top + $(document).scrollTop()) && scroll_flag){
        $('.step').animate({opacity: '1'}, 1000, 'swing');
        scroll_flag = false;
    }

    var procedure_list = document.getElementsByClassName('procedure');
    for(let i = 0; i<procedure_list.length; i++){
        var procedure_top = $(procedure_list[i]).offset().top;
        var procedure_bottom = $(procedure_list[i]).offset().top + parseInt($('.which-step').css('height'))
        if((procedure_top <= window_top + $(document).scrollTop() && procedure_bottom + window_top >= window_top + $(document).scrollTop()) &&scroll_flag_procedure[i]){
            // console.log(procedure_top , window_top + $(document).scrollTop() , procedure_bottom + window_top , window_top + $(document).scrollTop());
            $(procedure_list[i]).children('.white_mask').animate({width: 'toggle', marginLeft: '100%'}, 1000, 'swing');
            scroll_flag_procedure[i] = false;
        }
    }

    // cleaninterval
});