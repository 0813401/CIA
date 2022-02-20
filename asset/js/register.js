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
  const Vname = document.getElementById("name").value;
  const Vschool = document.getElementById("school").value;
  const Vgrade = document.getElementById("grade").value;
  const Vemail = document.getElementById("email").value;
  const Vphone = document.getElementById("phone").value;
  const Vparent = document.getElementById("parent").value;
  const Vrelation = document.getElementById("relation").value;
  const Vparent_phone = document.getElementById("parent_phone").value;
  const Vuname = document.getElementById("uname").value;
  const Vpsw = document.getElementById("psw").value;
  const Vcheck_psw = document.getElementById("check_psw").value;
  // const checkbox = document.getElementById("agree");

  var userDB = db.collection('user');
  var flag = 0;
  var reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;

  if(Vname == "" || Vschool == "" || Vgrade == "" || Vemail == "" || Vphone == "" || Vparent == "" || Vrelation == "" || Vparent_phone == "" || Vuname == "" || Vpsw == "" || Vcheck_psw == "")
  {
    Swal.fire({
      icon: 'warning',
      title: 'Oops...',
      text: '每欄皆為必填',
      allowOutsideClick: false,
      showCancelButton: false,
    })
  }else if(Vphone.includes("09",0) == false || Vphone.length != 10 || Vparent_phone.includes("09",0) == false || Vparent_phone.length != 10){
    Swal.fire({
      icon: 'warning',
      title: 'Oops...',
      text: '請輸入正確手機格式',
      allowOutsideClick: false,
      showCancelButton: false,
    })
  }else if(reg.test(Vemail) == false){
    Swal.fire({
      icon: 'warning',
      title: 'Oops...',
      text: '請輸入正確信箱格式',
      allowOutsideClick: false,
      showCancelButton: false,
    })
  }
  // else if(checkbox.checked == false){
  //   Swal.fire({
  //     icon: 'warning',
  //     title: 'Oops...',
  //     text: '須同意相關規定',
  //     allowOutsideClick: false,
  //     showCancelButton: false,
  //   })
  // }
  else if(Vpsw != Vcheck_psw){
    Swal.fire({
      icon: 'warning',
      title: 'Oops...',
      text: '請再確認一次密碼',
      allowOutsideClick: false,
      showCancelButton: false,
    })
  }else{
    userDB.get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        if(doc.data().username == Vuname)
        {
          flag = 1;
        }
      });
    });

    setTimeout(function(){
      if(flag == 1)
      {
        Swal.fire({
          icon: 'warning',
          title: 'Oops...',
          text: '此帳號已被註冊過',
          allowOutsideClick: false,
          showCancelButton: false,
        })
      }else{
        userDB.doc().set({
          name: Vname,
          school: Vschool,
          grade: Vgrade,
          email: Vemail,
          phone: Vphone,
          parent: Vparent,
          relation: Vrelation,
          parent_phone: Vparent_phone,
          username: Vuname,
          password: Vpsw
        });

        setTimeout(function(){
          Swal.fire({
            icon: 'success',
            title: 'OK',
            text: '註冊成功',
            allowOutsideClick: false,
            showCancelButton: false,
          }).then((result) => {
            if (result.value) {
              window.location = 'login.html';
            }
          })
        }, 500);
      }
    }, 500);
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





// function setAction(form) {
//   var comment = "可愛系";
//         if(comment != "") {
//           if(comment.includes("系", 2)){
//             var pools_comment = db.collection('user');
//             var number = 1;
//             pools_comment.get().then(querySnapshot => {
//               querySnapshot.forEach(doc => {
//                 if(doc.id == comment)
//                   number = doc.data().num + 1;
//               });
//             });
//             setTimeout(function(){
//               pools_comment.doc(comment).set({
//                 num: number+0
//               });
//               modal.style.display = "none";
//               setTimeout(function(){
//                 window.location.reload();
//               }, 500);
//             }, 500);
//           }
//           else
//             hint.style.visibility = 'visible';
//         }
//         else{
//           setTimeout(function(){
//             window.location.reload();
//           }, 500);
//         }
  
// }


