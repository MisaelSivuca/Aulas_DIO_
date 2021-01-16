var nome = "Misael Nascimento";
// var idade = prompt("Qual a sua idade?");
var idade = 10
var frase =  "Eu moro em Paudalho";
console.log("Olá " + nome);
console.log(frase.replace("Paudalho", "Recife"));
if(idade>18){
    console.log("Maior de idade");
}else{
    console.log("Menor de idade");
}

var lista = ["maça", "pêra", "Laranja"];
console.log(lista);
console.log("Minha fruta " + lista[1]);
lista.push("uva"); //adicionei a uva na última posição
console.log(lista);
lista.pop(); // retinei o elemento na última posição da ista
console.log(lista);
console.log(lista.length);  //visualizo o tamanho da lista
console.log(lista.reverse()); // inverter os elementos da lista
console.log(lista.join(" - "));

// Dicionário
var fruta ={nome:"maça", cor:"Vermelha"};
console.log(fruta.nome);

//Lista de Dicionários
var frutas = [{nome:"Uva", cor:"Roxa"} , {nome:"Kiwi", cor:"Verde"}, {nome:"Acerola", cor:"Vermelha"}];
// Estou colocando a cor roxa no Kiwi
console.log(frutas[1].nome, frutas[0].cor); 

/*
var count = 0;
while(count>5){
    alert(count);
    count = count ++;
}
*/

// trabalhando com data
var d = new Date();
console.log(d);
console.log(d.getDate() + " Data sem o mês");
console.log(d.getHours() + " hora do dia");
console.log(d.getMinutes() + " Minutos");
console.log(d.getFullYear() + " ano");


var lista2 = ["Alemanha", "Inglaterra", "Escócia"];
lista.push("Polônia");
lista.pop("Inglaterra");
console.log(lista2)
