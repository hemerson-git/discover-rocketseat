const { EventEmitter } = require("events");

const emitter = new EventEmitter();

emitter.emit("Say Something");
