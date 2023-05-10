const { inherits } = require("util");
const { EventEmitter } = require("events");

function Char(name) {
  this.name = name;
}

inherits(Char, EventEmitter);

const chapolin = new Char("Chapolin");

chapolin.on("help", () => console.log(`Eu! o ${chapolin.name} colorado!`));

console.log("Oh! E agora, quem poderá me defender?");
chapolin.emit("help");
