// const featured_photos = document.getElementById('featured_photos');
// const carousel_item = featured_photos.getElementsByClassName('carousel-item');

// var div_container = document.createElement('div');
// div_container.setAttribute('class', 'carousel-indicators')
// featured_photos.appendChild(div_container);
// for(let i = 0; i<carousel_item.length; i++){
//     var button = document.createElement('button');
//     button.setAttribute('data-bs-silde-to', i.toString()); 
//     button.setAttribute('aria-label', 'Silde '+(i+1).toString());
//     button.style.display = 'inline';
//     var img = document.createElement('img');
//     img.style.height = '30%';
//     img.style.maxHeight = '100px';
//     img.style.padding = '0.5%';
//     img.style.objectFit = 'cover';
//     img.src = carousel_item[i].getElementsByTagName('img')[0].src;
//     // img.addEventListener('click', function(){
        
//     // });
//     button.appendChild(img);
//     // console.log(img);
//     // button.innerHTML = img;
//     div_container.appendChild(button);
// }

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


const camp_container= document.getElementById('recent_camp_item');
const n_camp = 8;
const text = [["8/1 一日數學營"], ["8/8 一日資工營"], ["8/15 一日電機營"], ["8/23 兩日財管營"], ["1"], ["1"], ["1"], ["1"]];
const price = [["1,200"], ["1,200"], ["1,000"], ["2,200"], ["1"], ["1"], ["1"], ["1"]];
const info = [["報名中"], ["報名中"], ["早鳥優惠中"], ["即將開放報名"], ["1"], ["1"], ["1"], ["1"]];

var slider = document.createElement('div');
slider.setAttribute('class', 'slider');
slider.style.width = '50%';
slider.style.height = '100%';
camp_container.appendChild(slider);

for(let i = 0; i<n_camp; i++){
    var container_div2 = document.createElement('div');
    container_div2.setAttribute('class', 'slider_item')
    var img_div = document.createElement('div');
    img_div.style.position = 'relative';
    var info_span = document.createElement('span');
    info_span.setAttribute('class', 'info'); 
    info_span.style.color = '#ffbd59';
    info_span.style.backgroundColor = '#fff';
    info_span.style.position = 'absolute';
    info_span.style.opacity = '0.95';
    info_span.style.left = 0;
    info_span.style.padding = '2%';
    info_span.innerHTML = info[i];
    var img = document.createElement('img');
    img.src = 'asset/img/camp/current_camp/0'+ (i+1) +'.png';
    var text_div = document.createElement('div');
    text_div.innerHTML = text[i];
    text_div.style.color = '#284b75';
    var price_div = document.createElement('div');
    price_div.innerHTML = "NT$"+price[i];
    price_div.style.color = '#284b75';
    img_div.appendChild(info_span);
    img_div.appendChild(img); 
    container_div2.appendChild(img_div);
    container_div2.appendChild(text_div);
    container_div2.appendChild(price_div);
    slider.appendChild(container_div2);
}
camp_container.appendChild(slider);

$('.slider').slick({
    centerPadding: 0, 
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    infinite: false,
    dots: false,
    arrows: true,
});

const container_pool = document.getElementById('container_pool');
container_pool.style.backgroundColor = '#fff';
container_pool.style.margin = '1%';
container_pool.style.marginTop = '3%';
container_pool.style.padding = '1.5%';
container_pool.style.borderRadius = '10px';
var pools = db.collection("pools");
pools.get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
      console.log(doc.id, doc.data());
    //   console.log(doc.id)
    //   console.log(doc.data());

        var div = document.createElement('div');
        div.setAttribute('class', 'department_item');
        div.style.padding = '1%';
        var voted_name = document.createElement('div')
        voted_name.style.float = 'left';
        voted_name.style.paddingLeft = '3%';
        voted_name.innerText = doc.id;
        var voted_number = document.createElement('div');
        voted_number.style.textAlign = 'right';
        voted_number.style.paddingRight = '3%';
        voted_number.innerText = doc.data().voted;
        div.appendChild(voted_name);
        div.appendChild(voted_number);
        container_pool.appendChild(div);
    });
  });


function voted_page(){
    console.log("HI");
    var container_voted_page = document.getElementById('container_voted_page');
    var pools = db.collection("pools");
    pools.get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
        var div = document.createElement('div');
        div.setAttribute('class', 'voted_page_item');
        div.style.padding = '1%';
        var voted_name = document.createElement('div')
        voted_name.style.float = 'left';
        voted_name.style.paddingLeft = '3%';
        voted_name.innerText = doc.id;
        var voted_number = document.createElement('div');
        voted_number.style.textAlign = 'right';
        voted_number.style.paddingRight = '3%';
        voted_number.innerText = doc.data().voted;
        div.appendChild(voted_name);
        div.appendChild(voted_number);
        container_voted_page.appendChild(div);
    });
  });
}

var modal = document.getElementById('id01');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
