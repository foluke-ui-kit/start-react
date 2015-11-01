#! /usr/bin/env node

const pkg = require('../package.json');

const bower = require('../bower.json');

const replace = require('replacestream');

const inquirer = require('inquirer');

const fs = require('fs-extra');

const confirmSetup = [{
  type: 'confirm',
  name: 'setup',
  message: 'Are all of the following files  --package.json, README.md or bower.json closed in your editor?'
}];
const questions = [
  {
  type: 'input',
  name: 'name',
  message: 'Enter the name of your component, this is also used in the package.json, config files etc',
  default: function() {
    return 'startreact'
  }
}, {
  type: 'input',
  name: 'displayName',
  message: 'Enter a display name or title for you project, this goes into the README, docs etc',
  default: function() {
    return 'Start React'
  }
}, {
  type: 'input',
  name: 'githubUrl',
  message: 'Enter your github url',
  default: function() {
    return 'https://github.com/foluke-ui-kit/start-react'
  }
}, {
  type: 'input',
  name: 'author',
  message: 'Authors name?',
  default: function() {
    return 'start react'
  }
}];

function prompter() {
  inquirer.prompt(confirmSetup, function(confirmed) {
    //  console.log(confirmed.setup);
    if (!confirmed.setup) {
      // see readme console errors

      console.log('\n Please close any of these open file(s) to continue - package.json, README.md or bower.json \n');

      prompter();
    } else {
      inquirer.prompt(questions, function(answers) {
        // setup package.json replacements
        fs.createReadStream('./backups/package.json')
          .pipe(replace(pkg.name, answers.name ))
          .pipe(replace(pkg.author, answers.author ))
          .pipe(replace(pkg.homepage, answers.githubUrl ))
          .pipe(replace(pkg.repository.url, answers.githubUrl +'.git' ))
          .pipe(replace(pkg.bugs.url, answers.githubUrl +'/issues' ))
          .pipe(fs.createWriteStream('./package.json'));

        // setup bower
        fs.createReadStream('./backups/bower.json')
          .pipe(replace(bower.name, answers.name ))
          .pipe(replace(bower.homepage, answers.githubUrl ))
          .pipe(fs.createWriteStream('./bower.json'));

        // TODO setup readme.md
        fs.createReadStream('./backups/README.md')
          .pipe(replace('Project Name', answers.displayName ))
          .pipe(fs.createWriteStream('./README.md'));

        // create a config file
        fs.writeJson('./' + answers.name + '.config.json',
        answers,
        function(err) {
          if (err) console.log(err)
        })
      });

    }

  });
}

prompter();
