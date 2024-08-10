const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  plans: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Plan' }],
});

module.exports = mongoose.model('Group', groupSchema);
