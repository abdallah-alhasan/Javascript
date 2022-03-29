let cl = document.body.querySelectorAll("*")

    for ( i = 0 ; i < cl.length ; i++){
        cl[i].onclick = function (){
            this.innerHTML = (`This is a ${this.localName}`)
        }
    }