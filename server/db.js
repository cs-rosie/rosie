const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const myURI = 'mongodb://paul:rosie@ds047802.mlab.com:47802/rosie';
const URI = process.env.MONGO_URI || myURI;

mongoose.connect(URI, (err) => {
  if (err) throw new Error('Failed to connect to the database', err);
  console.log('Successfully connected to the database');
});

const evtSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  summary: String,
  description: String,
  type: String,
  interviewer: String,
  start: { type: Date, default: Date.now },
  end: { type: Date, default: Date.now },
});

const EvtModel = mongoose.model('Event', evtSchema);

EvtModel.findOne((err, res) => {
  if (err) throw new Error('Failed to call findOne method on EvtModel', err);
  console.log('Successfully retrieved a message in database', res);
});

module.exports = EvtModel;
