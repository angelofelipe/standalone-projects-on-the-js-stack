const fs = require('fs');
const db = require('./package.json') // you can parse json like this
const readline = require('readline-sync')

console.log(db);

//Escrita de arquivos (nome, conteúdo, codificação, callback function)
fs.writeFile('tomorrow.txt', 'Arquivo gerado no curso de Back-End com NodeJs no Tomorrow', 'utf8', (err) => {
  if (err) throw err; // tratamento de erro
  console.log('Arquivo gerado com sucesso');
});

//Leitura de Arquivos (nome, codificação, callback function)
fs.readFile('tomorrow.txt', 'utf8', (err, data) => {
  if (err) throw err; // tratamento de erro
  console.log(data);
});

let obj = [{
    name: "Marcos",
    age: 30,
    state: "single"
},
{
    name: "Marcos",
    age: 30,
    state: "single"
}]
console.log(obj.at(0))

//Escrita de arquivos em JSON (nome, conteúdo, codificação, callback function)
fs.writeFile('tomorrow.json', JSON.stringify(obj), 'utf8', (err) => {
    if (err) throw err; // tratamento de erro
    console.log('Arquivo gerado com sucesso');
});

//Leitura de Arquivos em JSON (nome, codificação, callback function)
fs.readFile('tomorrow.json', 'utf8', (err, data) => {
    if (err) throw err; // tratamento de erro
    console.log(JSON.parse(data).at(0));
});

// criar arquivo
fs.writeFile('example.txt', 'New content', (err) => {
    if (err) throw err;
    console.log('File created!');
});

readline.question("See the file example.txt ...")

fs.appendFile('example.txt', 'Conteúdo adicional', (err) => {
  if (err) throw err;
  console.log('Conteúdo adicionado!');
});

// readline.question("See the file example.txt ...")

// fs.writeFile('example.txt', 'New content', (err) => {
//   if (err) throw err;
//   console.log('File overwritten!');
// });

// readline.question("See the file example.txt ...")

// fs.rename('example.txt', 'newExample.txt', (err) => {
//   if (err) throw err;
//   console.log('File renamed!');
// });

// readline.question("See the file example.txt that was renamed to newExample.txt ...")

// fs.unlink('newExample.txt', (err) => {
//   if (err) throw err;
//   console.log('File removed!');
// });