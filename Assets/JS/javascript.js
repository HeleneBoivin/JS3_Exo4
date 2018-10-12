function check(){
var password = document.getElementById("password").value;
var confirmPassword = document.getElementById("confirmPassword").value;
  if (password== "" || confirmPassword == ""){
    document.getElementById("password").style.border = "solid 2px red";
    document.getElementById("confirmPassword").style.border = "solid 2px Red";
    alert("entrer un mot de passe");
  }else if ( password == confirmPassword ){
document.getElementById("password").style.border = "solid 2px green";
document.getElementById("confirmPassword").style.border = "solid 2px green";
}else{
  document.getElementById("password").style.border = "solid 2px red";
  document.getElementById("confirmPassword").style.border = "solid 2px red";
}
}
