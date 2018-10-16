const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let taskSchema = new Schema({
  name: { type: String, required: true },
  level: { type: Number, required: true }
});

module.exports = mongoose.model('Tasks', taskSchema, 'tasks');