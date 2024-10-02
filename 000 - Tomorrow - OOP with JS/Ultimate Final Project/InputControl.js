import { stdin } from 'process';

export default class InputControl {
    static captureChar() {
        return new Promise((resolve, reject) => {
            try {
                stdin.setRawMode(true);
                stdin.resume(); // Ensure stdin is in flowing mode
                const listener = (char) => {
                    stdin.setRawMode(false);
                    stdin.pause(); // Pause stdin to prevent further input
                    stdin.removeListener('data', listener);
                    resolve(char.toString());
                };
                stdin.on('data', listener);
            } catch (error) {
                reject(error);
            }
        });
    }

    static async getKey() {
        while (true) {
            try {
                let key = await this.captureChar();
                if (key === 'w' || key === 'a' || key === 's' || key === 'd' ||
                    key === 'W' || key === 'A' || key === 'S' || key === 'D'
                ) {
                    return key;
                }
            } catch (error) {
                console.error("Error capturing key:", error);
            }
        }
    }
}

// Exemplo de uso
// import readline from 'readline-sync';
// (async () => {
//     try {
//         let newLine = readline.question('Digite algo: ');
//         console.log('Você digitou:', newLine);

//         console.log('Pressione uma tecla (w, a, s, d):');
//         const key = await InputControl.getKey();
//         console.log('Tecla capturada:', key);

//         // Usando readline-sync após capturar a tecla
//         newLine = readline.question('Digite algo: ');
//         console.log('Você digitou:', newLine);
//     } catch (error) {
//         console.error("Error in main function:", error);
//     }
// })();