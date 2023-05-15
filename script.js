let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");

let subtotalInfo = {
  valor: 11.66,
};



//Primeiro capturar todos os elemntos que vai usar na funcionalidade de clicar no botão + e aumentar 
//os valores.
const addButton = document.getElementById("btn-adicionar-produto-01");
const subButton = document.getElementById("btn-subtrair-produto-01");
const input = document.getElementById("quantidade-produto-01");

function updateSubtotal(quantidadeItens){
    quantidadeSubtotal.innerText = `${quantidadeItens}itens`;
    //Segunda forma de concatenar... quantidadeSubtotal.innerText = input.value + "itens";
    valorSubtotal.innerText = (subtotalInfo.valor*quantidadeItens).toFixed(2); //toFider:defini o número de casas decimais.
}
//Evento Listener
function itensAdd() {
    input.value = Number(input.value) + 1;
    //Transformar string em números

    updateSubtotal(input.value);
};

function itensRemove() {
    if  (input.value > 1){
        input.value = Number(input.value) - 1;

        updateSubtotal(input.value);

 }
};

addButton.addEventListener("click", () => itensAdd());
subButton.addEventListener("click", () => itensRemove());




