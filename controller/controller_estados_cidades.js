/* *********************************************************************
* Objetivo: Funções para manipular dados de estados e cidades do Brasil
* Data: 14/02/2024
* Autor: Edeson Barbosa
* Versão: 1.0
************************************************************************/


// faz o import do arquivo de dados de estados e cidades
const dados_estados_cidades = require('../modulo/estados_cidades');


// função anônima => retorna a lista de estados do Brasil
const getListEstados = function(){

    // cria uma variável do tipo array
    let arrayListaDeEstados = [];

    let jsonEstados = {}

    dados_estados_cidades.listaDeEstados.estados.forEach(function (estado){
            
            // cria uma variável do tipo Json
            let jsonListaDeEstados = {};

            // cria os atributos do Json
            jsonListaDeEstados.uf = estado.sigla
            jsonListaDeEstados.description = estado.nome

            // adiciona o Json com o estado dentro do array
            arrayListaDeEstados.push(jsonListaDeEstados)
    })

    // padronizando a saída da função para ser sempre um Json
    jsonEstados.estados = arrayListaDeEstados
    jsonEstados.count = arrayListaDeEstados.length

    return jsonEstados
}

// função anônima => retorna a lista de cidades pelo Estado
const getListCidades = function(siglaEstado){
    let sigla = siglaEstado;
    let arrayListCidades = [];
    let jsonListCidadesJSON = {};
    let erro = true;

    //Tratamento para validar se o argumento foi encaminhado na função
    if(typeof(sigla) != 'undefined' && sigla != '' && sigla.length == 2){
        
        //Pecorre o array de cidades para validar a sigla do estado
        dados_estados_cidades.listaDeEstados.estados.forEach(item => {
            
            //Localiza a sigla do estado dentro do array de cidades
            if(item.sigla.indexOf(sigla.toUpperCase()) == 0){

                //Pecorre o array da chave de cidades dentro do estado que foi encontrado
                item.cidades.forEach(itemCidade => {
                    arrayListCidades.push(itemCidade.nome);
                    erro = false;
                });

                jsonListCidadesJSON.uf = item.sigla
                jsonListCidadesJSON.description = item.nome
                jsonListCidadesJSON.count = arrayListCidades.length
                jsonListCidadesJSON.cidades = arrayListCidades
            }
        });
    }

    if(erro)
        return false;
    else
        return jsonListCidadesJSON;

};

module.exports = {
    getListEstados,
    getListCidades
}






