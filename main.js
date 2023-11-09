function rand(min, max) {
min = Math.ceil(1);
max = Math.floor(8);
return Math.floor(Math.random() * (max - min + 1)) + min;
}

function aleatorio(){

    var num = rand(1,8);
    const imagem = document.querySelector("img");

if(num==1){
    imagem.setAttribute("src", "img/1.png");
    //imagem.setAttribute("width", "300px");
}
else if(num==2){
    imagem.setAttribute("src", "img/2.png");
    //imagem.setAttribute("width", "300px");
}
else if(num==3){
    imagem.setAttribute("src", "img/3.png");
    //imagem.setAttribute("width", "300px");
}
else if(num==4){
    imagem.setAttribute("src", "img/4.png");
    //imagem.setAttribute("width", "300px");
}
else if(num==5){
    imagem.setAttribute("src", "img/5.png");
   // imagem.setAttribute("width", "300px");
}
else if(num==6){
    imagem.setAttribute("src", "img/6.png");
   // imagem.setAttribute("width", "300px");

}
else if(num==7){
    imagem.setAttribute("src", "img/7.png");
    //imagem.setAttribute("width", "300px");
}
else if(num==8){
    imagem.setAttribute("src", "img/8.png");
    //imagem.setAttribute("width", "300px");
}

else{
    
}

}

function allowDrop(ev){
    ev.preventDefault();
}

function drag(ev){
    ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev){
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
