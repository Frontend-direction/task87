const readline = require('readline');
const calculate = require('./task87.js');

    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });
 
    rl.question('Enter first number ', (variable1) => {

       let n = parseInt(variable1);
        rl.setPrompt(`Enter second number`);
        rl.prompt();
        rl.on('line', function(variable2){
           let m = parseInt(variable2);
            rl.close();
            console.log(n,m);
            console.log(calculate(n,m));
        })
    });
    

 



