const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/best_practices_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const bestPracticeSchema = new mongoose.Schema({
  title: {
    type: String,
    // required: true,
  },
  url: {
    type: String,
    // required: true,
  },
  content: {
    type: String,
    // required: true,
  },
 
});

const BestPractice = mongoose.model('BestPractice', bestPracticeSchema);

module.exports = BestPractice;
