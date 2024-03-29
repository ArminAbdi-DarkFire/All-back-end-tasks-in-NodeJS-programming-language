const events = require("events");

const emitter = new events();

emitter.once("Hello", (message) => {
  console.log("\n");
  console.log(message);
});

emitter.emit("Hello", " Hello World");
