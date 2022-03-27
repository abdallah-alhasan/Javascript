localStorage.clear()
let container = document.createElement("div")
document.body.appendChild(container)
container.setAttribute("class" , "container")
let containerDiv= document.getElementsByClassName("container")[0]

let checkBox = document.getElementsByClassName("checkbox");
function checked() {
    for (i = 0; i < checkBox.length; i++) {
        if (checkBox[i].checked) {
            checkBox[i].value = "Used";
        } else {
            checkBox[i].value = "Not yet";
        }
    }
}
const file = document.querySelector('#file');
file.addEventListener('change', (e) => {
  const [file] = e.target.files;
  const { name: fileName, size } = file;
  const fileSize = (size / 1000).toFixed(2);
  const fileNameAndSize = `${fileName} - ${fileSize}KB`;
  document.querySelector('.file-name').textContent = fileNameAndSize;
});
let img = document.getElementsByClassName("img")[0]
let myImg;
let create = document.getElementsByName("create")[0];
let input = document.getElementsByClassName("input");
create.onclick = function () {
    let myElement;
    for (i = 0; i < input.length; i++) {
        localStorage.setItem(input[i].name, input[i].value);
        myElement = document.createElement("div");
        myElement.setAttribute("class","innerDivs")
        myElement.setAttribute("id",`"innerDiv${i+1}"`)
        myElement.innerHTML = `${input[i].name}: ${localStorage.getItem(input[i].name)}`;
        containerDiv.appendChild(myElement);
        containerDiv.style.background ="linear-gradient(40deg, #ff6ec4, #7873f5)"
    }
    myImg = document.createElement("img");
    myImg.setAttribute("src","../../Images/mock.png")
    myImg.setAttribute("width","200")
    myImg.setAttribute("height","200")
    containerDiv.appendChild(myImg);
    
};
// console.log(document.getElementsByClassName("input")[0].name)
console.log(document.getElementById("CSS").name);
console.log(checkBox[0].value);

