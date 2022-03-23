/*
Ser autenticável significa ter o método "senha"
*/

export class sistemaAutenticacao {
    static login(autenticavel, senha){
        if (sistemaAutenticacao.(ehAutenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel &&
        autenticavel.autenticar instanceof Function
    }
}