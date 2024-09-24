import readline from 'readline-sync';
import clear from 'clear';

import FactorySpaceship from './spaceship/FactorySpaceship.js';
import Menu from './Menu.js';

(() => {
    let play = true;
    while (play) {
        // Menu.defaultMenu();
        // Menu.chooseDificulty();
        clear();
        Menu.chooseMenu();
        let option = readline.question();
        switch (option) {
            case '1':
                clear();
                Menu.chooseDificulty();
                let difficulty = readline.question();
                break;
            case '2':
                instructions();
                break;
            case '3':
                play = false;
                break;
            default:
                console.log('Invalid option. Try again');
                readline.question('Press any key to continue');
                break;
        }
    }
})();

function loadingGame() {
    

}

function instructions() {
    clear();
    Menu.instructions();
    let option = readline.question('Press any key to return to the main menu');
    if (option) {
        Menu.chooseMenu();
    }
}
