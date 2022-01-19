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
})




/*
const window_top = $(window).height();
var which_step_top = $('.which-step').offset().top;

var scroll_flag = true;
$(window).bind('scroll resize', function(){
    if(which_step_top <= window_top + $(document).scrollTop() && scroll_flag){
        // element_fadein($('.step'), 100);
        $('.step').fadeIn(1000);
        console.log("go");
        scroll_flag = false;
    }

})


function element_fadein(element, speed){
    var speed = speed || 30;
    var num = 0;
    var st = setInterval(function(){
        console.log(num);
        num ++;
        element.css('opacity', num/10);
        if(num>=10)
            clearInterval(st);
    }, speed);
}
*/

/*
const window_top = $(window).height();
var which_step_top = $('.which-step').offset().top;
var procedure_list = document.getElementsByClassName('procedure');

var scroll_flag_step = true;
var scroll_flag_procedure = true;
$(window).bind('scroll resize', function(){
    if(which_step_top <= window_top + $(document).scrollTop() && scroll_flag_step){
        element_fadein($('.step'), 100, 'j');
        scscroll_flag_steproll_flag = false;
    }
    // for(let i = 0; i<procedure_list.length; i++){
    //     var procedure_top = procedure_list[i].offsetWidth;
    //     if(procedure_top <= window_top + $(document).scrollTop() && scroll_flag_procedure){
    //         element_fadein(procedure_list[i], 100, 'n');
    //         element_sildeleft(procedure_list[i], 100);
    //         scroll_flag_procedure = false;
    //     }
            
    // }

});


function element_fadein(element, speed, type){
    var speed = speed || 30;
    var num = 0;
    var st = setInterval(function(){
        num ++;
        // if(type == 'j')
            element.css('opacity', num/10);
        // else
        //     element.style.opacity = num/10;
        if(num>=10)
            clearInterval(st);
    }, speed);
}

// function element_sildeleft(element, speed){
//     var speed = speed || 30;
//     var num = 0;
//     var st = setInterval(function(){
//         num ++;
//         element.style.width = num/10 + '%';
//         if(num>=8)
//             clearInterval(st);
//     }, speed);
// }*/