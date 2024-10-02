import { StateCenter } from '../../State.js';

export default class StateCenterRobot extends StateCenter {
    stringState() {
        return `                                                                                                        |
                                                    o                                                   |
                                                 ___|___                                                |
                                                / _ U _ \\                                               |
                                               |  U U U  |                                              |
                              _A_            [[| ´  o  \` |]]            _A_                             |
                             / | \\             |  =====  |             / | \\                            |
                            /  |  \\             \\_______/             /  |  \\                           |
                           /   |   \\           A___| |___A           /   |   \\                          |
                          <----|----|=========[     |     ]=========|----|---->                         |
                           \\   |   /           \\\\___|___//           \\   |   /                          |
                            \\  |  /             [   |   ]             \\  |  /                           |
                             \\_|_/               [  |  ]               \\_|_/                            |
                               V             ___/==[U]==\\___             V                              |
                                            /               \\                                           |
                                           /=================\\                                          |
                                          /___________________\\                                         |
                                          =====================                                         | 
                                          ||||||         ||||||                                         | 
                                          ||||||         ||||||                                         | 
                                          ======         ======                                         | 
`;
    }
}

// const state = new StateCenterRobot();
// console.log(state.stringState());