let added;
let addClass = document.querySelector(".classes-to-add")
let removeClass = document.querySelector(".classes-to-remove")
let current = document.querySelector(".current")
let toAdd = document.querySelector(".toAdd")
function addDiv(){
    if (addClass.value !== ""){
        for (i=0 ; i < addClass.value.split(" ").length ; i++){
        added = document.createElement("div")
        added.innerHTML = addClass.value.split(" ").sort()[i]
        current.classList.toggle(`${addClass.value.split(" ").sort()[i]}`)
        toAdd.append(added)
        added.classList.add("added")
        }
    }
    else{
        alert("Please add a class")
    }
    addClass.value = ""
}
function removeit(){
    let toRemove = document.getElementsByClassName("added")
    if (removeClass.value !== ""){
        for (i=0 ; i < toRemove.length ; i++){
        if (removeClass.value ===  toRemove[i].innerHTML){
        toRemove[i].remove()
        current.classList.remove(`${removeClass.value.split(" ")[i]}`)
        }
        }
    }
    else{
        alert("Please add a class to remove")
    }
    removeClass.value = ""
}