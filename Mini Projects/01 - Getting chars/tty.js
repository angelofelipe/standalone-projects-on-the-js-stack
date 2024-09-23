import tty from 'tty';

process.stdin.setRawMode(true);

process.stdin.on('data', (char) => {
    console.log(`You pressed: ${char}`);
    // process.stdin.setRawMode(false);
    if(char == "*") {
        process.exit();
    }
});