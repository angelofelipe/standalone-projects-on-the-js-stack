import { StateLeft } from '../State.js';

export default class StateLeftSpaceship extends StateLeft {
    stringState() {
        return `                                                                                                        |
            A                                                                                           |
          / | \\                                                                                         |
         | / \\ |                                                                                        |
        / /___\\ \\                                                                                       |
       /         \\                                                                                      |
      / |==|  |==|\\                                                                                     |
     /   \\_____/   \\                                                                                    |
    /_______________\\                                                                                   |
        |_|   |_|                                                                                       |
         V     V                                                                                        |
`;
    }
}

// const state = new StateLeftSpaceship();
// console.log(state.stringState());