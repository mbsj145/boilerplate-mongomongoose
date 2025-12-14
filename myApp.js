require('dotenv').config();
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

// Define the schema
const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String]
});

// Create the model
const Person = mongoose.model("Person", personSchema);

// 1️⃣ Create and Save a Person
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

// 2️⃣ Create Many People
const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, data) => {
    if (err) return done(err);
    done(null, data);
  });
};

// 3️⃣ Use model.find() to search by name
const findPeopleByName = (personName, done) => {
  Person.find({ name: personName }, (err, people) => {
    if (err) return done(err);
    done(null, people);
  });
};

// 4️⃣ Use model.findOne() to return a single matching document
const findOneByFood = (food, done) => {
  Person.findOne({ favoriteFoods: food }, (err, person) => {
    if (err) return done(err);
    done(null, person);
  });
};

// 5️⃣ Use model.findById() to search by _id
const findPersonById = (personId, done) => {
  Person.findById(personId, (err, person) => {
    if (err) return done(err);
    done(null, person);
  });
};

// 6️⃣ Find, edit, then save
const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  Person.findById(personId, (err, person) => {
    if (err) return done(err);

    person.favoriteFoods.push(foodToAdd);
    person.save((err, updatedPerson) => {
      if (err) return done(err);
      done(null, updatedPerson);
    });
  });
};

// 7️⃣ Find and update
const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  Person.findOneAndUpdate(
    { name: personName },
    { age: ageToSet },
    { new: true },
    (err, updatedPerson) => {
      if (err) return done(err);
      done(null, updatedPerson);
    }
  );
};

// 8️⃣ Remove by ID
const removeById = (personId, done) => {
  Person.findByIdAndRemove(personId, (err, removedPerson) => {
    if (err) return done(err);
    done(null, removedPerson);
  });
};

// 9️⃣ Remove many people
const removeManyPeople = (done) => {
  const nameToRemove = "Mary";
  Person.deleteMany({ name: nameToRemove }, (err, result) => {
    if (err) return done(err);
    done(null, result);
  });
};

// 10️⃣ Query chain
const queryChain = (done) => {
  const foodToSearch = "burrito";

  Person.find({ favoriteFoods: foodToSearch })
    .sort({ name: 1 })
    .limit(2)
    .select('-age')
    .exec((err, data) => {
      if (err) return done(err);
      done(null, data);
    });
};

/** **Do not edit below this line** **/
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
