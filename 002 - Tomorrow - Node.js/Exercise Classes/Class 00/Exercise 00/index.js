import readline from 'readline-sync'

const NONLETTERS = /[^a-zA-Z]+/;
// const NONLETTERSsadf = /^[0-9]$/;

function readName(){
    while (true)
    {
        try {
            let name = readline.question("What is your name?\t");
            if ( name.length > 10 ) { throw new Error("The name must be only 10 characters long") };

            if ( name.length == 0 ) { throw new Error("The name must not be empty") };
            
            if ( NONLETTERS.test(name) ) { throw new Error("The name must contain only space and letters") };
            
            return name;
        }
        catch (error) {
            console.error(error.message);
        }
    }
}

(() => {
    let user = {};

    user.name = readName();

    console.log(user);

})();
