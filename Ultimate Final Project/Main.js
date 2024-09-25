import readline from 'readline-sync';
import clear from 'clear';

import FactorySpaceship from './spaceship/FactorySpaceship.js';
import Menu from './Menu.js';

(() => {
    let play = true;
    while (play) {
        clear();
        Menu.chooseMenu();
        let option = readline.question();
        switch (option) {
            case '1': // Start Game
                loadingGame();
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

// Main Manu -> 1. Start Game
function loadingGame() {
    let option = '';
    while (option !== '4') {
        option = readline.question();
        switch (option) {
            case '1': // Easy

                break;
            case '2': // Medium
                // to implement
                break;
            case '3': // Hard
                // to implement
                break;
            case '4': // Exit
                option = '4'
                break;
        }
        
    }
    
    Menu.chooseDificulty();
    let difficulty = readline.question();
}


// Main Menu -> 2. Instructions
function instructions() {
    clear();
    Menu.instructions();
    let option = readline.question('Press any key to return to the main menu');
    // if (option) {
    //     Menu.chooseMenu();
    // }
}

// Main Menu -> 1. Start Game -> Register User
function registerUser(difficultyGame){
    let notSuccess = true;
    while (notSuccess) {
        clear();
        Menu.defaultMenu();
        const name = readline.question();
        try {
            
        } catch{

        }
    }
    
    // const player
    return 
}


// Main Menu -> 1. Start Game -> 1. Easy


// Main Menu -> 1. Start Game -> 2. Medium

// Main Menu -> 1. Start Game -> 3. Hard

// Main Menu -> 1. Start Game -> 4. Exit