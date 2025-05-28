//operadores
let a: number = 10;
let b: number = 14;

//Aritméticos
console.log ('soma', a + b); 
console.log ('subtração', a - b); 
console.log ('multiplicação', a * b); 
console.log ('divisão', a / b); 
console.log ('resto', a % b); //percent 

// Relacionais
console.log ('igual', a == b);
console.log ('diferente', a != b);
console.log ('maior que', a > b);
console.log ('menor que', a < b);
console.log ('maior ou igual', a >= b);     
console.log ('menor ou igual', a <= b);
// Identidade restrita
console.log ('identico', a === b);
console.log ('não identico', a !== b);
// Lógicos
let x: boolean = true;
let y: boolean = false;
console.log ('And', x && y); 
console.log ('Or', x || y);
console.log ('Not', !x);
//operador condicional
let idade: number = 16;
let acesso = idade >= 18 ? "Permitido" : "Negado";