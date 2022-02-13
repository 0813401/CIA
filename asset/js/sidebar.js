var sidebar = $("<div></div>");
var sidetab = $('<div><i class="fa fa-bars" style="font-size: 3vh;"></i></div>');
var sidecontent = $("<div></div>");
create_sidebar();

var cnt = 0;
function create_sidebar(){   
    var logo_div = $("<div></div>");
    logo_div.css({'background-color':'#284b75'});
    var logo = $("<img src='asset/img/logo.png'></img>");
    logo.css({'width':'15vw','margin':'5%'});
    logo.addClass('img_square');
    logo_div.append(logo);

    sidebar.attr('id', 'sidebar');
    sidebar.css({"top": "0%", 'left': '-83%', 'width': '83%', 'max-height':'80%', 'backgroubd-color': '#284b75', 'position': 'fixed', 'z-index': '9999'});  
    sidetab.attr('id', 'side_tab');
    sidetab.css({"position": "absolute", 'top':'7%', 'right':'-20%', 'width':'20%', 'height':'auto','background': '#284b75','color':'#f88411','text-align':'center','padding':'9px 0', 'border-top-right-radius': '10px', 'border-bottom-right-radius': '10px','opacity':'0.8'});
    sidecontent.attr('id', 'side_content')
    sidecontent.css({'background':'#284b75', 'text-align':'center','opacity':'0.8','font-size':'8vw'}); // font-size是改icon大小

    create_nav();
    $(document.body).append(logo_div);
    $(document.body).append(sidebar);
    sidebar.append(sidetab);
    sidebar.append(sidecontent);

    $(function(){
        var w = $('#side_content').width();
        $("#side_tab").click(function(){
            if (cnt%2 == 0){
                if ($("#sidebar").css('left') == '-'+w+'px'){
                    $("#sidebar").animate({ left:'0%' }, 600 ,'swing');
                }
            }
            else{
                $("#sidebar").animate( { left:'-'+w+'px' }, 600 ,'swing');    
            }
            cnt++;
        });
    });
}


function create_nav(){

    var nav_2 = document.createElement('nav');
    nav_2.id = 'navbar';
    nav_2.setAttribute('class', 'navbar navbar-expand-sm flex-nav');
    nav_2.style.backgroundColor = '#284b75';
    nav_2.style.height = 'auto';
    nav_2.style.zIndex = '9';
    var ul = document.createElement('ul');
    ul.setAttribute('class', 'navbar-nav');
    ul.style.margin = 'auto';
    ul.style.paddingLeft = "5%";
    ul.style.display = 'block';
    var list_a = ["index.html", "camp.html", "consult.html", "FAQ.html"];
    var list_text = ["首頁 Company In Air &nbsp&nbsp", "線上營隊 Camp In Air &nbsp&nbsp", "個人諮詢 Consulting In Air &nbsp&nbsp", "常見問題 FAQ"];
    for(let i = 0; i<4; i++){
        var li = document.createElement('li');
        li.setAttribute('class', 'nav-item');
        var a = document.createElement('a');
        a.setAttribute('class', 'nav-link white_text');
        a.style.fontSize = '5.3vw'
        a.href = list_a[i];
        a.innerHTML = list_text[i];
        li.appendChild(a);
        ul.appendChild(li);
    }
    nav_2.appendChild(ul);

    // login

    // var ul_1 = document.createElement('ul');
    // ul_1.setAttribute('class', 'navbar-nav');
    // ul_1.style.marginRight = '1%';
    // var li_1 = document.createElement('li');
    // li_1.setAttribute('class', "nav-item")
    // li_1.style.paddingTop = '10%';
    // var i = document.createElement('i');
    // i.setAttribute("class", "fa fa-user-circle-o")
    // i.style.fontSize = '1.5vw';
    // i.style.color = "#fff";
    // li_1.appendChild(i);
    // var li_2 = document.createElement('li');
    // li_2.setAttribute('class', "nav-item")
    // var a_2 = document.createElement('a');
    // a_2.setAttribute('class', 'nav-link white_text');
    // a_2.href = "login.html";
    // // a_2.innerHTML = "Log In";
    // li_2.appendChild(a_2);
    // ul_1.appendChild(li_1);
    // ul_1.append(li_2);
    // // nav_2.appendChild(ul_1);

    
    setTimeout(function(){
        // var top_menu = document.createElement('ul');
        // top_menu.style.padding = '0';
        // top_menu.style.margin = '0';
        // list_icon_a = [["login.html"],["https://www.facebook.com/groups/375187427485303"], ["https://www.instagram.com/company_in_air/"]]

        // var data = sessionStorage.getItem('status');
        // if(data != "login")
        // {
        //     a_class_list = [["fa fa-user-circle-o"],["fa fa-facebook"], ["fa fa-instagram"]];
        // }else{
        //     a_class_list = [["fa fa-sign-out"],["fa fa-facebook"], ["fa fa-instagram"]];
        // }
        // for(let i = 0; i<3; i++){
        //         var a = document.createElement('a');
        //         a.setAttribute('class', 'nav-item');
        //         a.style.height = '3vw';
        //         a.style.width = '3vw';
        //         a.style.padding = '8% 10% 0% 10%';
        //         a.href = list_icon_a[i];
        //         a.style.color = '#FFF';
        //         a.setAttribute('class',a_class_list[i]);
        //         top_menu.appendChild(a);
        //     }
        //     nav_2.append(top_menu);
        //     var div = document.createElement('div');

        //     div.appendChild(nav_2)
        //     sidecontent.append($(top_menu));
        //     sidecontent.append($(div));

        
        var top_menu = document.createElement('ul');
        top_menu.style.padding = '0';
        top_menu.style.margin = '0';

        var data = sessionStorage.getItem('status');
        var name = sessionStorage.getItem('name');
        if(data != "login")
        {
            list_icon_a = [["login.html"],["https://www.facebook.com/groups/375187427485303"], ["https://www.instagram.com/company_in_air/"]]
            a_class_list = [["fa fa-user-circle-o"],["fa fa-facebook"], ["fa fa-instagram"]];
            for(let i = 0; i<3; i++){
                var a = document.createElement('a');
                a.setAttribute('class', 'nav-item');
                a.style.height = '3vw';
                a.style.width = '3vw';
                a.style.padding = '8% 10% 0% 10%';
                a.href = list_icon_a[i];
                a.style.color = '#FFF';
                a.setAttribute('class',a_class_list[i]);
                top_menu.appendChild(a);
            }
        }else{
            var hi_menu = document.createElement('ul');
            hi_menu.setAttribute('class', 'navbar-nav');
            hi_menu.style.margin = 'auto';
            hi_menu.style.paddingLeft = "5%";
            hi_menu.style.display = 'block';
            var hi_li = document.createElement('li');
            hi_li.setAttribute('class', 'nav-item dropdown');
            var hi_a = document.createElement('a');
            hi_a.setAttribute('class', 'nav-link white_text dropdown-toggle');
            hi_a.style.fontSize = '5.3vw'
            hi_a.href = "#";
            hi_a.innerHTML = "Hello , " + name + " ! ";

            hi_a.setAttribute('role', 'button');
            hi_a.setAttribute('data-bs-toggle', 'dropdown');
            var ul_in = document.createElement('ul');
            ul_in.setAttribute('class', 'dropdown-menu');
            var li_in = document.createElement('li');
            var a_in_1 = document.createElement('a');
            a_in_1.setAttribute('class', 'dropdown-item');
            a_in_1.href = "update.html";
            a_in_1.innerHTML = "基本資料";
            var a_in_2 = document.createElement('a');
            a_in_2.setAttribute('class', 'dropdown-item');
            a_in_2.href = "#";
            a_in_2.innerHTML = "營隊紀錄";
            var a_in_3 = document.createElement('a');
            a_in_3.setAttribute('class', 'dropdown-item');
            a_in_3.href = "login.html";
            a_in_3.innerHTML = "Log Out";
            li_in.appendChild(a_in_1);
            li_in.appendChild(a_in_2);
            li_in.appendChild(a_in_3);
            ul_in.appendChild(li_in);

            hi_li.appendChild(hi_a);
            hi_li.append(ul_in);
            hi_menu.appendChild(hi_li);
            nav_2.append(hi_menu);

            list_icon_a = [["https://www.facebook.com/groups/375187427485303"], ["https://www.instagram.com/company_in_air/"]]
            a_class_list = [["fa fa-facebook"], ["fa fa-instagram"]];
            for(let i = 0; i<2; i++){
                var a = document.createElement('a');
                a.setAttribute('class', 'nav-item');
                a.style.height = '3vw';
                a.style.width = '3vw';
                a.style.padding = '8% 10% 0% 10%';
                a.href = list_icon_a[i];
                a.style.color = '#FFF';
                a.setAttribute('class',a_class_list[i]);
                top_menu.appendChild(a);
            }
        }
        nav_2.append(top_menu);
        var div = document.createElement('div');

        div.appendChild(nav_2);
        sidecontent.append($(top_menu));
        sidecontent.append($(div));
    }, 300);

    // a_class_list = [["fa fa-user-circle-o"],["fa fa-facebook"], ["fa fa-instagram"]];
    // for(let i = 0; i<3; i++){
    //     var a = document.createElement('a');
    //     a.setAttribute('class', 'nav-item');
    //     a.style.height = '3vw';
    //     a.style.width = '3vw';
    //     a.style.padding = '8% 10% 0% 10%';
    //     a.href = list_icon_a[i];
    //     a.style.color = '#FFF';
    //     a.setAttribute('class',a_class_list[i]);
    //     top_menu.appendChild(a);
    // }
    // nav_2.append(top_menu);

    // var div = document.createElement('div');

    // div.appendChild(nav_2)
    // sidecontent.append($(top_menu));
    // sidecontent.append($(div));
}

