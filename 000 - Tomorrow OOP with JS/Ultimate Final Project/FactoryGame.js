import FactoryFalcon from './enemies/falcon/FactoryFalcon.js';
import FactoryRobot from './enemies/robot/FactoryRobot.js';
import FactoryAlienBear from './enemies/alienBear/FactoryAlienBear.js';

export default class FactoryGame {
    static easy = 'easy';
    static medium = 'medium';
    static hard = 'hard';

    static easyMode() {
        const falcon = FactoryFalcon.create('easy');
        const robot = FactoryRobot.create('easy');
        const alienBear = FactoryAlienBear.create('easy');
        return [falcon, robot, alienBear];
    }

    static mediumMode() {
        const falcon = FactoryFalcon.create('medium');
        const robot = FactoryRobot.create('medium');
        const alienBear = FactoryAlienBear.create('medium');
        return [falcon, robot, alienBear];
    }

    static hardMode() {
        const falcon = FactoryFalcon.create('hard');
        const robot = FactoryRobot.create('hard');
        const alienBear = FactoryAlienBear.create('hard');
        return [falcon, robot, alienBear];
    }

}