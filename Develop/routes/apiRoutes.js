const router = require("express").Router()
const db = require("../db/db")

router.get("/notes", (req, res) => {
    db
        .getNotes()
        .then((notes) => {return res.json(notes)})
})



module.exports = router