#! /usr/bin/env node

const pkg = require('../package.json');

const bower = require('../bower.json');

const replace = require('replacestream');

const inquirer = require('inquirer');

const fs = require('fs-extra');

const confirmSetup = [{
  type: 'confirm',
  name: 'setup',
  message: 'Are any of these files package.json, README.md or bower.json opened in your editor?'
}];
const questions = [{
  type: 'list',
  name: 'component_name',
  message: 'What type of component would you like to generate',
  choices: ['ES5', 'ES6', 'Statless Component', 'ES6 Class', 'ES6 Class +'],
  filter: function(val) {
    return val.toLowerCase();
  }
}, {
  type: 'input',
  name: 'name',
  message: 'Enter the name of your component',
  default: function() {
    return 'startreact';
  }
}];

function replaceMents(key, value, file) {
  fs.createReadStream('./backups/' + file)
    .pipe(replace(key, value))
    .pipe(fs.createWriteStream('./' + file));
}


function prompter() {
  inquirer.prompt(confirmSetup, function(confirmed) {
    //  console.log(confirmed.setup);
    if (confirmed.setup) {
      // see readme console errors
      console.log('*************************************************************')
      console.log('\n Please close any of these open file(s) to continue - package.json, README.md or bower.json \n');
      console.log('*************************************************************')
      prompter();
    } else {
      inquirer.prompt(questions, function(answers) {
        // process.stdout.write(answers);
        // copyPkg('./package.json', './_package.json');
        if (answers.name) {
          process.stdout.write(answers.name + ' -- ' + answers.component_name);
          replaceMents(pkg.name, answers.name, 'package.json');
          replaceMents(bower.name, answers.name, 'bower.json');
        }
        // create a config file
        fs.writeJson('./' + answers.name + '.config.json',
        answers,
        function(err) {
          console.log(err)
        })
      });

    }

  });
}

prompter();
