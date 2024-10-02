import { StateLeft } from '../../State.js';

export default class StateLeftRobot extends StateLeft {
    stringState() {
        return `                                                                                                        |
                              o                                                                         |
                           ___|___                                                                      |
                          / _ U _ \\                                                                     |
                         |  U U U  |                                                                    |
        _A_            [[| ´  o  \` |]]            _A_                                                   |
       / | \\             |  =====  |             / | \\                                                  |
      /  |  \\             \\_______/             /  |  \\                                                 |
     /   |   \\           A___| |___A           /   |   \\                                                |
    <----|----|=========[     |     ]=========|----|---->                                               |
     \\   |   /           \\\\___|___//           \\   |   /                                                |
      \\  |  /             [   |   ]             \\  |  /                                                 |
       \\_|_/               [  |  ]               \\_|_/                                                  |
         V             ___/==[U]==\\___             V                                                    |
                      /               \\                                                                 |
                     /=================\\                                                                |
                    /___________________\\                                                               |
                    =====================                                                               | 
                    ||||||         ||||||                                                               | 
                    ||||||         ||||||                                                               | 
                    ======         ======                                                               | 
`;
    }
}

// const state = new StateLeftRobot();
// console.log(state.stringState());