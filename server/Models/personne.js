let mongoose = require('mongoose');

let personneShema= new mongoose.Schema({
    name: String,
    age: Number,
    favoriteFoods: [String], // tableau de string
})
const PersonModel= mongoose.model("Person", personneShema);
module.exports= PersonModel; 
