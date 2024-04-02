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
    for (let n = 0; n <= numero.value; n+=2) {
      resultado.innerHTML += `<h3> # ${n} </h3>`;
    }
};

//Atividade 3
const exercicio3 = () => {
  let resultado = document.getElementById("resultado")
  resultado.innerHTML = "";

  let numero = document.getElementById("num").value;
  numero = Math.round(numero);

  let erro = document.getElementById("erro");
  
  if (numero <= 0){
    erro.innerText = "Erro: Favor informar um número positivo e diferente de 0"
    resultado.innerText = ""
  } else {
    erro.innerText = ""
    let primo = true;//declarei a variável para primo
  for (let i = 2; i < numero; i++) {
  if (numero % i == 0) primo = false;//% resto da divisão
}
if (numero == 1)primo = false;

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
  if (numero <= 0){
    erro.innerText = "Informe um positivo e diferente de 0!"
    resultado.innerText = ""
  }else{
    for (let x = 1; x <= 10; x++) {
    resultado.innerHTML += `<h3> #${numero} X ${x} = ${
      numero * x
    } </h3>`;
    erro.innerText = ""
  }
}
};

//Atividade 5
const exercicio5 = () => {
 let numero = document.getElementById("num").value
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let y = 0;
  resultado.innerText = "";

  if (numero <= 0){
    erro.innerText = "O número informado precisa ser positivo e diferente de zero!"
  }

while (y <= numero) {
  if (y%2 != 0){
    resultado.innerHTML += `<h3> # ${y} </h3>`
    erro.innerText = "";
  }
  y++
}
};

//Atividade 6
const exercicio6 = () => {
  let numero = document.getElementById("num").value
   let resultado = document.getElementById("resultado");
   let erro = document.getElementById("erro");
   let m = 2;
   let soma = 0;

   resultado.innerText = ""
if(numero <=0 )  {
  erro.innerText = "Coloque um número positivo e diferente de zero!";
}
while (m <= numero) {
  if (m%2 == 0){
    soma += m
    resultado.innerHTML = `<h3> A soma é igual:${soma} </h3>`
    erro.innerText = "";
  }
  m++
}
}

//Atividade 7
const exercicio7 = () => {
   let resposta = document.getElementById("resposta");
   let t = 11;

   while (t != 1) {
    t = t-1
     resposta.innerHTML += `<h3>#${t}</h3>`
   }
}

//Atividade 8
const exercicio8 = () => {
  let resultado = document.getElementById("resultado")
  let valor = document.getElementById("palavra").value
  let valor1 = valor.toLowerCase("");
  const palavra = valor1.split("")
  const palavraInv = []; //Define como um vetor, para no for a gente inverter a palavra e comparar
  let erro = document.getElementById("erro")
  
if (valor != 0 ){


  resultado.innerText = "";

  for (let i = palavra.length; i >= 0; i--) {
    palavraInv.push(palavra[i]);
  }
  if (palavra.join("") == palavraInv.join("")){
    resultado.innerHTML = "<h3>Esta palavra é um palíndromo</h3>"
    erro.innerText = ""
  } else if (palavra !== palavraInv.join("")){
    erro.innerHTML = "<h3>Esta palavra NÃO é um palíndromo</h3>"
  } 
}else{ 
  erro.innerText = "Coloque uma palavra!"
}
}

//Atividade 9
const exercicio9 = () =>{
  let resposta = document.getElementById("resposta");
  let m = 0;

  for (let i = 1; i <= 100; i++) {
  
    resposta.innerText =( `A soma de todos os números de um a 100 é igual ${m+=i}`)
  }

}

//Atividade 10
const exercicio10 = () => {
  let numero = document.getElementById("num").value
   let resultado = document.getElementById("resultado");
   let erro = document.getElementById("erro");

   

   if(numero < 0){
    erro.innerText = "Coloque números positivos!"
   }else{
    while(m <= numero){
    resultado.innerHTML += `<h3>#${numero}+</h3>`;
   }
  }

}

//Atividade 11
const exercicio11 = () => {
   let resultado = document.getElementById("resultado");
   
}