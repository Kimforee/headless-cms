const Person = require('../models/person');

exports.createPerson = async (req, res) => {
  try {
   
    const person = await Person.create(req.body);
    res.status(201).json(person);
    console.log(person);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPersons = async (req, res) => {
  try {
    const persons = await Person.findAll();
    res.status(200).json(persons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updatePerson = async (req, res) => {
  try {
    const { id } = req.params;
    await Person.update(req.body, { where: { id } });
    res.status(200).json({ message: 'Person updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deletePerson = async (req, res) => {
  try {
    const { id } = req.params;
    await Person.destroy({ where: { id } });
    res.status(200).json({ message: 'Person deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
