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



function send(){
  const Vuname = document.getElementById("uname").value;
  const Vphone = document.getElementById("phone").value;
  const Vpsw = document.getElementById("psw").value;
  const Vcheck_psw = document.getElementById("check_psw").value;

  if(Vpsw != Vcheck_psw){
    Swal.fire({
      icon: 'warning',
      title: 'Oops...',
      text: '請再確認一次密碼',
      allowOutsideClick: false,
      showCancelButton: false,
    })
  }else{
    var userDB = db.collection('user');
    var flag = 0;
    var user_id = 0;

    userDB.get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
            if(doc.data().username == Vuname && doc.data().phone == Vphone)
            {
            flag = 1;
            user_id = doc.id;
            }
        });
        });

    setTimeout(function(){
        if(flag == 0)
            {
                Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: '帳號或手機號碼錯誤',
                allowOutsideClick: false,
                showCancelButton: false,
                })
            }else{
                
                userDB.doc(user_id).update({
                    password: Vpsw
                });
                Swal.fire({
                    icon: 'success',
                    title: 'OK',
                    text: '密碼更新成功',
                    allowOutsideClick: false,
                    showCancelButton: false,
                }).then((result) => {
                    if (result.value) {
                    window.location = 'login.html';
                    }
                })
            }
    }, 1000);
  }
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
