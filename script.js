function Test(){
    let textarea = document.getElementById("textDelo")  
    let delo = textarea.value
    let div = document.createElement("div")
    div.innerText = delo ;
    div.classList.add("review")

    textarea.value="";
let di = document.getElementById("newRivew")
di.append(div);
}

