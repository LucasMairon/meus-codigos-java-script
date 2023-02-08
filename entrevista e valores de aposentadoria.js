let nomecompleto = prompt("digite seu nome completo")

let nascimento = prompt("digite seu ano de nascimento")

let salario = parseFloat(prompt("digite seu salario"))

let qfilhos = parseInt(prompt("digite a quantidade de filhos"))

let aposentado = (salario*12) * (70-(2022-nascimento))

let dividesal = (salario/qfilhos)

if(qfilhos!=0){

    console.log("ola," + nomecompleto + " tudo bem?\n Voce tem " + (2022-nascimento) + " anos de idade, seu salario e de R$" + (salario.toFixed(2)) + " e recebera R$" + (aposentado.toFixed(2)) +" ate se aposentar \n caso voce deseje dividir seu salario entre os seus filhos,dara R$"+ (dividesal.toFixed(2)) +" para cada um.");

    alert("ola," + nomecompleto + " tudo bem?\n Voce tem " + (2022-nascimento) + " anos de idade, seu salario e de R$" + (salario.toFixed(2)) + " e recebera R$" + (aposentado.toFixed(2)) +" ate se aposentar \n caso voce deseje dividir seu salario entre os seus filhos,dara R$"+ (dividesal.toFixed(2)) +" para cada um.");
}
    else{
        console.log("ola," + nomecompleto + " tudo bem?\n Voce tem " + (2022-nascimento) + " anos de idade, seu salario e de R$" + (salario.toFixed(2)) + " e recebera R$" + (aposentado.toFixed(2)) +" ate se aposentar \n como voce não tem filhos então seu salario permanecerá apenas com voce");

        alert("ola," + nomecompleto + " tudo bem?\n Voce tem " + (2022-nascimento) + " anos de idade, seu salario e de R$" + (salario.toFixed(2)) + " e recebera R$" + (aposentado.toFixed(2)) +" ate se aposentar \n como voce não tem filhos então seu salario permanecerá apenas com voce");
    }
