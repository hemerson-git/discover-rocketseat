const getFlag = require("./challenge_1");

const name = getFlag("--name");
const greeting = getFlag("--greeting");

console.log(`Hello, ${name}. ${greeting}`);

// node challenge_2 --name "Hemerson" --greeting "How is it going?"
