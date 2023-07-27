// CommonJs, every file is module (by default)
// Modules - encapsulated code (only share minimum)
/* const names = require("./names");
const sayHi = require("./utlis");
const data = require("./alternative-flavor");
require("./mind-gernade");

sayHi("susan");
sayHi(names.jhon);
sayHi(names.peter); */

const os = require("os");

// info about current user

const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds

console.log(`The System Uptime Is ${os.uptime()} Seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
};

console.log(currentOS);
