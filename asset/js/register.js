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


function abc(){
  var comment = "可愛系";
        if(comment != "") {
          if(comment.includes("系", 2)){
            var pools_comment = db.collection('user');
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
}


function setAction(form) {
  // const Vname = document.getElementById("name").value;
  
  // var userdb = db.collection('user');
  // userdb.doc(Vname).set({
  //   name: Vname
  // })
  // alert("...")
  // form.action = "login.html";

  var comment = "可愛系";
        if(comment != "") {
          if(comment.includes("系", 2)){
            var pools_comment = db.collection('user');
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
  
}





  // const Vname = document.getElementById("name").value;
  // const Vschool = document.getElementById("school").value;
  // const Vgrade = document.getElementById("grade").value;
  // const Vemail = document.getElementById("email").value;
  // const Vphone = document.getElementById("phone").value;
  // const Vparent = document.getElementById("parent").value;
  // const Vrelation = document.getElementById("relation").value;
  // const Vparent_phone = document.getElementById("parent_phone").value;
  // const Vuname = document.getElementById("uname").value;
  // const Vpsw = document.getElementById("psw").value;
  // const Vcheck_psw = document.getElementById("check_psw").value;

  
  // userdb.doc("comment").set({
  //   name: Vname,
  //   school: Vschool,
  //   grade: Vgrade,
  //   email: Vemail,
  //   phone: Vphone,
  //   parent: Vparent,
  //   relation: Vrelation,
  //   parent_phone: Vparent_phone,
  //   username: Vuname,
  //   password: Vpsw
  // })
