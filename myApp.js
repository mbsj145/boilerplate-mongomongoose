require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

// Schema
const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String]
});

// Model
const Person = mongoose.model("Person", personSchema);

// CREATE and SAVE a Person
const createAndSavePerson = (done) => {
  const person = new Person({
    name: "John Doe",
    age: 30,
    favoriteFoods: ["Pizza", "Sushi"]
  });

  person.save((err, data) => {
    if (err) return done(err);
    done(null, data);
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

/** Exports */
exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.createManyPeople = createManyPeople;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
