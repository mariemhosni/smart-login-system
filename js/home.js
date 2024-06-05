
 var logOutBtn = document.getElementById("logOutBtn")
 var userName = localStorage.getItem("userName");
 var welcomeUser = document.getElementById("userName");

welcomeUser.innerHTML = "Welcome " + userName;

logOutBtn.addEventListener("click", function () {
    window.location.href = "index.html";
  });
  




