//Ser autenticavel significa ter o método autenticar
//ducky type

export class SistemaAutendicacao{
    static login(autenticavel, senha){
        if(SistemaAutendicacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function;
     }
}