const fs = require("fs");
const path = require("path");
const notes = require('../db/db');
const uuid = require('uuid')

function createNewNote(newNote) {
    console.log(newNote);
    console.log(notes);
    newNote.id = uuid.v1();
    notes.push(newNote);
    fs.writeFileSync("./db/db.json", JSON.stringify(notes), (err) => {
        if (err) {
            console.log(err);
        }
    })
return notes;
};

function deleteNote(newNote) {
    console.log(newNote);
    console.log(notes);
    
    notes.push(newNote);
    fs.writeFileSync("./db/db.json", JSON.stringify(notes), (err) => {
        if (err) {
            console.log(err);
        }
    })
return notes;
};

module.exports = {createNewNote, deleteNote}