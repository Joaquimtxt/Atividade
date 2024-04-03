//Atividade 1
const exercicio1 = () => {
  document.getElementById("resposta").innerHTML = ``;

  for (let i = 1; i <= 10; i++) {
    document.getElementById("resposta").innerHTML += `<h3> # ${i}  </h3>`;
  }
};

//Atividade 2
const exercicio2 = () => {
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "";
  let numero = document.getElementById("num");
  let error = document.getElementById("erro");
  error.style.display = "none";

  if (numero.value <= 0) {
    error.style.display = "block";
    error.innerHTML = "Erro: Informe números positivos e diferentes de zero";
  } else
    for (let n = 0; n <= numero.value; n += 2) {
      resultado.innerHTML += `<h3> # ${n} </h3>`;
    }
};

//Atividade 3
const exercicio3 = () => {
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  let numero = document.getElementById("num").value;
  numero = Math.round(numero);

  let erro = document.getElementById("erro");

  if (numero <= 0) {
    erro.innerText = "Erro: Favor informar um número positivo e diferente de 0";
    resultado.innerText = "";
  } else {
    erro.innerText = "";
    let primo = true; //declarei a variável para primo
    for (let i = 2; i < numero; i++) {
      if (numero % i == 0) primo = false; //% resto da divisão
    }
    if (numero == 1) primo = false;

    if (primo) {
      resultado.innerText = `O número ${numero} é primo!`;
    } else {
      erro.innerText = `O número ${numero} NÃO é primo!`;
    }
  }
};

//Atividade 4
const exercicio4 = () => {
  let resultado = document.getElementById("resultado");
  let numero = document.getElementById("num").value;
  numero = Math.round(numero);
  let erro = document.getElementById("erro");
  resultado.innerText = "";
  if (numero <= 0) {
    erro.innerText = "Informe um positivo e diferente de 0!";
    resultado.innerText = "";
  } else {
    for (let x = 1; x <= 10; x++) {
      resultado.innerHTML += `<h3> #${numero} X ${x} = ${numero * x} </h3>`;
      erro.innerText = "";
    }
  }
};

//Atividade 5
const exercicio5 = () => {
  let numero = document.getElementById("num").value;
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let y = 0;
  resultado.innerText = "";

  if (numero <= 0) {
    erro.innerText =
      "O número informado precisa ser positivo e diferente de zero!";
  }

  while (y <= numero) {
    if (y % 2 != 0) {
      resultado.innerHTML += `<h3> # ${y} </h3>`;
      erro.innerText = "";
    }
    y++;
  }
};

//Atividade 6
const exercicio6 = () => {
  let numero = document.getElementById("num").value;
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let m = 2;
  let soma = 0;

  resultado.innerText = "";
  if (numero <= 0) {
    erro.innerText = "Coloque um número positivo e diferente de zero!";
  }
  while (m <= numero) {
    if (m % 2 == 0) {
      soma += m;
      resultado.innerHTML = `<h3> A soma é igual:${soma} </h3>`;
      erro.innerText = "";
    }
    m++;
  }
};

//Atividade 7
const exercicio7 = () => {
  let resposta = document.getElementById("resposta");
  let t = 11;

  while (t != 1) {
    t = t - 1;
    resposta.innerHTML += `<h3>#${t}</h3>`;
  }
};

//Atividade 8
const exercicio8 = () => {
  let resultado = document.getElementById("resultado");
  let valor = document.getElementById("palavra").value;
  let valor1 = valor.toLowerCase("");
  const palavra = valor1.split("");
  const palavraInv = []; //Define como um vetor, para no for a gente inverter a palavra e comparar
  let erro = document.getElementById("erro");

  if (valor != 0) {
    resultado.innerText = "";

    for (let i = palavra.length; i >= 0; i--) {
      palavraInv.push(palavra[i]);
    }
    if (palavra.join("") == palavraInv.join("")) {
      resultado.innerHTML = "<h3>Esta palavra é um palíndromo</h3>";
      erro.innerText = "";
    } else if (palavra !== palavraInv.join("")) {
      erro.innerHTML = "<h3>Esta palavra NÃO é um palíndromo</h3>";
    }
  } else {
    erro.innerText = "Coloque uma palavra!";
  }
};

//Atividade 9
const exercicio9 = () => {
  let resposta = document.getElementById("resposta");
  let m = 0;

  for (let i = 1; i <= 100; i++) {
    resposta.innerText = `A soma de todos os números de um a 100 é igual ${(m +=
      i)}`;
  }
};

//Atividade 10
const exercicio10 = () => {
  let numero = document.getElementById("num").value;
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let i = 1;
  let m = 0;

  if (numero > 0) {
    erro.innerText = ""
    while (i <= numero) {
      let soma = (m += i);
      let media = soma / numero;
      resultado.innerHTML = `<h3>A soma dos números até o ${numero} é ${soma}, e a média dessa soma é igual a ${media}</h3>`;
      i++;
    }
  } else {
    erro.innerText = "Coloque um número positivo e diferente de zero!";
    resultado.innerText = ""
  }
};

//Atividade 11
const exercicio11 = () => {
  let resposta = document.getElementById("resposta");
  let m = 0;

  for (let i = 1; i <= 100; i++) {
    resposta.innerHTML += `<h3>3 X ${i} = ${(3*i)}</h3>`;
  }
};

//Atividade 12
const exercicio12 = () => {
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "";
  let erro = document.getElementById("erro");
  let valor = document.getElementById("num").value;
  let numero = valor.split("")//Separa os números em um vetor
  let soma = 0
console.log(numero)

if(valor<=0){
    erro.innerText = "Erro: Favor informar um número positivo e diferente de 0";
    resultado.innerText = "";
}else{
  let contar = 0;
  for (let i = 0; i < numero.length; i++) {
   contar = soma += numero[i]*1 //Esse 1 é para identificar o número como uma variável
    }
    resultado.innerHTML = `a soma de ${numero} é = ${contar}`
  }
}

//Atividade 13
const exercicio13 = () => {
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  let min = document.getElementById("num1").value;
  min = Math.round(min);

  let max = document.getElementById("num2").value;
  max = Math.round(max);

  const numEntre = [];

  let erro = document.getElementById("erro");

  if (min < 0 || max <=0 || min >= max) {
    erro.innerText = "Erro: Favor informar um número positivo e diferente do outro número colocado";
    resultado.innerText = "";
  } else {
    let primo = true;
    
    
    for (let m = 2; m <= max; m++) {
    for (let i = min; i <= max; i++) {

    if(i % m == 0 || i == 1)primo = false;
    else{
      numEntre.push(i);
      }
    }
  }
    
    console.log(numEntre)
  }
      
    }

//Atividade 14
const exercicio14 = () => {
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "";
  let base = document.getElementById("num1").value;
  let altura= document.getElementById("num2").value;
  let erro = document.getElementById("erro");
  let multiplicar = base * altura

if(base <= 0 || altura <= 0){
  erro.innerText = `Não existe medida zerada, nem medida negativa!`
} else{
  resultado.innerHTML = `<h3>A área do retângulo é igual a ${multiplicar}</h3>`
  erro.innerText = ""
}
}

//Atividade 15
const exercicio15 = () => {
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

 let palavra = document.getElementById("palavra").value

  let erro = document.getElementById("erro");
  let vogal = [`a`,`e`,`i`,`o`,`u`];
  let consoante = [`b`, `c`,`d`,`f`,`g`,`h`,`j`,`k`,`l`,`m`,`n`,`p`,`q`,`r`,`s`,`t`,`v`,`w`,`x`,`y`,`z`,]
palavra = palavra.toLowerCase();

  if(palavra == ""){
    erro.innerText = "Coloque uma palavra!"
  } else{
    erro.innerText = "";
    for (let i = 0; i <= palavra.length; i++) {
      for (let z = 0; z <= vogal.length; z++) {
        if(palavra.charAt(i) == vogal[z]){
      resultado.innerText += `|vogal = ${palavra.charAt(i)} `
        } 
      }
      for (let y = 0; y < consoante.length; y++) {
      if(palavra.charAt(i) == consoante[y]){
      erro.innerText += `|consoante = ${palavra.charAt(i)} `
      }
      
    }
  }
}
}

//Atividade 16
const exercicio16 = () => {
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "";
  let raio = document.getElementById("num1").value;
  let erro = document.getElementById("erro");
  let area = 3.14 * (raio**2)

  if(raio <= 0){
    erro.innerText = "Coloque um número positivo e diferente de zero!"
  } else{
    erro.innerText = "";
  resultado.innerHTML = `<h3>A área de um círculo com ${raio} de raio é: ${area}</h3>`
  }
}

//Atividade 17
const exercicio17 = () => {
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "";
  let base = document.getElementById("num1").value;
  let altura= document.getElementById("num2").value;
  let erro = document.getElementById("erro");
  let multiplicar = base * altura

  if (base <= 0 || altura <= 0){
    erro.innerText = "Coloque medidas positivas e diferentes de zero!"
  }else{
    erro.innerText = "";
  resultado.innerHTML = `<h3>A área do triângulo em questão, é: ${multiplicar/2}</h3>`
  }

}

//Atividade 18
const exercicio18 = () => {
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "";
  let base1 = document.getElementById("num1").value*1;
  let base2= document.getElementById("num2").value*1;
  let altura = document.getElementById("num3").value*1;
  let erro = document.getElementById("erro");
  let somar = base1+base2
  let multiplicar = somar * altura;

  if (base1 <= 0 || base2 <= 0 || altura <= 0){
    erro.innerText = "Não pode haver valores negativos ou iguais a zero!"
  }else{
    erro.innerText = "";
    resultado.innerHTML = `<h3>A área do trapézio em questão é igual a:${multiplicar/2}</h3>`
  }
}

//Atividade 19
const exercicio19 = () => {
  let na = document.getElementById("data").value;
 let dataNasc = new Date(document.getElementById("data").value)
 let resultado = document.getElementById("resultado")
 resultado = "";

  let erro = document.getElementById("erro");
let dataAtual = new Date()

let anoN = dataNasc.getFullYear()
let mesN = dataNasc.getMonth()
let diaN = dataNasc.getDate()


let anoA = dataAtual.getFullYear()
let mesA = dataNasc.getMonth()
let diaA = dataNasc.getDate()

if (na == ""){
  erro.innerText = "Coloque a data!"
} else{
  erro.innerText = ""
  if(mesN > mesA ||mesN == mesA && diaN >= diaA){
resultado.innerHTML = `<h3>Sua idade é de ${anoA - anoN} anos!</h3>`
  }else{
    resultado.innerHTML = `<h3>Sua idade é de ${anoA - anoN - 1} anos!</h3>`
  }
}
}

//Atividade 20
const exercicio20 = () => {
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

 
 let valor = document.getElementById("frase").value;
 
 let erro = document.getElementById("erro")
 let frase = valor.split(" ")
 let inverte = []
 
 if (valor == ""){
  erro.innerText = "Coloque uma frase"
 } else {
  erro.innerText = "";
  for (let i = frase.length; i >=0 ;i--) {
    inverte.push(frase[i]);
    
  }
  resultado.innerText = `${inverte.join(" ")}`
 }
}

//Atividade 21
const exercicio21 = () => {
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

 
 let valor = document.getElementById("frase").value;
 
 let erro = document.getElementById("erro")
 let corte = valor.split(" ")

 if (valor == ""){
  erro.innerText = "Coloque uma palavra!"
 } else {
  resultado.innerText = `${corte.join("")}`
 }
}

//Atividade 22


//Atividade 23
const exercicio23 = () => {
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  let frase = document.getElementById("frase").value
 let palavra = document.getElementById("palavra").value
 let corte = frase.split(" ")

  let erro = document.getElementById("erro");
  let contar = 0;

  if(frase == "" || palavra == ""){
    erro.innerText = "Coloque a frase e a palavra!"
  } else{
    for (let i = 0; i <= corte.length; i++) {
     if (corte[i] == palavra){
      contar++
     }
    }
    resultado.innerHTML = `<h3>A palavra ${palavra} aparece ${contar} vezes</h3>`
  }
}

//Atividade 24
const exercicio24 = () => {
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

 let valor = document.getElementById("frase").value
let frase = valor.split(" ")

  let erro = document.getElementById("erro");

  if(valor == ""){
    erro.innerText = "Coloque um título!"
  } else{
    erro.innerText = "";
    for (let i = 0; i < valor.length; i++) {
      const element = array[i];
      
    }
  }
}

//Atividade 25
const exercicio25 = () => {
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

let num1 = document.getElementById("num1").value*1
let num2 = document.getElementById("num2").value*1
let num3 = document.getElementById("num3").value*1

  let erro = document.getElementById("erro");

  if (num1 <= 0 || num2 <=0 || num3 <= 0){
    erro.innerText = "Preencha os campos vazios!"
  } else{
    erro.innerText = ""
  }
}