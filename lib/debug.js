const clear = require('clear');
const chalk = require('chalk');

const stdout = process.stdout;

module.exports.banner = () => {
  stdout.write(chalk.blue(`

      ▒▒   ▒▒                                             ▒▒
     /▒▒  //                                             /▒▒
     /▒▒   ▒▒  ▒▒    ▒▒   ▒▒▒▒▒    ▒▒▒▒▒    ▒▒▒▒▒▒    ▒▒▒▒▒▒   ▒▒▒▒▒
     /▒▒  /▒▒ /▒▒   /▒▒  ▒▒///▒▒  ▒▒///▒▒  ▒▒////▒▒  ▒▒///▒▒  ▒▒///▒▒
     /▒▒  /▒▒ //▒▒ /▒▒  /▒▒▒▒▒▒▒ /▒▒  //  /▒▒   /▒▒ /▒▒  /▒▒ /▒▒▒▒▒▒▒
     /▒▒  /▒▒  //▒▒▒▒   /▒▒////  /▒▒   ▒▒ /▒▒   /▒▒ /▒▒  /▒▒ /▒▒////
     ▒▒▒  /▒▒   //▒▒    //▒▒▒▒▒▒ //▒▒▒▒▒  //▒▒▒▒▒▒  //▒▒▒▒▒▒ //▒▒▒▒▒▒
    ///   //     //      //////   /////    //////    //////   //////

  `));
};

module.exports.clear = clear;

module.exports.log = (message) => {
  stdout.write(chalk.blue(`${message}\n`));
};

module.exports.update = (title, message) => {
  stdout.write(chalk.gray(`${title}: ${message}\n`));
};

module.exports.complete = (title, message) => {
  stdout.write(chalk.green(`${title}: ${message}\n`));
};

module.exports.error = (message) => {
  stdout.write(chalk.red(`${message}\n`));
};
