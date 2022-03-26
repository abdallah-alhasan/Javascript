let create = document.getElementsByName("create")[0]
create.onclick = function (){
    let num = document.getElementsByName("elements")[0]
    let text = document.getElementsByName("texts")[0]
    let type = document.getElementsByName("type")[0]
    let myElement;
    for (i=0 ; i < num.value ; i++){
    myElement= document.createElement(type.value)
    myElement.innerHTML = text.value
    myElement.setAttribute("class", "box")
    myElement.setAttribute("title", "element")
    myElement.setAttribute("id", `id-${i + 1}`)
    document.body.appendChild(myElement)
    }
    // return myElement
}
