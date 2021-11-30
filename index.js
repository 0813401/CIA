// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiTTx6ZNggajmMn_R_xUQ4H1Pe73Np-s0",
  authDomain: "ciateam-6d554.firebaseapp.com",
  projectId: "ciateam-6d554",
  storageBucket: "ciateam-6d554.appspot.com",
  messagingSenderId: "892094395466",
  appId: "1:892094395466:web:a9fa12d743357b910522b3",
  measurementId: "G-Z5JXQMSE3V"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)
// const analytics = getAnalytics(app);
const db = firebase.firestore()

// var account = "89113000"; //post 
// var password = "00891130";

// db.collection('users')
//   .add({
//     account: account, //欄位名稱，欄位資料
//     password: password
//   })
//   .then(function(docRef) {
//     console.log('Document written with ID: ', docRef.id)
//   })
//   .catch(function(error) {
//     console.error('Error adding document: ', error)
//   })

// var ref = db.collection("users");
// // var n = ref.size();
// ref.get().then(querySnapshot => {
//     querySnapshot.forEach(doc => {
//       // console.log(doc.id, doc.data());
//       // console.log(doc.id)
//       // console.log(doc.data());
//     });
//   });

const the_card_container = document.getElementById('card_container');
var count_for_card_text = 1;
var count_for_card_cover_and_back = 0;
var array_card_text = [['C','O','M','P','A','N','Y','I','N','A','I','R'],
                       ['C',' ', 'A',' ', 'M',' ', 'P','I','N','A','I','R'], 
                       ['C','O','N','S','U','L','T','I','N','A','I','R']];
create_card_div();
var card_rotate_interval = window.setInterval(card_rotate, 2000);

function create_card_div(){
  for(let i = 0; i<array_card_text[0].length; i++){
    var div = document.createElement('div');
    div.setAttribute('id', 'card_div' + i.toString());
    div.setAttribute('class', 'card_container'); 
    div.style.display = 'inline-block';
    div.style.borderRadius = '10%';
    div.style.margin = '0.8%';
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
        div.style.marginLeft = '3%';
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
  var div; 
  div = document.createElement('div');
  div.setAttribute('class', 'white_text');
  div.innerText = '我們相信，透過';
  div.style.display = 'inline';
  div.style.fontSize = '3.5vw';
  div.style.fontWeight = '900';
  the_card_container.appendChild(div);
  div = document.createElement('div');
  div.style.color = '#284b75'
  div.style.display = 'inline';
  div.style.fontSize = '3.5vw';
  div.style.fontWeight = '900';
  div.innerText = '創新';
  the_card_container.appendChild(div);
  div = document.createElement('div');
  div.setAttribute('class', 'white_text');
  div.innerText = '與';
  div.style.display = 'inline';
  div.style.fontSize = '3.5vw';
  div.style.fontWeight = '900';
  the_card_container.appendChild(div);
  div = document.createElement('div');
  div.style.color = '#284b75'
  div.style.display = 'inline';
  div.innerText = '個人化';
  div.style.fontSize = '3.5vw';
  div.style.fontWeight = '900';
  the_card_container.appendChild(div);
  div = document.createElement('div');
  div.setAttribute('class', 'white_text');
  div.innerText = '的平台方法';
  div.style.display = 'inline';
  div.style.fontSize = '3.5vw';
  div.style.fontWeight = '900';
  the_card_container.appendChild(div);
  div = document.createElement('div');
  div.setAttribute('class', 'white_text');
  div.innerText = '每位高中生都能有效「找尋」並「進入」到理想校系';
  div.style.fontSize = '3.5vw';
  div.style.fontWeight = '900';
  the_card_container.appendChild(div);

}

function card_rotate(){
  var flag_for_cover = false;
  if(count_for_card_cover_and_back %2 ==0)
    flag_for_cover = true;
  for(let i = 0; i<array_card_text[0].length; i++){
    var div = document.getElementById('card_div'+i.toString());
    var div_cover = div.getElementsByClassName('card_cover')[0];
    var div_back = div.getElementsByClassName('card_back')[0];
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


// console.log(the_card_container.style.width, the_card_container.style.height);
console.log(the_card_container.style);