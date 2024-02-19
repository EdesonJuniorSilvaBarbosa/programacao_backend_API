/*****************************************************************************************************************
 * Objetivo: API(Aplication Programming Interfaces) responsável pela saída de dados de estados e cidades do Brasil
 * Data: 16/02/2024
 * Autor: Edeson Barbosa
 * Version: 1.0
 *****************************************************************************************************************/

/*
    Para criar uma API, precisamos instalar : 
        express => npm install express --save
        cors => npm install cors --save
        body-parser => npm install body-parser --save
*/

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

// criando um objeto do tipo express
const app = express()

// request => é o que chegará na API
// response => é o retorno da API

// APIs privadas -> APIs interna (particular) das empresas
// APIs públicas -> APIs externas, geralmente livres para utilização
app.use((request, response, next) => {

    // configuração de quem poderá acessar a API ( IP ou * (todos) )
    response.header('Access-Control-Allow-Origin', '*')

    // configuração de quais métodos serão aceitos na API
    response.header('Access-Control-Allow-Methods', 'GET')

    app.use(cors())
    next()
})


//EndPoints: Pontos de escuta da API
//EndPoints: GET => listar os estados
app.get('/estados', cors(), async function(request, response, next){

    // import do arquivos de funções
    let controllerEstados = require('./controller/controller_estados_cidades.js')

    // solicita a lista de estados para a função
    let estados = controllerEstados.getListEstados()

    // define o que a API deverá retornar
    if(estados){
        response.status(200);
        response.json(estados)
    }else{
        response.status(404);
    }

});

//EndPoints: GET => listar as cidades de um estado
app.get('/cidades/estado/:uf', cors(), async function(request, response, next){

    let siglaEstado = request.params.uf

    // import do arquivos de funções
    let controllerEstados = require('./controller/controller_estados_cidades.js')

    // solicita a lista de estados para a função
    let estados = controllerEstados.getListCidades(siglaEstado)

    // define o que a API deverá retornar
    if(estados){
        response.status(200);
        response.json(estados)
    }else{
        response.status(404);
    }

});

// obrigatorio para fazer a API ficar aguardando ou escutando novas requisições
app.listen(8080, function(){

    console.log('API funcionando e aguardando requisições');

})
















