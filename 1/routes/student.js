const express = require('express')
const router = express.Router()
const StudentModel = require('../models/StudentModel');

//render URL: localhost:3000/student
router.get("/", (req, res) => {
    StudentModel.find((err, data) => {
        if (!err) {
          //res.send(data)
          //render ra trang index ở thư mục views/student
          res.render('student/index', {students: data})
        }
      })
})
//URL: localhost:3000/student/student
// router.get("/student", (req, res) => {
//     var text = "<h1>123455</h1>"
//     res.send(text)
// })

module.exports = router