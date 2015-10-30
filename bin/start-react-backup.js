// const inquirer = require('inquirer');

const fs = require('fs-extra');

function backup(file, destination) {
  fs.copy(file, destination, function(err) {
    if (err) return console.error(err);
  });
  console.log('backup' + file + ' completed');
}

backup('./package.json', './backups/_package.json');
