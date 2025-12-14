require('dotenv').config();
const mongoose = require('mongoose');

// Define the schema
const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String]
});

// Create the model
const Person = mongoose.model("Person", personSchema);

// Create and Save a Person
const createAndSavePerson = (done) => {
  // 1️⃣ Create a new person instance
  const person = new Person({
    name: "John Doe",               // must be a string
    age: 30,                        // must be a number
    favoriteFoods: ["Pizza", "Sushi"] // must be an array of strings
  });

  // 2️⃣ Save the document to the database
  person.save((err, data) => {
    if (err) return done(err); // Node convention: handle error
    done(null, data);          // Node convention: pass saved document
  });
};

// Placeholder functions for other challenges
const createManyPeople = (arrayOfPeople, done) => { done(null); };
const findPeopleByName = (personName, done) => { done(null); };
const findOneByFood = (food, done) => { done(null); };
const findPersonById = (personId, done) => { done(null); };
const findEditThenSave = (personId, done) => { done(null); };
const findAndUpdate = (personName, done) => { done(null); };
const removeById = (personId, done) => { done(null); };
const removeManyPeople = (done) => { done(null); };
const queryChain = (done) => { done(null); };

/** **Do not edit below this line** **/
exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
