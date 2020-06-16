const fs = require('fs');
const chalk = require('chalk');

const getNotes = function() {
    var notes = fs.readFileSync('./data/notes.txt',{encoding:'utf8'});
    console.log(1);
    console.log(notes);
    return notes
}

const addNote = function (title, body) {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })

    if(duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.green('Note with title: ' + title + ' saved to notes.'));
    } else {
        console.log(chalk.yellow('Note with title: ' + title + ' already exists.'));
    }
}

const removeNote = function(title) {
    const notes = loadNotes();
    const notesToKeep = notes.filter(function (note) {
        return note.title !== title
    })

    if(notesToKeep.length !== notes.length)
    {
        console.log(chalk.green('Removed note with title: ' + title));
        if(notesToKeep.length > 0)
        {
            saveNotes(notesToKeep);
        } else {
            if(fs.existsSync('./volume/notes.json'))
            {
                fs.unlinkSync('./volume/notes.json')
            }
        }
    } else {
        console.log(chalk.yellow('Could not find note with title: ' + title));
    }
}

const saveNotes = function(notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('./volume/notes.json', dataJSON);
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('./volume/notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch(e) {
        return [];
    }
}

module.exports = {
    getNotes,
    addNote,
    removeNote
}