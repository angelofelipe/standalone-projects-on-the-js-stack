import clear from 'clear';

export default class Loading {
    
    sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    async printPipe() {
        clear();
        console.log("|");
        await this.sleep(150);
    }

    async printSlash() {
        clear();
        console.log("/");
        await this.sleep(150);
    }

    async printDash() {
        clear();
        console.log("-");
        await this.sleep(150);
    }

    async printBackslash() {
        clear();
        console.log("\\");
        await this.sleep(150);
    }

    async loading() {
        for (let i = 0; i < 10; i++) {
            await this.printPipe();
            await this.printSlash();
            await this.printDash();
            await this.printBackslash();
        }
    }
}