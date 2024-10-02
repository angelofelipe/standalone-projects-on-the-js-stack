import { StateRight } from '../State.js';

export default class StateRightSpaceship extends StateRight {
    stringState() {
        return `                                                                                                        |
                                                                                           A            |
                                                                                         / | \\          |
                                                                                        | / \\ |         |
                                                                                       / /___\\ \\        |
                                                                                      /         \\       |
                                                                                     / |==|  |==|\\      |
                                                                                    /   \\_____/   \\     |
                                                                                   /_______________\\    |
                                                                                       |_|   |_|        |
                                                                                        V     V         |
`;
    }
}

// const state = new StateRightSpaceship();
// console.log(state.stringState());