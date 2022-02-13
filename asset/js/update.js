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
// const Vuname = document.getElementById("uname").value;
// const Vpsw = document.getElementById("psw").value;
// const Vcheck_psw = document.getElementById("check_psw").value;
// || Vuname == "" || Vpsw == "" || Vcheck_psw == ""

var reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
var userDB = db.collection('user');

if(Vname == "" || Vschool == "" || Vgrade == "" || Vemail == "" || Vphone == "" || Vparent == "" || Vrelation == "" || Vparent_phone == "")
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
}else{
    userDB.doc(ID).update({
        name: Vname,
        school: Vschool,
        grade: Vgrade,
        email: Vemail,
        phone: Vphone,
        parent: Vparent,
        relation: Vrelation,
        parent_phone: Vparent_phone
    });
    sessionStorage.setItem('name', Vname);
    setTimeout(function(){
        Swal.fire({
            icon: 'success',
            title: 'OK',
            text: '個人資訊修改成功',
            allowOutsideClick: false,
            showCancelButton: false,
        }).then((result) => {
            if (result.value) {
            window.location = 'index.html';
            }
        })
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
  
  
  
  
var ID = sessionStorage.getItem('id');
// var School = sessionStorage.getItem('school');
// var Grade = sessionStorage.getItem('grade');
// var Email = sessionStorage.getItem('email');
// var Phone = sessionStorage.getItem('phone');
// var Parent = sessionStorage.getItem('parent');
// var Relation = sessionStorage.getItem('relation');
// var Parent_phone = sessionStorage.getItem('parent_phone');
// var Id = sessionStorage.getItem('id');

var Name = "";
var School = "";
var Grade = "";
var Email = "";
var Phone = "";
var Parent = "";
var Relation = "";
var Parent_phone = "";

var userDB = db.collection('user');
userDB.get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
        if(doc.id == ID)
        {
            Name = doc.data().name;
            School = doc.data().school;
            Grade = doc.data().grade;
            Email = doc.data().email;
            Phone = doc.data().phone;
            Parent = doc.data().parent;
            Relation = doc.data().relation;
            Parent_phone = doc.data().parent_phone;
        }
    });
});

setTimeout(function(){
    document.getElementById("name").value = Name;
    document.getElementById("school").value = School;
    document.getElementById("grade").value = Grade;
    document.getElementById("email").value = Email;
    document.getElementById("phone").value = Phone;
    document.getElementById("parent").value = Parent;
    document.getElementById("relation").value = Relation;
    document.getElementById("parent_phone").value = Parent_phone;
}, 1000);
