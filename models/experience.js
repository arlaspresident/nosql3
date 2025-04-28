const mongoose = require('mongoose');

// skapa ett schema för arbetserfarenheter
const experienceSchema = new mongoose.Schema({
  companyname: {
    type: String,
    required: true
  },
  jobtitle: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  startdate: {
    type: Date,
    required: true
  },
  enddate: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

// exportera modellen
module.exports = mongoose.model('Experience', experienceSchema);
