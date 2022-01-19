const container = document.body;
creator_nav();
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
window.onscroll = function() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
};

function creator_nav(){
    var nav_1 = document.createElement('nav'); 
    nav_1.setAttribute('class', 'navbar');
    nav_1.style.backgroundColor = '#284b75';
    nav_1.style.height = 'auto';
    nav_1.style.paddingTop = '1%';
    nav_1.style.zIndex = '10';
    var a = document.createElement('a');
    a.setAttribute("class","navbar-brand");
    a.style.display = "block";
    a.style.margin = "auto";
    var img = document.createElement('img');
    img.setAttribute('class', 'img_square')
    img.src = 'asset/img/logo.png';
    img.alt = "logo";
    a.appendChild(img);
    nav_1.appendChild(a);

    var nav_2 = document.createElement('nav');
    nav_2.id = 'navbar';
    nav_2.setAttribute('class', 'navbar navbar-expand-sm flex-nav');
    nav_2.style.backgroundColor = '#284b75';
    nav_2.style.height = 'auto';
    nav_2.style.zIndex = '9';
    var ul = document.createElement('ul');
    ul.setAttribute('class', 'navbar-nav');
    ul.style.margin = 'auto';
    ul.style.paddingLeft = "5%"
    var list_a = ["index.html", "camp.html", "consult.html", "FAQ.html"];
    var list_text = ["首頁 Company In Air &nbsp&nbsp", "線上營隊 Camp In Air &nbsp&nbsp", "個人諮詢 Consulting In Air &nbsp&nbsp", "常見問題 FAQ"];
    for(let i = 0; i<4; i++){
        var li = document.createElement('li');
        li.setAttribute('class', 'nav-item');
        var a = document.createElement('a');
        a.setAttribute('class', 'nav-link white_text');
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

    var ul_3 = document.createElement('ul');
    ul_3.setAttribute('class', 'navbar-nav');
    list_icon_a = [["https://www.facebook.com/groups/375187427485303"], ["https://www.instagram.com/company_in_air/"]]
    a_class_list = [["fa fa-facebook"], ["fa fa-instagram"]];
    for(let i = 0; i<2; i++){
        var a = document.createElement('a');
        a.setAttribute('class', 'nav-item');
        a.style.height = '3vw';
        a.style.width = '3vw';
        a.style.paddingTop = '18%';
        a.href = list_icon_a[i];
        a.setAttribute('class',a_class_list[i]);
        ul_3.appendChild(a);
    }
    nav_2.append(ul_3);

    var div = document.createElement('div');
    container.appendChild(nav_1);

    div.appendChild(nav_2)
    container.appendChild(div);
}




{/* <nav class="navbar" style="background-color: #284b75; height: 15%; padding-top: 1%; z-index: 3;">
<a class="navbar-brand" style="display: block; margin: auto;">
    <img class="img_square" src="asset/img/logo.png" alt="logo">
</a>
</nav>

<div>
<nav id="navbar" class="navbar navbar-expand-sm flex-nav" style="background-color: #284b75; z-index: 2;">
    <ul class="navbar-nav" style="margin:auto; padding-left: 5%;">
        <li class="nav-item">
            <a href="index.html" class="nav-link white_text">首頁 Company In Air &nbsp&nbsp</a>
        </li>
        <li class="nav-item">
            <a href="camp.html" class="nav-link white_text">線上營隊 Camp In Air &nbsp&nbsp</a>
        </li>
        <li class="nav-item">
            <a href="consult.html" class="nav-link white_text">個人諮詢 Consulting In Air &nbsp&nbsp</a>
        </li>
        <li class="nav-item">
            <a href="FAQ.html" class="nav-link white_text">常見問題 FAQ</a>
        </li>
    </ul>
    <ul class="navbar-nav" style="margin-right: 1%;">
        <li class="nav-item" style="padding-top: 10%;">
            <i class="fa fa-user-circle-o" style='font-size:1.5vw;color:#fff'></i>
        </li>
        <li class="nav-item">
            <a href="login.html" class="nav-link white_text">Log In</a>
        </li>
    </ul>
</nav>
</div> */}
