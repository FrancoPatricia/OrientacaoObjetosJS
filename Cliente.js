export class Cliente {
    nome; // atributos da classe;
    _cpf;
    
    get cpf(){
        return this._cpf;
    }

    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }
}