const mongoose = require("mongoose")
const schema = mongoose.schema

var StudentSchema = new schema({
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