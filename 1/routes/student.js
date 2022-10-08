const express = require('express')
const router = express.Router()

//render URL: localhost:3000/student
router.get("/", (req, res) => {
    res.send('test')
})
//URL: localhost:3000/student/student
router.get("/student", (req, res) => {
    var text = "<h1>123455</h1>"
    res.send(text)
})

module.exports = router