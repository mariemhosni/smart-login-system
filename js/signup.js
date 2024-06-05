
var signupNameInput  = document.getElementById("signupName");
var signupEmailInput = document.getElementById("signupEmail");
var signupPasswordInput = document.getElementById("signupPassword");
var signUpInput = document.getElementById("SignUp");
var incorrectMsg = document.getElementById("incorrect");
var correctMsg =document.getElementById("correct");

loginList = [];


  
  function signUp(){
    var data = {
        name:signupNameInput.value,
        email:signupEmailInput.value,
        password:signupPasswordInput.value,
      
        }

 if( validEmail(signupEmailInput.value) &&  newEmail(signupEmailInput.value) )
    {

  loginList.push(data);
localStorage.setItem('info' , JSON.stringify(loginList));
incorrectMsg.classList.add('d-none');
correctMsg.classList.remove('d-none');
document.getElementById("correct").style.color = "#28A744";
 
  window.location='index.html';


 }
 
else {
  

    localStorage.setItem('info' , JSON.stringify(loginList));
    correctMsg.classList.add('d-none');
    incorrectMsg.classList.remove('d-none');

    document.getElementById("incorrect").style.color = "#DC3542";
 
 }

  }

  signUpInput.addEventListener('click' , function(){
signUp();
   
  }) 
   

 function clearForm() {
    signupNameInput.value = "";
    signupEmailInput.value = "";
    signupPasswordInput.value = "";
  }
  

function validEmail(email){
var regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
return regexEmail.test(email);
}

function newEmail(email){
for(var i =0 ; i< loginList.length ; i++){
   if (loginList[i].email == email) {
        return false;
      }
    }
    return true; 
}
    






























