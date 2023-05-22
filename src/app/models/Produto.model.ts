export class Produto{
    id: number = 0;
    produto: string = "";
    descricao: string = "";
    foto: string = "";
    preco: number = 0;


        // Criando um construtor com os parametros estabelecidos
    constructor(id: number, produto: string, descricao: string, foto: string, preco: number){
        this.id = id;
        this.produto = produto;
        this.descricao = descricao;
        this.foto = foto;
        this.preco = preco;
    }
}