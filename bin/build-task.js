#!/usr/bin/env node
const yargs = require('yargs');
const packageUtils = require('../src/utils/packageUtils');
const pkg = packageUtils.getConsumingPackage();
const build = require('../src/tasks/build');

yargs.scriptName("pirate-parser")
  .usage('$0 <cmd> [args]')
  .command('hello [name]', 'welcome to react buid task world!', (yargs) => {
    yargs.positional('name', {
      type: 'string',
      default: pkg.name,
      describe: 'the consumer to say hello to'
    })
  }, function (argv) {
    console.log('Hello', argv.name, 'welcome to react buid task world!!')
  })
  .command(build)
  .help()
  .argv
