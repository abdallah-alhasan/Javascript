let select =document.getElementById("char")
let option = document.getElementsByTagName("option")
let myDiv =document.createElement("div")
async function getData() {
  const response =await fetch("https://www.breakingbadapi.com/api/characters");
  const data =await response.json();
  for (let i = 0; i < data.length; i++) {
    select.innerHTML += `<option value = "${i}"> ${data[i].name} </option>`
  }
    select.onchange = function nickName(){
          myDiv.classList.add("nickName")
          myDiv.innerHTML = `<p> Nickname: ${data[this.value].nickname} </p> 
          <p> occupation: ${data[this.value].occupation} </p>
          <p> birthday: ${data[this.value].birthday} </p>
          <img src =${data[this.value].img} width = 100>
          <p> status: ${data[this.value].status} </p>
          <p> portrayed: ${data[this.value].portrayed} </p>
          <p> category: ${data[this.value].category} </p> `
          select.after(myDiv) 
      }
}
getData()

