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
  name: 'display_name',
  message: 'Enter a display name or title for you project, this goes into the README, docs etc',
  default: function() {
    return 'Start React'
  }
}, {
  type: 'input',
  name: 'github_url',
  message: 'Enter your github url',
  default: function() {
    return ''
  }
}, {
  type: 'input',
  name: 'author',
  message: 'Enter your github url',
  default: function() {
    return ''
  }
}, {
  type: 'input',
  name: 'email',
  message: 'Project / author email address',
  default: function() {
    return ''
  }
}];

function replaceMents(key, value, file) {
  fs.createReadStream(file)
    .pipe(replace(key, value))
    .pipe(fs.createWriteStream('./' + file));
}


function prompter() {
  inquirer.prompt(confirmSetup, function(confirmed) {
    //  console.log(confirmed.setup);
    if (confirmed.setup) {
      // see readme console errors
      console.log('*************************************************************');
      console.log('\n Please close any of these open file(s) to continue - package.json, README.md or bower.json \n');
      console.log('*************************************************************');
      prompter();
    } else {
      inquirer.prompt(questions, function(answers) {
        // process.stdout.write(answers);
        // copyPkg('./package.json', './_package.json');
        if (answers.name) {
          //process.stdout.write(answers.name + ' -- ' + answers.component_name);
          replaceMents(pkg.name, answers.name, './backups/package.json');
          replaceMents(bower.name, answers.name, './backups/bower.json');
        }
        if (answers.display_name) {
          //replaceMents
          replaceMents('Project Name', answers.display_name, './samples/README.md');
        }
        if (answers.author) {
          //replaceMents
          replaceMents(pkg.author, answers.author, './backups/package.json');
          replaceMents(bower.author, answers.author, './backups/bower.json');
        }
        if (answers.email) {
          //replaceMents
          replaceMents(pkg.email, answers.email, './backups/package.json');
          replaceMents(bower.email, answers.email, './backups/bower.json');
        }
        if (answers.github_url) {
          //replaceMents
          replaceMents(pkg.github_url, answers.github_url, './backups/package.json');
          replaceMents(bower.github_url, answers.github_url, './backups/bower.json');
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
