//fetch
//http
//then e o catch
//entao é com uma requisição http que vamos conseguir enviar, receber, deletar, alterar um determinado valor
//frontend --> fetch --> http --> backend --> banco de dados

//verbos http
//GET quando o client solicita algum dado
//POST quando queremos enviar algum dado a partir do client
//DELETE quando queremos deletar algum dado especifico
//PATCH alterar um dado mais abrangente
//PUT deletar algum dado especifico

//CRUD create read update delete

//API aplication programming interface --> backend que vc está interagindo



//fazendo uma requisição
fetch('https://api.coingecko.com/api/v3/exchange_rates', 
{
    mode: 'cors', 
    method: 'POST', 
    body: {
        name: 'lucas',
        age: 28
    },
}).then((data) => {
    console.log(data)
})

//sucesso status -> 200 - 299
//redirecionamento -> status 300 - 399
//erro de client -> status 400 - 499
//erro do servidor -> status 500 - 599

/*JSON é um javascript object notation
//JSON é um formato de organização de dados. A diferença do JSON pro objeto normal de javascript é que 
a chave do objeto JSON deve ser em formato de string. Comum JSON ser usado como extesão para arquivos
tabem normalmente de configurações*/ 

//exemplo JSON
const aluno = '{"name": "lucas", "age": 28}'
console.log(JSON.parse(aluno)) //transforma uma string formato JSON em um objeto javascript
//console.log(JSON.stringify(aluno)) //pega um objeto javascript e transforma numa string formato JSON
