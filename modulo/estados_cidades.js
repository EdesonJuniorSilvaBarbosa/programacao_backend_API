/* *************************************** 
* Objetivo: obter uma lista de estados
* Data: 29/08/2022
*Autor: Marcel
/* *************************************** */

// Simulando o resultado de uma API
var listaDeEstados = {
    pais: 'Brasil',
    estados: [
        {
            sigla: 'AC',
            nome: 'Acre',
            capital: 'Rio Branco',
            regiao: 'Norte',
            cidades: [
                { nome: 'Rio Branco', id: '1234' },
                { nome: 'Cruzeiro do Sul', id: '5678' },
                { nome: 'Sena Madureira', id: '9101' }
            ]
        },
        {
            sigla: 'AL',
            nome: 'Alagoas',
            capital: 'Maceió',
            regiao: 'Nordeste',
            cidades: [
                { nome: 'Maceió', id: '1121' },
                { nome: 'Arapiraca', id: '3141' },
                { nome: 'Palmeira dos Índios', id: '5161' }
            ]
        },
        {
            sigla: 'AM',
            nome: 'Amazonas',
            capital: 'Manaus',
            regiao: 'Norte',
            cidades: [
                { nome: 'Manaus', id: '7181' },
                { nome: 'Parintins', id: '9202' },
                { nome: 'Itacoatiara', id: '1223' }
            ]
        },
        {
            sigla: 'AP',
            nome: 'Amapá',
            capital: 'Macapá',
            regiao: 'Norte',
            cidades: [
                { nome: 'Macapá', id: '1324' },
                { nome: 'Santana', id: '1425' },
                { nome: 'Laranjal do Jari', id: '1526' }
            ]
        },
        {
            sigla: 'BA',
            nome: 'Bahia',
            capital: 'Salvador',
            regiao: 'Nordeste',
            cidades: [
                { nome: 'Salvador', id: '1627' },
                { nome: 'Feira de Santana', id: '1728' },
                { nome: 'Vitória da Conquista', id: '1829' }
            ]
        },
        {
            sigla: 'CE',
            nome: 'Ceará',
            capital: 'Fortaleza',
            regiao: 'Nordeste',
            cidades: [
                { nome: 'Fortaleza', id: '1930' },
                { nome: 'Caucaia', id: '2031' },
                { nome: 'Juazeiro do Norte', id: '2132' }
            ]
        },
        {
            sigla: 'DF',
            nome: 'Distrito Federal',
            capital: 'Brasília',
            regiao: 'Centro-Oeste',
            cidades: [
                { nome: 'Brasília', id: '2233' },
                { nome: 'Ceilândia', id: '2334' },
                { nome: 'Taguatinga', id: '2435' }
            ]
        },
        {
            sigla: 'ES',
            nome: 'Espírito Santo',
            capital: 'Vitória',
            regiao: 'Sudeste',
            cidades: [
                { nome: 'Vitória', id: '2536' },
                { nome: 'Vila Velha', id: '2637' },
                { nome: 'Cariacica', id: '2738' }
            ]
        },
        {
            sigla: 'GO',
            nome: 'Goiás',
            capital: 'Goiânia',
            regiao: 'Centro-Oeste',
            cidades: [
                { nome: 'Goiânia', id: '2839' },
                { nome: 'Aparecida de Goiânia', id: '2940' },
                { nome: 'Anápolis', id: '3041' }
            ]
        },
        {
            sigla: 'MA',
            nome: 'Maranhão',
            capital: 'São Luís',
            regiao: 'Nordeste',
            cidades: [
                { nome: 'São Luís', id: '3142' },
                { nome: 'Imperatriz', id: '3243' },
                { nome: 'São José de Ribamar', id: '3344' }
            ]
        },
        {
            sigla: 'MG',
            nome: 'Minas Gerais',
            capital: 'Belo Horizonte',
            regiao: 'Sudeste',
            cidades: [
                { nome: 'Belo Horizonte', id: '3445' },
                { nome: 'Contagem', id: '3546' },
                { nome: 'Uberlândia', id: '3647' }
            ]
        },
        {
            sigla: 'MS',
            nome: 'Mato Grosso do Sul',
            capital: 'Campo Grande',
            regiao: 'Centro-Oeste',
            cidades: [
                { nome: 'Campo Grande', id: '3748' },
                { nome: 'Dourados', id: '3849' },
                { nome: 'Três Lagoas', id: '3950' }
            ]
        },
        {
            sigla: 'MT',
            nome: 'Mato Grosso',
            capital: 'Cuiabá',
            regiao: 'Centro-Oeste',
            cidades: [
                { nome: 'Cuiabá', id: '4051' },
                { nome: 'Várzea Grande', id: '4152' },
                { nome: 'Rondonópolis', id: '4253' }
            ]
        },
        {
            sigla: 'PA',
            nome: 'Pará',
            capital: 'Belém',
            regiao: 'Norte',
            cidades: [
                { nome: 'Belém', id: '4354' },
                { nome: 'Ananindeua', id: '4455' },
                { nome: 'Santarém', id: '4556' }
            ]
        },
        {
            sigla: 'PB',
            nome: 'Paraíba',
            capital: 'João Pessoa',
            regiao: 'Nordeste',
            cidades: [
                { nome: 'João Pessoa', id: '4657' },
                { nome: 'Campina Grande', id: '4758' },
                { nome: 'Santa Rita', id: '4859' }
            ]
        },
        {
            sigla: 'PE',
            nome: 'Pernambuco',
            capital: 'Recife',
            regiao: 'Nordeste',
            cidades: [
                { nome: 'Recife', id: '4960' },
                { nome: 'Jaboatão dos Guararapes', id: '5061' },
                { nome: 'Olinda', id: '5162' }
            ]
        },
        {
            sigla: 'PI',
            nome: 'Piauí',
            capital: 'Teresina',
            regiao: 'Nordeste',
            cidades: [
                { nome: 'Teresina', id: '5263' },
                { nome: 'Parnaíba', id: '5364' },
                { nome: 'Picos', id: '5465' }
            ]
        },
        {
            sigla: 'PR',
            nome: 'Paraná',
            capital: 'Curitiba',
            regiao: 'Sul',
            cidades: [
                { nome: 'Curitiba', id: '5566' },
                { nome: 'Londrina', id: '5667' },
                { nome: 'Maringá', id: '5768' }
            ]
        },
        {
            sigla: 'RJ',
            nome: 'Rio de Janeiro',
            capital: 'Rio de Janeiro',
            regiao: 'Sudeste',
            cidades: [
                { nome: 'Rio de Janeiro', id: '5869' },
                { nome: 'São Gonçalo', id: '5970' },
                { nome: 'Duque de Caxias', id: '6071' }
            ]
        },
        {
            sigla: 'RN',
            nome: 'Rio Grande do Norte',
            capital: 'Natal',
            regiao: 'Nordeste',
            cidades: [
                { nome: 'Natal', id: '6172' },
                { nome: 'Mossoró', id: '6273' },
                { nome: 'Parnamirim', id: '6374' }
            ]
        },
        {
            sigla: 'RO',
            nome: 'Rondônia',
            capital: 'Porto Velho',
            regiao: 'Norte',
            cidades: [
                { nome: 'Porto Velho', id: '6475' },
                { nome: 'Ji-Paraná', id: '6576' },
                { nome: 'Ariquemes', id: '6677' }
            ]
        },
        {
            sigla: 'RR',
            nome: 'Roraima',
            capital: 'Boa Vista',
            regiao: 'Norte',
            cidades: [
                { nome: 'Boa Vista', id: '6778' },
                { nome: 'Caracaraí', id: '6879' },
                { nome: 'Rorainópolis', id: '6980' }
            ]
        },
        {
            sigla: 'RS',
            nome: 'Rio Grande do Sul',
            capital: 'Porto Alegre',
            regiao: 'Sul',
            cidades: [
                { nome: 'Porto Alegre', id: '7081' },
                { nome: 'Caxias do Sul', id: '7182' },
                { nome: 'Pelotas', id: '7283' }
            ]
        },
        {
            sigla: 'SC',
            nome: 'Santa Catarina',
            capital: 'Florianópolis',
            regiao: 'Sul',
            cidades: [
                { nome: 'Florianópolis', id: '7384' },
                { nome: 'Joinville', id: '7485' },
                { nome: 'Blumenau', id: '7586' }
            ]
        },
        {
            sigla: 'SE',
            nome: 'Sergipe',
            capital: 'Aracaju',
            regiao: 'Nordeste',
            cidades: [
                { nome: 'Aracaju', id: '7687' },
                { nome: 'Nossa Senhora do Socorro', id: '7788' },
                { nome: 'Lagarto', id: '7889' }
            ]
        },
        {
            sigla: 'SP',
            nome: 'São Paulo',
            capital: 'São Paulo',
            regiao: 'Sudeste',
            cidades: [
                { nome: 'São Paulo', id: '7990' },
                { nome: 'Guarulhos', id: '8091' },
                { nome: 'Campinas', id: '8192' }
            ]
        },
        {
            sigla: 'TO',
            nome: 'Tocantins',
            capital: 'Palmas',
            regiao: 'Norte',
            cidades: [
                { nome: 'Palmas', id: '8293' },
                { nome: 'Araguaína', id: '8394' },
                { nome: 'Gurupi', id: '8495' }
            ]
        }
    ]
};

module.exports ={
    listaDeEstados
}


























