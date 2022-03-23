function addSong(){
  let value = document.getElementById("song").value
  document.body.innerHTML+=(`<div class="added">${value} </div>`)
}