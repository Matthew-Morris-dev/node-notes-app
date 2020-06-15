const fs = require('fs');

const getNotes = function()
{
    var notes = fs.readFileSync('./data/notes.txt',{encoding:'utf8'});
    console.log(1);
    console.log(notes);
    return notes
}

module.exports = getNotes;