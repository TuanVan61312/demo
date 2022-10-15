const mongoose = require("mongoose")
const schema = mongoose.schema
const model = mongoose.model

var studentSchema = new schema({
    name: String,
    email: String,
    gender: String,
    image: String,
    dob: Date,
    year: Number,
    grade: Number
},
{
    versionkey: false
}
)

var StudentModel = mongoose.model('student', studentSchema, 'student')
module.exports = StudentModel