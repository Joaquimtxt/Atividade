//Atividade 1
const exercicio1 = () => {
  document.getElementById("resposta").innerHTML = ``;

  for (let i = 1; i <= 10; i++) {
    //Vai repetir até chegar no 10
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
      //Vai somar 2, e mostrar o valor de n até passar o numero.value
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
      //Vai multiplicando pelo x, o x ele a cada repetição aumenta o valor até ele ultrapassar o 10
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
      //Se o número dividido 2 ter resto dif. de zero, irá
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
      //Se o resto da divisão por 2, for 0, significa que ele é um número par
      soma += m; //E quando for assim, salva o valor de m na var soma
      resultado.innerHTML = `<h3> A soma é igual:${soma} </h3>`;
      erro.innerText = "";
    }
    m++; //Aqui ele vai se somando até ultrapassar o valor de número
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
      palavraInv.push(palavra[i]); //Conforme o i diminui, um indice diferente da palavra é colocado na var palavraInv
      //como está indo de traz para frente, isso faz com que salve a palavra ao contrário
    }
    if (palavra.join("") == palavraInv.join("")) {
      // aqui junta os índices do array em uma coisa só
      //Formando assim a palavra de novo, e o inverso dela, e o if os compara, se a junção for igual, a palavra É um palíndromo
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
    erro.innerText = "";
    while (i <= numero) {
      //Vai repetir até o i ultrapassar o numero
      let soma = (m += i); //Vai salvar os números do i, e os somará
      let media = soma / numero;
      resultado.innerHTML = `<h3>A soma dos números até o ${numero} é ${soma}, e a média dessa soma é igual a ${media}</h3>`;
      i++;
    }
  } else {
    erro.innerText = "Coloque um número positivo e diferente de zero!";
    resultado.innerText = "";
  }
};

//Atividade 11
const exercicio11 = () => {
  let resposta = document.getElementById("resposta");

  for (let i = 1; i <= 100; i++) {
    //Muda por quem será multiplicado o 3
    resposta.innerHTML += `<h3>3 X ${i} = ${3 * i}</h3>`;
  }
};

//Atividade 12
const exercicio12 = () => {
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "";
  let erro = document.getElementById("erro");
  let valor = document.getElementById("num").value;
  let numero = valor.split(""); //Separa os números em um vetor
  let soma = 0;
  console.log(numero);

  if (valor <= 0) {
    erro.innerText = "Erro: Favor informar um número positivo e diferente de 0";
    resultado.innerText = "";
  } else {
    let contar = 0;
    for (let i = 0; i < numero.length; i++) {
      contar = soma += numero[i] * 1; //Esse 1 é para identificar o número como uma variável
    }
    resultado.innerHTML = `a soma de ${numero} é = ${contar}`;
  }
};

//Atividade 13
const verificaPrimo = (numero) => {
  if (numero <= 1) {
    return false;
  }

  let primo = true;
  for (let m = 2; m * m <= numero; m++) {
    //Se encontrarmos um divisor maior que a raiz quadrada de um número,
    //podemos concluir que ele não é primo, o uso da raiz quadrada nessa situação nos permite englobar o 2
    if (numero % m === 0) {
      primo = false;
      break;
    }
  }
  return primo;
};
const exercicio13 = () => {
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  let min = document.getElementById("num1").value;
  min = Math.round(min);

  let max = document.getElementById("num2").value;
  max = Math.round(max);

  let erro = document.getElementById("erro");

  if (min < 0 || max <= 0 || min >= max) {
    erro.innerText =
      "Erro: Favor informar um número positivo e diferente do outro número colocado";
    resultado.innerText = "";
  } else {
    for (let m = min; m <= max; m++) {
      let numEntre = verificaPrimo(m);
      if (numEntre) {
        resultado.innerHTML += `<h3>#${m}</h3>`;
      }
    }
  }
};

//Atividade 14
const exercicio14 = () => {
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "";
  let base = document.getElementById("num1").value;
  let altura = document.getElementById("num2").value;
  let erro = document.getElementById("erro");
  let multiplicar = base * altura;

  if (base <= 0 || altura <= 0) {
    erro.innerText = `Não existe medida zerada, nem medida negativa!`;
  } else {
    resultado.innerHTML = `<h3>A área do retângulo é igual a ${multiplicar}</h3>`;
    erro.innerText = "";
  }
};

//Atividade 15
const exercicio15 = () => {
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  let palavra = document.getElementById("palavra").value;

  let erro = document.getElementById("erro");
  let vogal = [`a`, `e`, `i`, `o`, `u`];
  let consoante = [
    `b`,
    `c`,
    `d`,
    `f`,
    `g`,
    `h`,
    `j`,
    `k`,
    `l`,
    `m`,
    `n`,
    `p`,
    `q`,
    `r`,
    `s`,
    `t`,
    `v`,
    `w`,
    `x`,
    `y`,
    `z`,
  ];
  //Eu achei que ficou muito feio fazer isso de definir vogal e consoante, mas como eu não sei outro jeito, foi o que deu
  palavra = palavra.toLowerCase();

  if (palavra == "") {
    erro.innerText = "Coloque uma palavra!";
  } else {
    erro.innerText = "";
    for (let i = 0; i <= palavra.length; i++) {
      for (let z = 0; z <= vogal.length; z++) {
        if (palavra.charAt(i) == vogal[z]) {
          //Compara se um caractere específico da palavra é igual ao caractere atual da vogal
          resultado.innerText += `|vogal = ${palavra.charAt(i)} `; //E se for, vai mostrar o caractere específico
        }
      }
      for (let y = 0; y < consoante.length; y++) {
        if (palavra.charAt(i) == consoante[y]) {
          //Mesma coisa para consoante
          erro.innerText += `|consoante = ${palavra.charAt(i)} `;
        }
      }
    }
  }
};

//Atividade 16
const exercicio16 = () => {
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "";
  let raio = document.getElementById("num1").value;
  let erro = document.getElementById("erro");
  let area = 3.14 * raio ** 2;

  if (raio <= 0) {
    erro.innerText = "Coloque um número positivo e diferente de zero!";
  } else {
    erro.innerText = "";
    resultado.innerHTML = `<h3>A área de um círculo com ${raio} de raio é: ${area}</h3>`;
  }
};

//Atividade 17
const exercicio17 = () => {
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "";
  let base = document.getElementById("num1").value;
  let altura = document.getElementById("num2").value;
  let erro = document.getElementById("erro");
  let multiplicar = base * altura;

  if (base <= 0 || altura <= 0) {
    erro.innerText = "Coloque medidas positivas e diferentes de zero!";
  } else {
    erro.innerText = "";
    resultado.innerHTML = `<h3>A área do triângulo em questão, é: ${
      multiplicar / 2
    }</h3>`;
  }
};

//Atividade 18
const exercicio18 = () => {
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "";
  let base1 = document.getElementById("num1").value * 1; //Opera a mesma função de um parseInt, faz o valor ser identificado como
  //uma variável e não uma string
  let base2 = document.getElementById("num2").value * 1;
  let altura = document.getElementById("num3").value * 1;
  let erro = document.getElementById("erro");
  let somar = base1 + base2;
  let multiplicar = somar * altura;

  if (base1 <= 0 || base2 <= 0 || altura <= 0) {
    erro.innerText = "Não pode haver valores negativos ou iguais a zero!";
  } else {
    erro.innerText = "";
    resultado.innerHTML = `<h3>A área do trapézio em questão é igual a:${
      multiplicar / 2
    }</h3>`;
  }
};

//Atividade 19
const exercicio19 = () => {
  let userData = document.getElementById("data").value;
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let dataAtual = new Date();
  let dataNasc = new Date(userData);
  let diferenca = dataAtual - dataNasc;
  const idade = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365.25)); //milisegundos*segundos*minutos*horas*dias respectivamente

  if (userData == "" || diferenca < 0) {
    erro.innerText = "Coloque uma data válida!";
    resultado = "";
  } else {
    erro.innerText = "";
    resultado.innerHTML = `<h3>Você tem ${idade} anos!</h3>`;
  }
};

//Atividade 20
const exercicio20 = () => {
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  let valor = document.getElementById("frase").value;

  let erro = document.getElementById("erro");
  let frase = valor.split(" ");
  let inverte = [];

  if (valor == "") {
    erro.innerText = "Coloque uma frase";
  } else {
    erro.innerText = "";
    for (let i = frase.length; i >= 0; i--) {
      inverte.push(frase[i]);// Vai puxar para o array vazio inverte, o i da frase, que como está diminuindo, ela vai sair ao contrário
    }
    resultado.innerText = `${inverte.join(" ")}`;//E aqui ele junta os arrays, alterando a ordem da frase
  }
};

//Atividade 21
const exercicio21 = () => {
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  let valor = document.getElementById("frase").value;

  let erro = document.getElementById("erro");
  let corte = valor.split(" ");

  if (valor == "") {
    erro.innerText = "Preencha os espaços!";
  } else {
    resultado.innerText = `${corte.join("")}`;
  }
};

//Atividade 22
var soma22 = 0;
const exercicio22 = () => {
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  let num = document.getElementById("num").value * 1;

  let erro = document.getElementById("erro");

  if (num <= 0) {
    erro.innerText = "Coloque números positivos e diferentes de zero!";
  } else if (soma22 <= 100) {
    erro.innerText = "";
    soma22 += num;//Salva na var soma22, a soma dos n° até agora, e soma ele com o numero atual colocado pelo usuário
    resultado.innerHTML += `<h3>${soma22}</h3>`;
  } else if (soma22 > 100) {
    erro.innerText = "O número passou de 100!";
  }
};

//Atividade 23
const exercicio23 = () => {
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  let frase = document.getElementById("frase").value;
  let palavra = document.getElementById("palavra").value;
  let corte = frase.split(" ");//A cada espaço identificado, salva o valor na array, seprando as palavras da frase

  let erro = document.getElementById("erro");
  let contar = 0;

  if (frase == "" || palavra == "") {
    erro.innerText = "Coloque a frase e a palavra!";
  } else {
    for (let i = 0; i <= corte.length; i++) {
      if (corte[i] == palavra) {//Se o index dentro do corte for igual a palavra requerida(obs: O array apresenta as palavras da frase separadas)
        contar++;
      }
    }
    resultado.innerHTML = `<h3>A palavra ${palavra} aparece ${contar} vezes</h3>`;
  }
};

//Atividade 24
const exercicio24 = () => {
  let resultado = document.getElementById("resultado");

  let valor = document.getElementById("frase").value;
  let frase = valor.split(" ");
  const primeirasLetras = [];

  let erro = document.getElementById("erro");

  if (valor == "") {
    erro.innerText = "Coloque um título!";
    resultado.innerHTML = "";
  } else {
    erro.innerText = "";
    const fraseMod = frase.map((palavra) => {
      //Utilizei o map para retornar o array com os transofrmações feitas pela função
      const firstLetter = palavra[0].toUpperCase(); //Acessa o primeiro caractere da palavra
      primeirasLetras.push(firstLetter); //Adiciona as letras maiúsculas na array primeirasLetras
      return firstLetter + palavra.slice(1); // Substituindo a primeira letra pela versão maiúscula
    });
    resultado.innerHTML = `<h1>${fraseMod.join(" ")}</h1>`;
  }
};

//Atividade 25
const exercicio25 = () => {
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let num3 = document.getElementById("num3").value;

  let numeros = [];
  numeros.push(num1, num2, num3);
  numeros.sort((a, b) => a - b);//Os parâmetros fazem ser ordenado os valores da array numeros em ordem crescente

  let erro = document.getElementById("erro");

  if (num1 <= 0 || num2 <= 0 || num3 <= 0) {
    erro.innerText = "Preencha os campos vazios!";
  } else {
    erro.innerText = "";
    for (let i = 0; i <= 2; i++) {//Vai imprimir os valores na array em ordem crescente
      resultado.innerHTML += `<h3> #${numeros[i]}</h3>`;
    }
  }
};
