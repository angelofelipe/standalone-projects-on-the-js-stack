// Understanding how the close function of the readline module works

import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Qual é o seu curso? ', (curso) => {
  console.log(`Voce eh um estudante de ${curso}!`);

  rl.question('Qual é a sua idade? ', (idade) => {
    console.log(`Você tem ${idade} anos.`);
    rl.close();
  });
  console.log('Pergunta sobre a idade sendo processada...');
});

console.log('Pergunta sobre o curso foi feita!');