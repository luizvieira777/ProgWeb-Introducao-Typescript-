//tipos em typescript
// Definindo tipos primitivos
let texto: string = "Olá mundo";
let numero: number = 42;
let ativo: boolean = true;
//Arrays
let numeros: number[] = [1, 2, 3, 4, 5]; //Primeira do forma de definir array
let palavras: Array<string> = ["Typescript", "é", "massa"]; //Segunda forma de definir array
// Tuplas    
let Pessoa: [string, number] = ["João", 25];
// Enum
enum Cores {
    Amarelo,
    Preto,
    Branco
}
// Usando enum
let corFavorita: Cores = Cores.Amarelo;
//Any(evitar sempre que possível)
let dadoAleatorio: any = "Any recebe todo tipo de dado";
let dadoDesconhecido: unknown = 10;
//Void
function mostrarAlerta(): void {  
    console.log("Preste atenção!");
}
// Undefined e Null
let nada: null = null;
let indefinido: undefined = undefined;
//Never
function erroFatal(mensagem:string): never {
    throw new Error("mensagem");
}
// Types alias
type Usuario = {
    nome: string;
    idade: number;
};
let usuario: Usuario = {
    nome: "Luiz",
    idade: 16
};