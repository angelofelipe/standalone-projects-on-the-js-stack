import clear from 'clear';

import sleep from './sleep.js'

export default class Menu { 
    static defaultMenu() {
        clear();
        console.log(`                                                                                                        |
                8888888888888                                              8888888888888                |
        88888888888888888888888888888888888                  88888888888888888888888888888888888        |
          8888888888888888888888888888888888                8888888888888888888888888888888888          |
            88888888888888888888888888888                      88888888888888888888888888888            |	
                    _____________________                      _____________________                    |
                    \\                    \\                    /                    /                    |
                     \\ >>>>>>>>>>>>>>>>>\\ \\                  / /<<<<<<<<<<<<<<<<< /                     |
                      \\__ \\     oooooooo \\ \\__            __/ / oooooooo     / __/                      |
                         \\ \\   oooooooooo \\   \\	         /   / oooooooooo   / /                         |
                          \\ \\___oooooooo   \\   \\        /   /   oooooooo___/ /                          |
                           \\___ \\____     _/  _/    |   \\_  \\_     ____/ ___/                           |
                               \\____ \\___/ __/	          \\__  \\__/ ____/                               |
                                    \\_____/        ___       \\_____/                                    |
                                                 _/   \\_                                                |
                                                /       \\                                               |
                                               [         ]                                              |
                                                \\       /                                               |
                                                 \\     /                                                |
                                                  \\   /                                                 |
                                                   \\ /                                                  |
                                                    V                                                   |
                                                                                                        |
`);
    }

    // welcome menu
    static chooseMenu() {
        this.defaultMenu();
        console.log(`
                        Welcome to the SPACE INVADERS DELIVERY GAME!
                        Choose your option (digit the number and press enter):
                        1. Start Game
                        2. Instructions
                        3. Exit`);
    }

    // start game
    static chooseDificulty() {
        this.defaultMenu();
        console.log(`
                        SPACE INVADERS DELIVERY GAME!
                        Choose your difficulty (digit the number and press enter):
                        1. Easy
                        2. Medium
                        3. Hard
                        4. Exit`);
    }


    // instructions
    static instructions() {
        this.defaultMenu();
        console.log(`
                        SPACE INVADERS DELIVERY GAME!
                        Instructions:
                        1. Use the 'w', 'A', 'S', 'D' keys to move the spaceship
                        2. Your target is to avoid the enemies and deliver the packages to the yours destiny point 
                        3. Use 'A' and 'D' to move to left and to right or 'S' to keep in the same position
                        4. There is three positions to move in horizontal direction: left, center and right
                        5. If you not suffer any damage, you will fatigate the enemy and may escape his persecution
                        6. If you press 'W', then you enter the DELIVERY MODE
                        7. In DELIVERY MODE you consome STAMINA and can fatigate the enemy more quickly
                        8. However if you suffer any damage, you will lose 2x more life then the normal
                        9. You just can choose one movement per turn, so choose wisely and apprehend the enemy's movement patterns 
                       10. If you lose all your lifes, you lose the game. It's over bro! GAME OVER!
                       11. Have fun!
                        Press Enter key to return to the main menu
                    `);
    }

    static registerName() {
        this.defaultMenu();
        console.log(`
                        SPACE INVADERS DELIVERY GAME!
                        Enter your name: `);
    }

    static registerInitialPosition() {
        this.defaultMenu();
        console.log(`
                        SPACE INVADERS DELIVERY GAME!
                        Enter your initial position (left, center or right): `);
    }

    static async loadingGame() {
        this.defaultMenu();
        console.log(`
                        Loading game...`);
        await sleep(1000);
    }

    static async instructionsToMove() {
        this.defaultMenu();
        console.log(`
                        Use the 'w', 'A', 'S', 'D' keys to control the spaceship
                        No need to press enter, just press the key and the spaceship will move`);
        await sleep(2000);
    }

    static async newEnemy(enemy) {
        this.defaultMenu();
        console.log(`
                        New enemy called ${enemy.name} appeared in the space road!
                        Avoid it and deliver the packages!`);
        await sleep(5000);
    }
    
    static async gameOver() {
        this.defaultMenu();
        console.log(`
                        GAME OVER!`);
        await sleep(3000);
    }

    static async winGame() {
        this.defaultMenu();
        console.log(`
                        CONGRATULATIONS!

                        YOU ARE THE BEST PLAYER IN THE SPACE!

                        DELIVERY ALL THE PACKAGES TO THE CLIENTS!

                        YOU WIN AND DOMAINED THE SPACE!`);
        await sleep(3000);
    }


}