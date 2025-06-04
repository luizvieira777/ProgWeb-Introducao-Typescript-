//arrays metodo de manipação

let notas: number[] = [6, 7.5, 8, 5];

// ForEach
notas.forEach((n => console.log("Nota:", n))); //iterar sobre elementos de uma coleção
// Map          
let notasAjustadas = notas.map(n => n + 0.5); //Cria um novo array de uma funcao conhecida
console.log("Notas ajustadas:", notasAjustadas);

// Filter
let Aprovados = notas.filter(n => n >= 6); //Cria um novo array com os elementos que atendem a condição
console.log("Aprovados:", Aprovados);

//push e pop
notas.push(10); //Adiciona um elemento ao final do array
notas.pop(); //Remove o último elemento do array