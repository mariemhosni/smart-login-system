var signinEmailInput = document.getElementById("signinEmail"); 
var signinPasswordInput = document.getElementById("signinPassword");
var loginbtnInput = document.getElementById("loginbtn");
var incorrectMsg = document.getElementById("incorrect");

 loginList = [];

 if (localStorage.getItem("info") != null) {
  loginList = JSON.parse(localStorage.getItem("info"));
}

function login(){
  var signinEmail = signinEmailInput.value ;
  var signinPassword = signinPasswordInput.value ;

  if (signinEmailInput.value === "" || signinPasswordInput.value === "") {
    incorrectMsg.innerHTML="All inputs is required";
    incorrectMsg.style.color="#DC3542";


  }
  if (correctData(signinEmail, signinPassword)) {
    window.location = './home.html';
  }
else{
  incorrectMsg.innerHTML="Incorrect email or password";
    incorrectMsg.style.color="#DC3542";
}
}


function correctData(email ,password){
for( var i= 0 ; i < loginList.length ; i++ ){
  if (loginList[i].email === email && loginList[i].password === password) {
    localStorage.setItem("userName", loginList[i].name);
    return true;
  }
  return false;

}

}



loginbtnInput.addEventListener("click" , function(){
  login();
})












