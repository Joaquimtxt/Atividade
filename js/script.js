//Atividade 1
const exercicio1 = () => {
    document.getElementById("resposta").innerHTML = ``;
  for (let i = 1; i <= 10; i++) {
    document.getElementById("resposta").innerHTML += `<h3> # ${i}  </h3>`;
  }
};

//Atividade 2
const exercicio2 = () => {
  let resposta2 = document.getElementById("num").value;
 document.getElementById("resultado").innerHTML = "";
  for (let n = 0; n <= resposta2; n++) {
    if (n % 2 == 0) {
        document.getElementById("resultado").innerHTML += `<h3> # ${n} </h3>`;
    }
  }
};

//Atividade 3
const exercicio3 = () => {
    let resposta3 = document.getElementById("num").value
    if ( resposta3 % 2 != 0 || resposta3 == 2) {
        document.getElementById("resposta").innerHTML = "<h3>Este número é primo! </h3>"
    } else{
        document.getElementById("resposta").innerHTML = "<h3>Este número NÃO é primo! </h3>"
    }
}

//Atividade 4
const exercicio4 = () =>{
    document.getElementById("num").innerHTML = "";
    let resposta4 = document.getElementById("num").value;
    for (let x = 1; x <= 10; x++) {
        document.getElementById("resposta").innerHTML += `<h3> # ${resposta4*x} </h3>`
        
        
    }
}

//Atividade 5
const exercicio5 = () =>{
    document.getElementById("num").innerHTML = "";
    let resposta5 = document.getElementById("num").value;

//     let y = 0;
//     while (y < resposta5) {
//         if (y%2 != 0){
// console.log(y)
//         }
        
//     }
    
}