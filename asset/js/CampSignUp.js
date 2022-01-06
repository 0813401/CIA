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
    }
  };



var info_array = [];
var signup = db.collection("camp_SignUp");
signup.get().then(querySnapshot => {
querySnapshot.forEach(doc => {
info_array.push([doc.id,doc.data().name, doc.data().feature1, doc.data().feature2, doc.data().feature3, doc.data().teacher1, doc.data().teacher2, doc.data().teacher3, doc.data().date, doc.data().people, doc.data().money_one, doc.data().money_two, doc.data().deadline, doc.data().step3, doc.data().image_title, doc.data().image_schedule1, doc.data().image_schedule2, doc.data().image_teacher1, doc.data().image_teacher2, doc.data().image_teacher3, doc.data().datetime]);
});

var id = -1; //這裡是代表是哪個營隊(DB中的第幾個)
signup.doc("choose").get().then(doc => {
id = doc.data().choose_id;

info_array.sort((a, b) => a[20] - b[20]);



const Feature1 = document.getElementById('feature1');
const Feature2 = document.getElementById('feature2');
const Feature3 = document.getElementById('feature3');
const Teacher1 = document.getElementById('teacher1');
const Teacher2 = document.getElementById('teacher2');
const Teacher3 = document.getElementById('teacher3');
const Date = document.getElementById('date');
const People = document.getElementById('people');
const Money_one = document.getElementById('money_one');
const Money_two = document.getElementById('money_two');
const Deadline = document.getElementById('deadline');
const Step3 = document.getElementById('step3');
const Img_title = document.getElementById('img_title');
const Img_schedule1 = document.getElementById('img_schedule1');
const Img_schedule2 = document.getElementById('img_schedule2');
const Img_teacher1 = document.getElementById('img_teacher1');
const Img_teacher2 = document.getElementById('img_teacher2');
const Img_teacher3 = document.getElementById('img_teacher3');
Feature1.innerHTML = info_array[id][2];
Feature2.innerHTML = info_array[id][3];
Feature3.innerHTML = info_array[id][4];
Teacher1.innerHTML = info_array[id][5];
Teacher2.innerHTML = info_array[id][6];
Teacher3.innerHTML = info_array[id][7];
Date.innerHTML += info_array[id][8];
People.innerHTML += info_array[id][9];
Money_one.innerHTML += info_array[id][10];
Money_two.innerHTML += info_array[id][11];
Deadline.innerHTML += info_array[id][12];
Step3.innerHTML += info_array[id][13];
Img_title.src = info_array[id][14];
Img_schedule1.src = info_array[id][15];
Img_schedule2.src = info_array[id][16];
Img_teacher1.src = info_array[id][17];
Img_teacher2.src = info_array[id][18];
Img_teacher3.src = info_array[id][19];
if(info_array[id][6] == "")
  Teacher2.style.display = "none";
if(info_array[id][7] == "")
  Teacher3.style.display = "none";
if(info_array[id][18] == "")
  Img_teacher2.style.display = "none";
if(info_array[id][19] == "")
  Img_teacher3.style.display = "none";
});
});
