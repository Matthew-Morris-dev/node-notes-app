const chalk = require('chalk');
const yargs = require('yargs');

const notes = require('./notes.js');
const { array } = require('yargs');

// Create command for adding a note.
yargs.command({
    command: 'add',
    describe: 'Add a new note.',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'            
        },
        body:{
            describe: 'Note content',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
})

// Create command for removing a note.
yargs.command({
    command: 'remove',
    describe: 'Remove a note.',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// Create command for listing notes.
yargs.command({
    command: 'list',
    describe: 'Lists all existing notes.',
    handler() {
        notes.listNotes();
    }
})

// create command for reading notes.
yargs.command({
    command: 'read',
    describe: 'Reads the content of a note.',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
})

yargs.parse()