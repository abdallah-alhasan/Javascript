let email = document.getElementById("email")
let tel = document.getElementById("tel")
let password = document.getElementById("password")
let submit = document.getElementById("submit")
let emailAlert = document.querySelector(".pwd")
let telAlert = document.querySelector(".num")
let shortpassword = document.querySelector(".short")
let specialpassword = document.querySelector(".special")
email.onblur = function (){
  if (email.value.endsWith(".com") === false || email.value.includes("@") === false ){
    emailAlert.style.display = "inline"
    submit.disabled = true
  }
  else{
    emailAlert.style.display = "none"
    submit.disabled = false
  }
}
tel.onblur = function (){
  if (tel.value.startsWith("07") === false || tel.value.length != 10 ){
    telAlert.style.display = "inline"
    submit.disabled = true

  }
  else{
    telAlert.style.display = "none"
    submit.disabled = false

  }
}
password.onblur = function (){
  if (password.value.length < 10 ){
    shortpassword.style.display = "inline"
  }
  else{
    shortpassword.style.display = "none"
  }
  if (typeof password.value.split("").filter(function(el){return  typeof Number("2") !== NaN}) === null ){
    specialpassword.style.display = "inline"
  }
  else{
    specialpassword.style.display = "none"
  }
}