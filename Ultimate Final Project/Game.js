import readline from 'readline-sync';
import clear from 'clear';

import Menu from './Menu.js';
import sleep from './sleep.js';
import InputControl from './InputControl.js';

function removeAllCharactersExceptNewlines(input) {
    return input.replace(/[^\n]/g, '');
}

function printStatusBar(player, enemy) {
    console.log(`Player: ${player.name} \t\t Lifes: ${player.lifes} \t\t Delivery Mode: ${player.deliveryMode} \t\t Stamina ${player.stamina}`);
    console.log(`Enemy: ${enemy.name} \t\t Lifes: ${enemy.lifes}`);
}

function printGame(player, enemy) {
    clear();
    printStatusBar(player, enemy);
    console.log(enemy.stringState());
    console.log(player.stringState());
}

async function printGameAsync(player, enemy) {
    clear();
    printStatusBar(player, enemy);
    console.log(enemy.stringState());
    console.log(player.stringState());
    await sleep(75);
}

async function printGameAsyncErased(player, enemy, strPlayer, strEnemy) {
    clear();
    printStatusBar(player, enemy);
    console.log(strEnemy);
    console.log(strPlayer);
    await sleep(75);
}

async function printDamageToPlayer(player, enemy) {
    clear();
    const erasedPlayer = removeAllCharactersExceptNewlines(player.stringState());
    for (let i = 0; i < 8; i++) {
        clear();
        if (i % 2 === 0)
            await printGameAsyncErased(player, enemy, erasedPlayer, enemy.stringState());
        else
            await printGameAsync(player, enemy);
    }
}

async function printDamageToEnemy(player, enemy) {
    clear();
    const erasedEnemy = removeAllCharactersExceptNewlines(enemy.stringState());
    for (let i = 0; i < 8; i++) {
        clear();
        if (i % 2 === 0)
            await printGameAsyncErased(player, enemy, player.stringState(), erasedEnemy);
        else
            await printGameAsync(player, enemy);
    }
}

export default async function game(player, enemies) {
    
    while (enemies.length > 0) {
        player.rest();
        let enemy = enemies.shift();
        await Menu.loadingGame();
        await Menu.instructionsToMove();
        await Menu.newEnemy(enemy);
        printGame(player, enemy);

        while (player.lifes > 0 && enemy.lifes > 0) {

            let correctRead = false;
            while (!correctRead) {
                printGame(player, enemy);
                try {
                    const char = await InputControl.captureChar();
                    correctRead = player.moveOn(char);
                    if (!correctRead) {
                        console.log('Invalid move or you are out of stamina');
                        await sleep(300);
                    }
                } catch (error) {
                    console.error("Error capturing character:", error);
                    await sleep(300);
                }
            }

            printGame(player, enemy);
            await sleep(200);

            enemy.moveOn();
            printGame(player, enemy);
            await sleep(200);

            if (enemy.state === player.state) {
                player.decreaseLife();
                player.verifyDeliveryMode(true);
                await printDamageToPlayer(player, enemy);
            } else {
                enemy.decreaseLife(player.deliveryModeOn);
                player.verifyDeliveryMode(false);
                await printDamageToEnemy(player, enemy);
            }

            printGame(player, enemy);
        }

        if (player.lifes === 0) {
            await Menu.gameOver();
            break;
        }
        
    }

    if (player.lifes > 0) 
        await Menu.winGame();
    
    readline.question('\n\nPress Enter to continue');

}


// import FactorySpaceship from './spaceship/FactorySpaceship.js';
// import FactoryGame from './FactoryGame.js';
// const player = FactorySpaceship.create('Asiel', 'center', FactorySpaceship.hard);
// const enemies = FactoryGame.easyMode();
// await game(player, enemies);