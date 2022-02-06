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



// sessionStorage.clear();
sessionStorage.removeItem('status');

function send(){
  const Vuname = document.getElementById("uname").value;
  const Vpsw = document.getElementById("psw").value;
  const checkbox = document.getElementById("checkbox");

  var userDB = db.collection('user');
  var flag = 0;

  userDB.get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        if(doc.data().username == Vuname && doc.data().password == Vpsw)
        {
          flag = 1;
        }
      });
    });

  setTimeout(function(){
      if(flag == 0)
        {
            Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: '帳號或密碼錯誤',
            allowOutsideClick: false,
            showCancelButton: false,
            })
        }else{
            sessionStorage.setItem('status', 'login');
            if(checkbox.checked == true){
              sessionStorage.setItem('username', Vuname);
              sessionStorage.setItem('password', Vpsw);
            }else{
              sessionStorage.removeItem('username');
              sessionStorage.removeItem('password');
            }
            
            window.location = 'index.html';
        }
  }, 1000);

  
}


var CLICKTAG = 0;
function button_onclick(pElement){
  
  if (CLICKTAG == 0) {  
    CLICKTAG = 1;  
    pElement.disabled=true;
    // 等待3s後重置按鈕可用
    setTimeout(function () { CLICKTAG = 0 ; pElement.disabled=false;}, 3000);  
  }
}


var ss_uname = sessionStorage.getItem('username');
var ss_psw = sessionStorage.getItem('password');
document.getElementById("uname").value = ss_uname;
document.getElementById("psw").value = ss_psw;
