let checkPass = document.getElementById("Repeat");
let submit = document.getElementById("submit");
let fNameSpan= document.getElementById("firstName")
let lNameSpan= document.getElementById("lastName")
let pass= document.getElementById("pass")
let chpass= document.getElementById("checkpass")
let name = document.getElementsByClassName("name");
let nameReg = /[a-zA-Z]/;
let password=document.getElementById("password");
let passwordReg= /(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/; 


submit.onclick = function() {
  
  if(name[0].value.match(nameReg)){
    fNameSpan.style.display = "none"
  }else{
    fNameSpan.style.display = "inline"
  }
  if(name[1].value.match(nameReg)){
    lNameSpan.style.display = "none"
  }else{
    lNameSpan.style.display = "inline"
  }
  if(password.value.match(passwordReg)){
    pass.style.display = "none"
  }else{
    pass.style.display = "inline"
  }
  if(password.value === checkPass.value){
    chpass.style.display = "none"
  }else{
    chpass.style.display = "inline"
  }
}