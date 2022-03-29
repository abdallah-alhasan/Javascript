let select =document.getElementById("char")
let option = document.getElementsByTagName("option")
async function getData() {
  const response =await fetch("https://www.breakingbadapi.com/api/characters");
  const data =await response.json();
  for (let i = 0; i < data.length; i++) {
    select.innerHTML += `<option value = "${i}"> ${data[i].name} </option>`
  }
    select.onchange = function nickName(){
          let myDiv =document.createElement("div")
          myDiv.classList.add("nickName")
          myDiv.innerHTML = `Nickname: ${data[this.value].nickname}`
          select.after(myDiv) 
      }
}
getData()

