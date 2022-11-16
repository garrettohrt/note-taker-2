const router = require('express').Router();
const notes = require('../../db/db');
const { createNewNote, deleteNote } = require('../../lib/notes');


router.get('/notes', (req, res) => {
    let saved = notes;
    res.json(saved);
})

router.post('/notes', async (req, res) => {
 
    var allNotes =  await createNewNote(req.body);

    res.json(allNotes);
})

router.delete('/notes/:id', async (req, res) => {
    var deleteOneNote = await deleteNote(req.body)

    res.json(deleteOneNote);
} )

module.exports = router;