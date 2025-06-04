//funções 

//funcao tradicional
function saudacao(nome: string): string {
    return `Olá, ${nome}!`;
}
console.log(saudacao("Luiz"));
//arrow function
const soma = (x: number, y: number): number => {return x + y;}
console.log(soma(2, 3));

//funcao com valor padrão
function mensagem(texto: string = "Bem vindo"): void {
    console.log(texto);   
}
//funcao com parametro opcional
function apresentar(nome?: string): void {
    if (nome) {
        console.log(`Olá, ${nome}`);
    } else {
        console.log("Olá, visitante");
    }
}