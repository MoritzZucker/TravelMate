const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
  groupId: { type: mongoose.Schema.Types.ObjectId, ref: 'Group' },
  proposedDates: [{ startDate: Date, endDate: Date }],
  proposedLocations: [String],
  proposedBudgets: [Number],
  votes: {
    dates: [{ userId: mongoose.Schema.Types.ObjectId, date: { startDate: Date, endDate: Date } }],
    locations: [{ userId: mongoose.Schema.Types.ObjectId, location: String }],
    budgets: [{ userId: mongoose.Schema.Types.ObjectId, budget: Number }],
  },
});

module.exports = mongoose.model('Plan', planSchema);
