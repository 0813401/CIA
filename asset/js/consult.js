const window_top = $(window).height();
// const is_PC = window.screen.height < window.screen.width;

var scroll_flag_which_step_PC = true;
var scroll_flag_which_step_phone = [true, true, true];
var scroll_flag_procedure = [true, true, true, true, true];

scrolling();
var scrolling_event = $(window).bind('scroll resize', function(){
    scrolling();

    // var stop_flag_procedure = false;
    // var unbind_flag = false;
    // for(let i = 0; i< scroll_flag_procedure.length; i++){
    //     if(stop_flag_procedure[i] == true)
    //         break;
    //     if(i == 4)
    //         stop_flag_procedure = true;
    // }
    // if(stop_flag_procedure){
    //     if(is_PC && scroll_flag_which_step_PC == false){
    //         unbind_flag = true;
    //     }
    //     else{
    //         for(let i = 0; i< scroll_flag_which_step_phone.length; i++){
    //             if(scroll_flag_which_step_phone[i] == true)
    //                 break;
    //             if(i == 2)
    //                 unbind_flag = true;
    //         }
    //     }
    // }
    // if(unbind_flag){
    //     $(window).unbind('scroll  resize', scrolling_event);
    //     console.log("Unbind srolling_event.")
    // }
});

function scrolling(){
    if((window.screen.height < window.screen.width)){
        var which_step_top = $('.which-step').offset().top;
        var which_step_bottom = which_step_top + parseInt($('.which-step').css('height'));
        if((which_step_top <= window_top + $(document).scrollTop() && which_step_bottom + window_top >= window_top + $(document).scrollTop()) && scroll_flag_which_step_PC){
            $('.step').animate({opacity: '1'}, 1000, 'swing');
            scroll_flag_which_step_PC = false;
        }
    }
    else {
        var which_step_list = document.getElementsByClassName('step');
        for(let i = 0; i< which_step_list.length; i ++){
            var which_step_top = $(which_step_list[i]).offset().top;
            var which_step_bottom = $(which_step_list[i]).offset().top + parseInt($('.step').css('height'))
            if((which_step_top <= window_top + $(document).scrollTop() && which_step_bottom + window_top >= window_top + $(document).scrollTop()) && scroll_flag_which_step_phone[i]){
                $(which_step_list[i]).animate({opacity: '1'}, 1000, 'swing');
                scroll_flag_which_step_phone[i] = false;
            }
        }
    }

    var procedure_list;
    if((window.screen.height < window.screen.width))
        procedure_list = document.getElementsByClassName('procedure');
    else
        procedure_list = document.getElementsByClassName('procedure_');
    for(let i = 0; i<procedure_list.length; i++){
        var procedure_top = $(procedure_list[i]).offset().top;
        var procedure_bottom = $(procedure_list[i]).offset().top + parseInt($('.which-step').css('height'))
        if((procedure_top <= window_top + $(document).scrollTop() && procedure_bottom + window_top >= window_top + $(document).scrollTop()) &&scroll_flag_procedure[i]){
            if((window.screen.height < window.screen.width))
                $(procedure_list[i]).children('.white_mask').animate({width: 'toggle', marginLeft: '100%'}, 1000, 'swing');
            else
                $(procedure_list[i]).animate({'opacity':1}, 1000, 'swing');
            scroll_flag_procedure[i] = false;
        }
    }

}