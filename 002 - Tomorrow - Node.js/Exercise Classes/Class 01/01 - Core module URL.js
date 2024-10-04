var url = require('url'); //Permite analisar uma URL
var endereco = 'http://teste:3000/variaveis?var1=XXX&var2=YYY';
var urlFinal = url.parse(endereco, true); //Parse na URL (quebra a URL em componentes)

console.log(urlFinal.host);// Host da Url
console.log(urlFinal.pathname);// Caminho daquela url
console.log(urlFinal.search);//Parâmetros da url
//Queries específicas
console.log(urlFinal.query.var1); 
console.log(urlFinal.query.var2);
