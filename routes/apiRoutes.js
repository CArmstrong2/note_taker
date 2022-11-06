const router = require("express").Router()
const db = require("../db/dbScript")

router.get("/notes", (req, res) => {
    db
        .getNotes()
        .then((notes) => {return res.json(notes)})
})

router.post("/notes", (req, res) => {
    db
        .addNote(req.body)
        .then((newNote) => res.json(newNote))
})

module.exports = router