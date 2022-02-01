const body = document.body;
const container_div = document.createElement('div');
container_div.style.backgroundColor = "#284b75";
container_div.style.maxheight = "35%";
container_div.style.width = "100%";
container_div.style.paddingBottom = "3%";
container_div.setAttribute('class', 'fixed-bottom')


var div1 = document.createElement('div');
div1.style.paddingTop = '2%';
div1.style.color = '#ffbd59';
div1.style.fontSize = '5vw';
div1.innerHTML = '聯絡我們';
var div2 = document.createElement('div');
div2.setAttribute('class', 'center_text');
div2.style.fontSize = '6vw'
list_icon_a = [["https://www.facebook.com/groups/375187427485303"], ["https://www.instagram.com/company_in_air/"], ["mailto:campinair2021@gmail.com"]]
a_class_list = [["fa fa-facebook"], ["fa fa-instagram"], ["fa fa-envelope"]];
for(let i = 0; i<3; i++){
    var a = document.createElement('a');
    a.href = list_icon_a[i];
    a.setAttribute('class',a_class_list[i]);
    a.style.paddingRight = '5%'
    a.style.paddingLeft = '5%'
    div2.appendChild(a);
}
var div3 = document.createElement('div');
div3.style.color = '#ffbd59';
div3.style.fontSize = '3.8vw';
div3.innerHTML = '30013 新竹市光復路二段101號 國立清華大學實創中心';
var div4 = document.createElement('div');
div4.style.paddingTop = '2%';
div4.style.color = '#ffbd59';
div4.style.fontSize = '3.3vw';
div4.innerHTML = '©2021 by 【C.I.A-Company In Air】 一站式升學輔導平台';

container_div.appendChild(div1);
container_div.appendChild(div2);
container_div.appendChild(div3);
container_div.appendChild(div4);
body.appendChild(container_div);


{/* <div style="background-color: #284b75; height: 35%; width: 100%;">
    <div style="padding-top:2%; color: #ffbd59; font-size: 130%;">聯絡我們</div>
    <div class="center_text" style="font-size: 150%;">
        <a href="#" class="fa fa-facebook"></a>
        <a href="#" class="fa fa-instagram"></a>
        <a href="#" class="fa fa-envelope"></a>
    </div>
    <div style="font-size: 100%; color: #ffbd59;">500 Terry Francois Street San Francisco, CA 94158</div>
    <div style="padding-top:2%; font-size: 80%; color: #ffbd59;">©2021 by 【C.I.A-Company In Air】 一站式升學輔導平台</div>
</div> */}