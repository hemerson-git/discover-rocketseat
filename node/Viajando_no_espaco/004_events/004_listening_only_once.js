const { EventEmitter } = require("events");

const emitter = new EventEmitter();

emitter.once("Say Something", (message) =>
  console.log("I've heard You! " + message)
);

emitter.emit("Say Something", "Hemerson");
emitter.emit("Say Something", "Hemerson 2");
emitter.emit("Say Something", "Hemerson 3");
