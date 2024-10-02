import Loading from "./Loading.js";
import clear from 'clear';

async function main() {
    let loading = new Loading();

    console.log("Loading...");
    await loading.sleep(1000);
    
    await loading.loading();

    clear();
    console.log("Done!");
}

main();
