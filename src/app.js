const chalk = require('chalk');
const yargs = require('yargs');

// Create command for adding a note.
yargs.command({
    command: 'add',
    describe: 'Add a new note.',
    handler: function() {
        console.log(chalk.blue('Adding a new note!'));
    }
})

// Create command for removing a note.
yargs.command({
    command: 'remove',
    describe: 'Remove a note.',
    handler: function() {
        console.log(chalk.blue('Removing a note!'));
    }
})

// Create command for listing notes.
yargs.command({
    command: 'list',
    describe: 'Lists all existing notes.',
    handler: function () {
        console.log(chalk.blue('Displaying a list of all existing notes.'));
    }
})

// create command for reading notes.
yargs.command({
    command: 'read',
    describe: 'Reads the content of a note.',
    handler: function () {
        console.log(chalk.blue('Displaying the content of a note.'));
    }
})

console.log(yargs.argv);