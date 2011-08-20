var EventProxy = require('./eventproxy.js').EventProxy;

var proxy = new EventProxy();

proxy.assign("ev1", "ev2", "ev3", "ev4", function () {
    console.log("assign once!");
    console.log(arguments);
});
proxy.assignAll("ev1", "ev2", "ev3", "ev4", function () {
    console.log("assign all!");
    console.log(arguments);
});

console.log("first");
proxy.emit("ev1", 1);
proxy.emit("ev2", 2);
proxy.emit("ev3", 3);
proxy.emit("ev4", 4);
console.log("second");
proxy.emit("ev4", 5);
proxy.emit("ev4", 6);
proxy.emit("ev4", 7);
proxy.emit("ev4", 8);
console.log("third");