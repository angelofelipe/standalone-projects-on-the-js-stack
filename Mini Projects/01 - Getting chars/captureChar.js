import { read } from 'fs';
import { stdin } from 'process';
import readline from 'readline-sync'

function captureChar(){
  return new Promise((resolve) => {
    stdin.setRawMode(true);
    const listener = (char) => {
      stdin.setRawMode(false);
      stdin.removeListener('data', listener); // Remove the event listener
      resolve(char.toString());
    };
    stdin.on('data', listener);
  });
}

// Example usage:
async function main() {
  console.log('Press a key:');
  const char = await captureChar();
  console.log(`You pressed: ${char}`);
  if (char == "*") {
    // process.exit();
    console.log("*")
    return;
  }
  await main(); // Call main again to capture the next character
}

await main();
console.log("Saiu de todos os mains")
// const newLine = readline.question();
// console.log(newLine);
// process.exit();