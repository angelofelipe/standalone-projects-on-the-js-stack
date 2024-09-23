import keypress from 'keypress';

keypress(process.stdin);

process.stdin.on('keypress', (char, key) => {
  console.log(`You pressed: ${char}`);
  // process.stdin.pause();  // pausa a leitura, mas eu resolvi pausar com o * (pois quero que seja feito um loop);
  if(char === "*"){
    process.exit();
  }
});