function teste(){
    let span = document.querySelector(".alvo");
    let novaDiv = document.createElement("div");
    novaDiv.innerHTML = "Nova div";
    novaDiv.style.backgroundColor = "pink";
    // span.parentNode localiza a div pai do span
    span.parentNode.replaceChild(novaDiv, span);

}

function apagar(){
    let span = document.querySelector(".alvo");
    span.parentNode.removeChild(span);
}

function inserir(){
    let span = document.querySelector(".alvo");
    let div =  document.createElement("div");
    div.innerHTML = "DIV";
    div.setAttribute("class","div-gerada");
    div.style.backgroundColor = "yellow";
    span.parentNode.insertBefore(div, span);
}