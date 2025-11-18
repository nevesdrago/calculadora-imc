function calcularIMC() {

let peso, altura, imc;

peso = document.getElementById("peso").value;
altura = document.getElementById("altura").value;

imc = peso / (altura * altura);

document.getElementById("resultado").textContent = "Seu IMC é: " + imc.toFixed(2);

if (Number.isNaN(imc)){
    document.getElementById("classificacao").textContent = "Digite um valor válido";
}

else if (imc < 18.5){
    document.getElementById("classificacao").textContent = "Abaixo do peso";
}

else if (imc > 18.5 && imc < 24.9){
    document.getElementById("classificacao").textContent = "Peso normal";
}

else if (imc >= 25 && imc < 29.9){
    document.getElementById("classificacao").textContent = "Sobrepeso";

}

else {
    document.getElementById("classificacao").textContent = "Obesidade";
}
}