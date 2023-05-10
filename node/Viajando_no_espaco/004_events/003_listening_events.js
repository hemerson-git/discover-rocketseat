const { EventEmitter } = require("events");

const emitter = new EventEmitter();

emitter.on("Say Something", (message) =>
  console.log("I've heard You! " + message)
);

emitter.emit("Say Something", "Hemerson");
