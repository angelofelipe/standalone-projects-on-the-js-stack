import readline from 'readline-sync';

import SuperMarket from './SuperMarket.js';
// const line = readline.question();

try {    
    const market = new SuperMarket("Maxx Total", "The best for you");
    console.log("Hello");
    market.consultProducts();
} catch(e) {
    console.log(e);
} finally {
    console.log("Byby");
}

const line = readline.question();
console.log(line);