import { StateCenter } from '../State.js';

export default class StateCenterSpaceship extends StateCenter {
    stringState() {
        return `                                                                                                        |
                                                    A                                                   |
                                                  / | \\                                                 |
                                                 | / \\ |                                                |
                                                / /___\\ \\                                               |
                                               /         \\                                              |
                                              / |==|  |==|\\                                             |
                                             /   \\_____/   \\                                            |
                                            /_______________\\                                           |
                                                |_|   |_|                                               |
                                                 V     V                                                |
`
    }
}

// const state = new StateCenterSpaceship();
// console.log(state.stringState());