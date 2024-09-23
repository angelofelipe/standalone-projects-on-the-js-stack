import { stdin } from 'process';

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
  if (char === '*') {
    // process.exit();
    return;
  }
  main(); // Call main again to capture the next character
}

await main();
process.exit();