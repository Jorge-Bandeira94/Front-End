// primeiro vamos instalar os modulos necessarios com npm install ejs , e o npm install express

// Criar um servidor para mostrar tudo que estamso cosntruindo no navegador, este servidor vai pergar todos os arquivos da pasta e renderizar todo o js para o navegador
const express = require('express')

//instanciar o express
const app = express()

//Usar o ejs com método do express SET com o argumento de ferramenta ejs (para o express saber como renderizar os arquivos)
app.set('view engine', 'ejs')

// Criando uma rota a partir do app(que é o express) usando o método get. A "/" significa um dominio qualquer do site. Logo essa rota é o nome do site que irá chamar o index através do "res", que é a resposta
// o index precisa estar dentro de uma pasta chamada views
app.get('/', function (req, res) {
  res.render('pages/index')
})

// Agora vamos fazer com que outras paginas possam ser chamadas além da pagina principal
app.get('/about', function (req, res) {
  res.render('pages/about')
})

//Agora, depois de configurar o express vamos mandar rodar o arquivo através de ouvir uma porta(8080). Essa porta é o localhost. Logo se usamos localhost:8080 no navegador, iremos abrir este arquivo
app.listen(8080)
console.log('Rodando')

// Quais as ferramentas o EJS fornece para que seja útil sua utilização? Primeiramente, supomos que queremos ter varias páginas em que apenas o conteudo do main é modificado, em vez de repetirmos todo o html para cada pagina podemos fragmentar as partes comuns entre todas as paginas e colocar na pasta viewe, exemplo> head.ejs apenas com o head
