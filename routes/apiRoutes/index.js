const router = require('express').Router();
const { createNewNote, validateNote } = require('../../lib/notes');
const db = require('../../db/db.json');

// GET method routing to /api/notes to read db.json and return saved notes as JSON
router.get('/notes', (req, res) => {
    let results = db;
    res.json(results);
});

// POST method routing to /api/notes receives new notes to save on the request body
    // add it to db.json with unique id, and return new note to the client
router.post('/notes', (req, res) => {
    console.log(db);
    req.body.id = db.length.toString();
    

    // add data validation to return 400 error
    if (!validateNote(req.body)) {
        res.status(400).send('The note is not properly formatted.');
    } else {
        // add note to json file and notes array in this function
        const note = createNewNote(req.body, db);

        res.json(note);
    }
});

module.exports = router;