const mongoose = require("mongoose");

const PersonModel = new mongoose.Schema({
	firstName: mongoose.Schema.Types.String,
	lastName: mongoose.Schema.Types.String
});

const Person = mongoose.model("person", PersonModel);

module.exports = Person;
