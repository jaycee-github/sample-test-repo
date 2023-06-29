// MODULES
// CommonJS - every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

// const names = require("./04-names.js");
const { chester, peter } = require("./04-names.js");
const sayHi = require("./04-utils.js");
const data = require("./04-alternative-module-syntax.js");

require("./04-mind-grenade.js");

// console.log(names);

// sayHi("lovely");
// sayHi(chester);
// sayHi(peter);

// console.log(data);
