#!/usr/bin/env node

var path = require('path');
var consumingPackagePath = path.join(process.cwd(), 'package.json'); 
var package = require(consumingPackagePath);


require('yargs')
  .scriptName("pirate-parser")
  .usage('$0 <cmd> [args]')
  .command('hello [name]', 'welcome to react buid task world!', (yargs) => {
    yargs.positional('name', {
      type: 'string',
      default: package.name,
      describe: 'the consumer to say hello to'
    })
  }, function (argv) {
    console.log('hello', argv.name, 'welcome to yargs!')
  })
  .help()
  .argv
