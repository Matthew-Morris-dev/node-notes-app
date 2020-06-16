const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);

    if(!duplicateNote) {
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

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title)

    if(notesToKeep.length !== notes.length)
    {
        console.log(chalk.green('Removed note with title: ' + title));
        if(notesToKeep.length > 0)
        {
            saveNotes(notesToKeep);
        } else {
            if(fs.existsSync('./data/notes.json'))
            {
                fs.unlinkSync('./data/notes.json')
            }
        }
    } else {
        console.log(chalk.yellow('Could not find note with title: ' + title));
    }
}

const listNotes = () => {
    const notes = loadNotes();
    if(notes.length > 0) {
        console.log(chalk.blue('Your notes: '));
        notes.forEach(note => {
            console.log(note.title);
        });
    } else {
        console.log(chalk.red('You do not have any notes.'));
    }
}

const readNote = (title) => {
    const notes = loadNotes();

    const note = notes.find((note) => note.title === title);
    if(note)
    {
        console.log(chalk.blue(note.title) + ':');
        console.log(chalk.blueBright(note.body));
    }
    else
    {
        console.log(chalk.red('No note was found with title: ' + title));
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('./data/notes.json', dataJSON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('./data/notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch(e) {
        return [];
    }
}

module.exports = {
    addNote,
    removeNote,
    listNotes,
    readNote
}