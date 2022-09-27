const fs = require('fs');
const path = require('path');

function createNewNote (body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );

    // return finished code to post route for response
    return note;
};

function validateNote(note) {
    // validation if statements here
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    return true;
};

module.exports = {
    createNewNote,
    validateNote
};