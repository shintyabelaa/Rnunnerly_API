const express = require('express')
const path = require('path')
const app = express()

const port = 4567

const level = [
    {name: "BEGINEER", image:"https://firebasestorage.googleapis.com/v0/b/runnerly-a9fdd.appspot.com/o/begineer_pict.png?alt=media&token=ce425b1a-6145-4e0d-8b18-ac894ba2da9d", energized: "https://firebasestorage.googleapis.com/v0/b/runnerly-a9fdd.appspot.com/o/energize_begineer.png?alt=media&token=bb2d3dcf-8173-4618-b53c-cc599fc94907" },
    {name: "INTERMEDIATE", image:"https://firebasestorage.googleapis.com/v0/b/runnerly-a9fdd.appspot.com/o/Intermediete_pict.png?alt=media&token=0bdf0b01-c6fd-4df9-8ac0-ff8f170d8b4d", energized: "https://firebasestorage.googleapis.com/v0/b/runnerly-a9fdd.appspot.com/o/energize_inter.png?alt=media&token=221066ad-698f-4938-821d-f75f1e9c2043"},
    {name: "ADVANCE", image:"https://firebasestorage.googleapis.com/v0/b/runnerly-a9fdd.appspot.com/o/advance_pict.png?alt=media&token=eec3a28e-19f6-4de0-8277-aacb8fe1fb5f", energized: "https://firebasestorage.googleapis.com/v0/b/runnerly-a9fdd.appspot.com/o/energize_advance.png?alt=media&token=c5840143-5ec8-4795-ab1f-f7bf34520108"},
]

app.use(express.json());
app.use(express.urlencoded({ extended: true}))

app.get("/", (req, res) => {
    res.json(level)
})

app.get("/level/:id", (req, res) =>{
    res.json(level[parseInt(req.params.id) -1])
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})