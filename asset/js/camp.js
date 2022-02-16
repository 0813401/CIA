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
  const app = firebase.initializeApp(firebaseConfig)
  const db = firebase.firestore()
  
  var modal = document.getElementById('id01');
  window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        window.location.reload();
    }
  };
  
  
  /* 近期線上營隊跑馬燈 */
  var info_array1 = [];
  var signup = db.collection("camp");
  signup.get().then(querySnapshot => {
  querySnapshot.forEach(doc => {
  info_array1.push([doc.data().datetime, doc.data().image, doc.data().price, doc.data().text, doc.data().info]);
  });
  
  info_array1.sort((a, b) => a[0] - b[0]);
  
  const camp_container= document.getElementById('recent_camp_item');
  const n_camp = info_array1.length;
  const text = [];
  const price = [];
  const info = [];
  const image = [];
  for(let i = 0; i < n_camp; i++){
    text.push([info_array1[i][3]]);
    price.push([info_array1[i][2]]);
    info.push([info_array1[i][4]]);
    image.push([info_array1[i][1]]);
  }
  
  var slider = document.createElement('div');
  slider.setAttribute('class', 'slider');
  slider.style.width = '70%';
  slider.style.height = '100%';
  camp_container.appendChild(slider);
  
  for(let i = 0; i<n_camp; i++){
    var container_div2 = document.createElement('div');
    container_div2.setAttribute('class', 'slider_item')
    var img_div = document.createElement('div');
    img_div.id = i;
    img_div.style.position = 'relative';
    img_div.style.cursor = 'pointer';
    img_div.addEventListener('click', function(){
      db.collection("camp_SignUp").doc("choose").update({
        choose_id: i
      });
      setTimeout(function(){
        location.href = "camp_SignUp.html";
      }, 500);
    });
    var info_span = document.createElement('span');
    info_span.setAttribute('class', 'info'); 
    info_span.style.color = '#ffbd59';
    info_span.style.backgroundColor = '#fff';
    info_span.style.position = 'absolute';
    info_span.style.opacity = '0.95';
    info_span.style.left = 0;
    info_span.style.padding = '2%';
    info_span.style.fontSize = '1.3vw';
    info_span.innerHTML = info[i];
    var img = document.createElement('img');
    img.src = image[i];
    var text_div = document.createElement('div');
    text_div.innerHTML = text[i];
    text_div.style.color = '#284b75';
    text_div.style.fontSize = '1.5vw';
    var price_div = document.createElement('div');
    price_div.innerHTML = "NT$"+price[i];
    price_div.style.color = '#284b75';
    price_div.style.fontSize = '1.5vw';
    img_div.appendChild(info_span);
    img_div.appendChild(img); 
    container_div2.appendChild(img_div);
    container_div2.appendChild(text_div);
    container_div2.appendChild(price_div);
    slider.appendChild(container_div2);
  }
  camp_container.appendChild(slider);
    /* 近期線上營隊跑馬燈設定 */
  $('.slider').slick({
    centerPadding: 0, 
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    infinite: false,
    dots: false,
    arrows: true,
  });
  
  });
  
  
  
  /* 布告欄跑馬燈 */
  
  /* 布告欄跑馬燈設定 */
  
    $('.slider_board').slick({
      centerPadding: 0, 
      slidesToShow: 1,
      swipeToSlide: true,
      slidesToScroll: 1,
      infinite: true,
      arrows: true,
  });
  
  
  /* 影片跑馬燈 */
  const video_container = document.getElementById('video_container');
  video_container.style.marginBottom = '3%';
  video_container.style.paddingBottom = '5%';
  var slider_video = document.createElement('div');
  slider_video.setAttribute('class', 'slider_video');
  slider_video.style.width = '72%';
  slider_video.style.height = '90%';
  video_container.appendChild(slider_video);
  
  
  
  viedo_link = [
    ["https://www.youtube.com/embed/O1XBJXBOVyc"],
    ["https://www.youtube.com/embed/23U_q7FNtVs"],
  ];
  for(let i = 0; i<2; i++){
    var div = document.createElement('div');
    div.setAttribute('class', 'video_box');
    var iframe = document.createElement('iframe');
    iframe.style.width = '560';
    iframe.style.height = '315';
    iframe.title = 'YouTube video player';
    iframe.frameborder = "0";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true; 
    iframe.src = viedo_link[i];
    div.appendChild(iframe);
    slider_video.appendChild(div);
  }
  
    /* 影片跑馬燈設定 */
    $('.slider_video').slick({
      centerPadding: 0, 
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      arrows: true,
  });
  
  /* 科系許願池 */
  const container_pool = document.getElementById('container_pool');
  container_pool.style.backgroundColor = '#fff';
  container_pool.style.margin = '3% 5%';
  container_pool.style.padding = '1.5%';
  container_pool.style.borderRadius = '15px';
  
  var voted_array = [];
  var pools = db.collection("pools");
  pools.get().then(querySnapshot => {
  querySnapshot.forEach(doc => {
    voted_array.push([doc.id, doc.data().id, doc.data().voted]);
  });
  voted_array.sort((a, b) => b[2] - a[2]);
  var max_voted_number = voted_array[0][2];
  for(let i = 0; i<3; i++){
    var div = document.createElement('div');
    div.setAttribute('class', 'department_item');
    div.style.padding = '2%';
    div.style.width = '100%';
    div.style.display = 'flex';
    var voted_img = document.createElement('img');
    voted_img.src = 'asset/img/camp/prize_0' + (i+1) + '.png';
    voted_img.style.justifyContent = 'flex-start';
    voted_img.style.width = '4%';
    voted_img.style.marginTop = '-1.5%';
    var voted_name = document.createElement('div');
    voted_name.style.justifyContent = 'flex-start';
    voted_name.style.padding = '0% 2%';
    voted_name.innerText = voted_array[i][1];
    var voted_bar_box = document.createElement('div');
    voted_bar_box.setAttribute('class','department_bar_box');
    voted_bar_box.style.position = 'relative';
    var voted_bar = document.createElement('div');
    voted_bar.setAttribute('class', 'voted_bar');
    voted_bar.style.position = 'absolute';
    voted_bar.style.width = voted_array[i][2] * 100 / max_voted_number + '%';
    voted_bar.style.height = '100%';
    voted_bar.style.backgroundColor = '#f88411';
    voted_bar.style.borderRadius = '8px';  
  
    var style = document.createElement('style');
    style.innerHTML = `@keyframes slidein` + (i+1) + `{ 
      from { width: 0%; }
      to   { width: ` + voted_array[i][2] * 100 / max_voted_number + `%;}
    }`;
    document.getElementsByTagName('head')[0].appendChild(style);
    voted_bar.style.animation = 'slidein' + (i+1) + ' 3s paused';
  
    var voted_number = document.createElement('div');
    voted_number.setAttribute('class', 'voted_number');
    voted_number.style.display = 'inline';
    voted_number.style.justifyContent = 'flex-end';
    voted_number.style.marginLeft = '2%';
    voted_number.style.padding = '0% 2%';
    voted_number.innerText = voted_array[i][2];
    div.appendChild(voted_img);
    div.appendChild(voted_name);
    voted_bar_box.appendChild(voted_bar);
    div.appendChild(voted_bar_box);
    div.appendChild(voted_number);
    container_pool.appendChild(div);
  }
  });
  
  /* 科系許願池投票畫面 */ 
  var flag = true;
  function voted_page(){
    var container_voted_page = document.getElementById('container_voted_page');
    var max_voted_number = voted_array[0][2];
    if(flag){
      for(let i = 0; i<voted_array.length; i++){
        var div = document.createElement('div');
        div.setAttribute('class', 'voted_page_item');
        var voted_name = document.createElement('div')
        voted_name.setAttribute('class', 'voted_page_item_name');
        voted_name.innerText = voted_array[i][1];
        var voted_number = document.createElement('div');
        voted_number.setAttribute('class', 'voted_page_item_number');
        voted_number.id = 'voted_page_item_number_'+i;
        voted_number.innerText = voted_array[i][2];
        var voted_bar_box = document.createElement('div');
        voted_bar_box.setAttribute('class','voted_bar_box');
        voted_bar_box.style.position = 'relative';
        voted_bar_box.style.marginTop = '0.5%';
        var voted_bar = document.createElement('div');
        voted_bar.setAttribute('class', 'voted_bar');
        voted_bar.id = 'voted_bar_'+i;
        voted_bar.style.position = 'absolute';
        voted_bar.style.width = voted_array[i][2] * 100 / max_voted_number + '%';
        voted_bar.style.height = '80%';
        voted_bar.style.backgroundColor = '#f88411';
        voted_bar.style.borderRadius = '8px';  
        var voted_like_img = document.createElement('img');
        voted_like_img.setAttribute('class', 'voted_like_img');
        voted_like_img.id = voted_array[i][0];
        voted_like_img.src = 'asset/img/camp/like.png';
        voted_like_img.style.cursor = 'pointer';
        voted_like_img.style.position = 'absolute';
        voted_like_img.style.right = '5%';
        voted_like_img.style.height = '5%';
        voted_like_img.style.width = '5%';
        voted_like_img.style.opacity = '0.5';
        div.appendChild(voted_name);
        voted_bar_box.appendChild(voted_bar);
        div.appendChild(voted_bar_box);
        div.appendChild(voted_number);
        div.appendChild(voted_like_img);
        container_voted_page.appendChild(div);
      }
      var voted_like_img = document.getElementsByClassName('voted_like_img');
      for(let i = 0; i<voted_array.length; i++){
        voted_like_img[i].addEventListener('click', function(){
          let number = document.getElementById('voted_page_item_number_'+i);
          let bar = document.getElementById('voted_bar_'+i);
          var id = voted_like_img[i].id;
  
          if(voted_like_img[i].style.opacity == '0.5'){
            number.innerText = parseInt(number.innerText) + 1;
            voted_like_img[i].style.opacity = '1';
  
            pools.doc(id).update({
              voted: voted_array[i][2] + 1,
            })
            console.log('Liked! Added 1 voted.');
          }
          else{
            number.innerText = parseInt(number.innerText) - 1;
            voted_like_img[i].style.opacity = '0.5';
  
            pools.doc(id).update({
              voted: voted_array[i][2],
            })
            console.log('Canceled liked! Removed 1 voted.');
          }
          bar.style.width = parseInt(number.innerText)*100 / max_voted_number + '%';
        });
      }
  
      var hint = document.createElement('div');
      hint.setAttribute('class', 'hint');
      hint.innerText = '您輸入的資料必須為總長3個字的系所(XX系)';
      hint.style.visibility = 'hidden';
      var checkans = document.createElement('input');
      checkans.style.textAlign = 'left';
      checkans.style.width = '150%';
      checkans.type = 'text';
      checkans.placeholder = '輸入你想許願的科系！        Ex：應數系';
      checkans.name = 'department_checkans' ;
      var container_voted_send = document.createElement('div');
      container_voted_send.style.display = 'grid';
      container_voted_send.style.gridTemplateColumns = '1fr 1fr';
      var button = document.createElement('button');
      button.style.float = 'right';
      if (/mobile/i.test(navigator.userAgent)) {
        button.style.width = '40%';
        button.style.height = '90%';
        button.style.marginLeft = '60%';
        // button.style.marginTop = '-5.5%';
        // button.style.marginRight = '2%';
      }
      else{
        button.style.width = '40%';
        button.style.height = '90%';
        button.style.marginLeft = '60%';
        // button.style.marginTop = '-3vh';
        // button.style.marginRight = '1%';
  
      }
      button.innerHTML = '送出';
      button.addEventListener('click', function(){
        var comment = checkans.value;
        if(comment != "") {
          if(comment.includes("系", 2)){
            var pools_comment = db.collection('pools_comment');
            var number = 1;
            pools_comment.get().then(querySnapshot => {
              querySnapshot.forEach(doc => {
                if(doc.id == comment)
                  number = doc.data().num + 1;
              });
            });
            setTimeout(function(){
              pools_comment.doc(comment).set({
                num: number+0
              });
              modal.style.display = "none";
              setTimeout(function(){
                window.location.reload();
              }, 500);
            }, 500);
          }
          else
            hint.style.visibility = 'visible';
        }
        else{
          setTimeout(function(){
            window.location.reload();
          }, 500);
        }
  
        console.log("update succeed!");
      });
  
      container_voted_send.appendChild(checkans);
      container_voted_send.appendChild(button);
      container_voted_page.appendChild(container_voted_send); 
      container_voted_page.appendChild(hint);
    }
  flag = false;
  }
  
  
  
// var container_pool = document.getElementById('container_pool');
$(function(){
  $(window).scroll(function(){
  
    try{
      var voted_bar = document.getElementsByClassName('voted_bar');
      var container_pool_offsetTop = container_pool.offsetTop;
      for(let i = 0; i<3; i++){
        if (window.pageYOffset >= container_pool_offsetTop - 850)
          voted_bar[i].style.animationPlayState = 'running';
        else
          voted_bar[i].style.animationPlayState = 'paused';
      }
    } catch (error){
      console.log(error);  
    }
  });
});

const window_top = $(window).height();
var scroll_flag_step = [true, true, true];
var step_list = document.getElementsByClassName('step');
for(let i = 0;i<step_list.length; i++)
  $(step_list[i]).css({'margin-top':'4%','opacity':'0'});
$(window).bind('scroll resize', function(){
  for(let i = 0; i<step_list.length; i++){
    var step_top = $(step_list[i]).offset().top;
    var step_bottom = $(step_list[i]).offset().top + parseInt($('.step').css('height'));
    if((step_top <= window_top + $(document).scrollTop() && step_bottom + window_top >= window_top + $(document).scrollTop()) && scroll_flag_step[i]){
        $(step_list[i]).animate({opacity: '1', marginTop: '2%', marginBottom: '2%'}, 1000, 'swing');
        scroll_flag_step[i] = false;
    }
  }
});
