/* firestore 的初始宣告 */
const firebaseConfig = {
  apiKey: "AIzaSyBiTTx6ZNggajmMn_R_xUQ4H1Pe73Np-s0",
  authDomain: "ciateam-6d554.firebaseapp.com",
  projectId: "ciateam-6d554",
  storageBucket: "ciateam-6d554.appspot.com",
  messagingSenderId: "892094395466",
  appId: "1:892094395466:web:a9fa12d743357b910522b3",
  measurementId: "G-Z5JXQMSE3V"
};
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


const the_card_container = document.getElementById('card_container');
var count_for_card_text = 1;
var count_for_card_cover_and_back = 0;
var array_card_text = [['C','O','M','P','A','N','Y','I','N','A','I','R'],
                       ['C',' ', 'A',' ', 'M',' ', 'P','I','N','A','I','R'], 
                       ['C','O','N','S','U','L','T','I','N','A','I','R']];
if (/mobile/i.test(navigator.userAgent)){
  create_card_div_mobile();
}
else{
  create_card_div();
}
the_card_container.style.backgroundImage = "url('asset/img/home/card.png')";
the_card_container.style.backgroundSize = '100%';
the_card_container.style.maxHeight = '100%';
var card_rotate_interval = window.setInterval(card_rotate, 5000);

function create_card_div(){
  for(let i = 0; i<array_card_text[0].length; i++){
    var div = document.createElement('div');
    div.setAttribute('id', 'card_div' + i.toString());
    div.setAttribute('class', 'card_container'); 
    div.style.display = 'inline-block';
    div.style.borderRadius = '10%';
    div.style.margin = '0.4%';
    div.style.marginTop = '5%';
    the_card_container.appendChild(div);
    var div_cover = document.createElement('div');
    div_cover.setAttribute('class', 'card_cover');
    div_cover.innerHTML = array_card_text[0][i];
    div_cover.style.borderRadius = '10%';
    var div_back = document.createElement('div');
    div_back.setAttribute('class', 'card_back');
    div_back.innerHTML = array_card_text[0][i];
    div_back.style.borderRadius = '10%';
    if(i == 7 || i == 9 || i == 0){
      if(i == 7 || i == 9)  
        div.style.marginLeft = '5%';
      div_cover.style.color = '#f88411';
      div_back.style.color = '#f88411';
    }
    div.appendChild(div_cover);
    div.appendChild(div_back);
  }
  // 下面的字
  var br = document.createElement('br');
  the_card_container.appendChild(br);
  var div_container_text = document.createElement('div');
  div_container_text.style.marginBottom = '4%';
  the_card_container.appendChild(div_container_text);
}

function create_card_div_mobile(){
  for(let i = 0; i<array_card_text[0].length; i++){
    var div = document.createElement('div');
    div.setAttribute('id', 'card_div' + i.toString());
    div.setAttribute('class', 'card_container'); 
    div.style.display = 'inline-block';
    div.style.borderRadius = '10%';
    div.style.margin = '0.4%';
    div.style.marginTop = '2%';
    the_card_container.appendChild(div);
    var div_cover = document.createElement('div');
    div_cover.setAttribute('class', 'card_cover');
    div_cover.innerHTML = array_card_text[0][i];
    div_cover.style.borderRadius = '10%';
    var div_back = document.createElement('div');
    div_back.setAttribute('class', 'card_back');
    div_back.innerHTML = array_card_text[0][i];
    div_back.style.borderRadius = '10%';
    if(i == 7 || i == 9 || i == 0){
      var container = document.createElement('div');
      container.style.textAlign = 'left';
      container.style.marginLeft = '10%';
      div_cover.style.color = '#f88411';
      div_back.style.color = '#f88411';
    }
    container.appendChild(div);
    div.appendChild(div_cover);
    div.appendChild(div_back);
    if(i == 6 || i == 8 || i == 10){
      the_card_container.appendChild(container);
    }
  }
  // // 下面的字
  // var br = document.createElement('br');
  // the_card_container.appendChild(br);
  // var div_container_text = document.createElement('div');
  // div_container_text.style.marginBottom = '4%';
  // the_card_container.appendChild(div_container_text);
}

function card_rotate(){
  var flag_for_cover = false;
  if(count_for_card_cover_and_back %2 ==0)
    flag_for_cover = true;
  for(let i = 0; i<array_card_text[0].length; i++){
    var div = document.getElementById('card_div'+i.toString());
    var div_cover = div.getElementsByClassName('card_cover')[0];
    var div_back = div.getElementsByClassName('card_back')[0];
    if(i == 0 || i == 7 || i == 9)
      continue;
    if(flag_for_cover){
      div_cover.style.transform = 'rotateX(0deg)';
      div_back.style.transform = 'rotateX(-180deg)';
      div_cover.innerText = array_card_text[count_for_card_text][i];
    }
    else{
      div_cover.style.transform = 'rotateX(180deg)';
      div_back.style.transform = 'rotateX(0deg)';  
      div_back.innerText = array_card_text[count_for_card_text][i]; 
    }
  }
  count_for_card_cover_and_back +=1 ;
  count_for_card_text +=1 ;
  if(count_for_card_text % 3 == 0){
    count_for_card_text -= 3;
  }
  if(count_for_card_cover_and_back %2 ==0){
    count_for_card_cover_and_back -= 2;
  }
}

var carousel_inner = document.getElementById('carousel_inner');
var recent_activities = db.collection("home_recent_activities");
var recent_activities_array = [];
recent_activities.get().then(querySnapshot => {
querySnapshot.forEach(doc => {
  recent_activities_array.push([doc.data().title, doc.data().subtitle, doc.data().img, doc.data().datetime]);
});
recent_activities_array.sort((a, b) => a[3] - b[3]);
for(let i = 0; i<recent_activities_array.length; i++){
  var carousel_item = document.createElement('div');
  var img = document.createElement('img');
  var carousel_caption = document.createElement('div');
  var title = document.createElement('div');
  var subtitle = document.createElement('div');
  var button = document.createElement('button');

  if(i == 0)
    carousel_item.setAttribute('class', 'carousel-item active');
  else
    carousel_item.setAttribute('class', 'carousel-item');
  img.setAttribute('class', 'd-block w-100');
  img.src = recent_activities_array[i][2]; 
  carousel_caption.setAttribute('class', 'carousel-caption d-none d-md-block');
  title.style.fontSize = '1.5vw';
  title.innerHTML = recent_activities_array[i][1];
  subtitle.style.fontSize = '1.5vw';
  subtitle.innerHTML = recent_activities_array[i][0];  
  button.setAttribute('class', 'step_button');
  button.style.fontSize = '1vw';
  button.innerHTML = '了解更多';
  button.addEventListener('click', function(){
    window.location='camp.html';
  });

  carousel_caption.appendChild(title);
  carousel_caption.appendChild(subtitle);
  carousel_caption.appendChild(button);
  carousel_item.appendChild(img);
  carousel_item.appendChild(carousel_caption);
  carousel_inner.appendChild(carousel_item);
}
});
// <div class="carousel-item" data-bs-interval="3000">
//     <img src="asset/img/home/recent_2.jpg" class="d-block w-100">
//     <div class="carousel-caption d-none d-md-block">
//         <div style="font-size: 1.5vw;"> 8/8 一日資工營</div>
//         <div style="font-size: 1.5vw;"> 線上課程 x 線上實操 x 學長姐分享</div>
//         <button onclick="window.location='camp.html';" class="step_button" style="font-size: 1vw;">了解更多</button>
//     </div>
// </div>


$(".step_text").hover(function(){
  $(this).find(".step_before_text").stop().fadeOut(1000);
}, function(){
  $(this).find(".step_before_text").stop().fadeIn(1000);
});


$(".container_which_provide").hover(function(){
  $(this).find(".which_provide_before").stop().fadeOut(1000);
}, function(){
  $(this).find(".which_provide_before").stop().fadeIn(1000);
});