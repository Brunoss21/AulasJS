//Exericio 2
function obterJson(){
    let obj = [
        {nome : "teste0", acao : "MOSTRAR"},
        {nome : "teste1", acao : "IGNORAR"},
        {nome : "teste2", acao : "MOSTRAR"},
        {nome : "teste3", acao : "IGNORAR"},
        {nome : "teste4", acao : "MOSTRAR"},
    ]
}

function doisA(){
    let obj = obterJson();
    for(let i=0; i< obj.length; i++ ){
        if(obj[i].acao === "MOSTRAR"){
            let p = document.createElement("p");
            p.innerHTML = obj[i].nome;
            document.body.appendChild(p);
        }
    }
}

//Exercicio 2
function doisA(){
    let obj = obterJson();
    let ctMostrar = 0;
    for(let i=0; i< obj.length; i++ ){
        if(obj[i].acao === "MOSTRAR"){
            let p = document.createElement("p");
            p.innerHTML = obj[i].nome;
            document.body.appendChild(p);
            ctMostrar++;
        }
    }
    let div = document.createElement("div");
    div.innerHTML = ctMostrar;
    document.body.appendChild(div);
    let div2 = document.createElement("div");
    div2.innerHTML = obj.length - ctMostrar;
    document.body.appendChild(div2);
}

//Exercicio 3
function rolar(){
    let n = document.querySelector("#numero").value;
    let ul = document.createElement("ul");
    for(let i=0; i < n; i++){
        let li = document.createElement("li");
        li.innerHTML = i;
        li.style.color = n % 2 == 0 ? "blue" : "red";
        ul.appendChild(li);

    }
    document.body.appendChild(ul);
}

//Exercicio 4
function imgs(){
    let n = 10;
    for(let i = 0; i <10; i++){
        let img = document.createElement("img");
        img.src = "image"+i+".png";
        document.body.appendChild(img);
    }
}
