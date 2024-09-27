// extern modules
import readline from 'readline-sync';

// my code
import FactoryGame from './FactoryGame.js';
import FactorySpaceship from './spaceship/FactorySpaceship.js';

import Menu from './Menu.js';
import game from './Game.js';

// Main Manu -> 1. Start Game
async function loadingGame() {
    let option = '';
    while (option !== '4') {
        Menu.chooseDificulty();
        option = readline.question();
        switch (option) {
            case '1': // Easy
                await easyGameMode();
                option = '4';
                break;
            case '2': // Medium
                await mediumGameMode();
                option = '4';
                break;
            case '3': // Hard
                await hardGameMode();
                option = '4';
                break;
            case '4': // Exit
                break;
        }
        
    }
    
}

// Main Menu -> 2. Instructions
function instructions() {
    Menu.instructions();
    let option = readline.question('Press "Enter" key to return to the main menu');
}

// Main Menu -> 1. Start Game -> Register User
function registerUser(difficultyGame){
    let notSuccess = true;
    let player = null;
    while (notSuccess) {
        Menu.registerName();
        const name = readline.question();
        Menu.registerInitialPosition();
        const initialPosition = readline.question();
        try {
            player = FactorySpaceship.create(name, initialPosition, difficultyGame);
            notSuccess = false;
        } catch(e) {
            console.log(e.message);
            readline.question('Press any key to try again');
        }
    }
    
    return player;
}

// Main Menu -> 1. Start Game -> 1. Easy
async function easyGameMode() {
    const player = registerUser(FactorySpaceship.easy);
    const enemies = FactoryGame.easyMode();
    await game(player, enemies);
}

// Main Menu -> 1. Start Game -> 2. Medium
async function mediumGameMode() {
    const player = registerUser(FactorySpaceship.medium);
    const enemies = FactoryGame.mediumMode();
    await game(player, enemies);
}

// Main Menu -> 1. Start Game -> 3. Hard
async function hardGameMode() {
    const player = registerUser(FactorySpaceship.hard);
    const enemies = FactoryGame.hardMode();
    await game(player, enemies);
}

// initial function
(async () => {
    let play = true;
    while (play) {
        Menu.chooseMenu();
        let option = readline.question();
        switch (option) {
            case '1': // Start Game
                await loadingGame();
                break;
            case '2': // Instructions
                instructions();
                break;
            case '3': // Exit
                play = false;
                break;
            default:
                console.log('Invalid option. Try again');
                readline.question('Press any key to continue');
                break;
        }
    }
})();
