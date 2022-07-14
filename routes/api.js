const router = require('express').Router();
const fs = require("fs");
const filePath = "./db/db.json"


router.get('/notes', async (req, res) => {
    try {
        const db = await fs.readFileSync(filePath)
        res.status(200).json(JSON.parse(db))
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
});


router.post('/notes', async (req, res) => {
    try {
        const db = await fs.readFileSync(filePath)
        const notes = JSON.parse(db)
        notes.push(req.body)
        await fs.writeFileSync(filePath, JSON.stringify(notes))
        res.status(200).send('note added')
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
});




module.exports = router
