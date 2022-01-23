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
    sidebar.css({"top": "0%", 'left': '-50%', 'width': '50%', 'max-height':'50%', 'backgroubd-color': '#284b75', 'position': 'fixed', 'z-index': '9999'});  
    sidetab.attr('id', 'side_tab');
    sidetab.css({"position": "absolute", 'top':'10%', 'right':'-20%', 'width':'20%', 'height':'auto','background': '#284b75', 'text-align':'center','padding':'9px 0', 'border-top-right-radius': '10px', 'border-bottom-right-radius': '10px','opacity':'0.8'});
    sidecontent.attr('id', 'side_content')
    sidecontent.css({'background':'#284b75', 'text-align':'center','opacity':'0.8'});

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
        a.style.fontSize = '1.8vw'
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
    // a_2.innerHTML = "Log In";
    // li_2.appendChild(a_2);
    // ul_1.appendChild(li_1);
    // ul_1.append(li_2);
    // nav_2.appendChild(ul_1);

    var top_menu = document.createElement('ul');
    top_menu.style.padding = '0';
    top_menu.style.margin = '0';
    list_icon_a = [["https://www.facebook.com/groups/375187427485303"], ["https://www.instagram.com/company_in_air/"]]
    a_class_list = [["fa fa-facebook"], ["fa fa-instagram"]];
    for(let i = 0; i<2; i++){
        var a = document.createElement('a');
        a.setAttribute('class', 'nav-item');
        a.style.height = '2vw';
        a.style.width = '2vw';
        a.style.padding = '5% 10% 0% 10%';
        a.href = list_icon_a[i];
        a.setAttribute('class',a_class_list[i]);
        top_menu.appendChild(a);
    }
    // nav_2.append(top_menu);

    var div = document.createElement('div');

    div.appendChild(nav_2)
    sidecontent.append($(top_menu));
    sidecontent.append($(div));
}
