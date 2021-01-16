function funcaoLoad(){
    alert("Nesta aula estamos vendo function e manipulação de elementos atevés do DOM")
}
function funcaoChamge(elemento){
    console.log(elemento.value);
}

var idade = 15;
function validaIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}
console.log(validaIdade(idade));


function meuBtn(){
    console.log("Você clicou");
    var bt = document.getElementById("txt_1").innerHTML = "Obrigado por Clicar";
    //console.log(document.getElementById('sub_1'));
}   
 function redirecionamento(){
     window.open("https://github.com/MisaelSivuca");
     window.location.href = "https://www.linkedin.com/in/misael-nascimento-57681659/";
 }
 function trocaTxt(){
     document.getElementById("txt_3").innerHTML = "Vodê passou o mouse e mudei o elemento através do id.";
 }
 function destrocaTxt(){
    document.getElementById("txt_3").innerHTML = "Passe o mouse aqui.";
}
// Essas duas funções obtem o mesmo resultado que as funções anteriores.
function vaiTxt(elemento){
    elemento.innerHTML = "Estou fazendo a mesma coisa de uma maneira diferente, dessa vez sem usar o id.";
}
function voltaTxt(elemento){
   elemento.innerHTML = "Passe também o mouse aqui.";
}
