const cleverbot = require("cleverbot-free");

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function rl_promise() {
    return new Promise(resolve => {
        rl.question('user: ', (answer) => {
            resolve(cleverbot(answer).then(response => {console.log("bot: "+response)}))
        })
    })
}

async function init() {
    while (true) {
        await rl_promise()
    }
}

init()


