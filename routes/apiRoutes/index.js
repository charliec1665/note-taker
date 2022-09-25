const router = require('express').Router();
// const { createNewNote, validateNote } = require('../../lib/notes');
const { db } = require('../../db/db.json');

// GET method routing to /api/notes to read db.json and return saved notes as JSON
router.get('/api/notes', (req, res) => {
    let results = db;
    res.json(results);
});

// POST method routing to /api/notes receives new notes to save on the request body
    // add it to db.json with unique id, and return new note to the client
router.post('/api/notes', (req, res) => {
    req.body.id = db.length.toString();

    // add data validation to return 400 error
});

module.exports = router;