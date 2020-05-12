//import do express
var express = require('express');
//criar um objeto do express.
var app = express();

//Endpoints ou endereço da web
app.get('/', function (req, res) {
  res.send('Olá Mundo!');
});

//criando novo endpoint
app.get('/produto' , function (red, res) {
        let produto = {
          "nome" : "Iphone 11 Prox Max" ,
          "preco" : 9.599,
          "peso" : "550g"
        }
        res.json(produto);
      });

//A porta que o node irá expor
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
