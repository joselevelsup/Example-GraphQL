const Person = require("../models/person");

const resolver = {
	Query: {
		findAllPeople: async () => {
			const people = await Person.find().exec();
			return people;
		},
		findOnePerson: async (_, args) => {
			const person = await Person.findOne({ "_id": args.id }).exec();
			return person;
		}
	},
	Mutation: {
		makeNewPerson: async (_, args) => {
			const newPerson = await new Person({
				firstName: args.firstName,
				lastName: args.lastName
			}).save();

			return newPerson;
		}
	}
}

module.exports = resolver;
