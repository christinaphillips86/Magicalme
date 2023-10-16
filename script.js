function answer(){
  var password=document.getElementById("quizQuestion");
 var passwordText=password.value.toUpperCase();
  if(passwordText == "CIVIL RIGHTS ATTORNEY"){
     return true;
}
  alert("WRONG")
  return false;
}