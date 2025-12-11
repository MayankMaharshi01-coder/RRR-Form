const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
  title: {
   type: String,
   required: true
  },
  thumbnail: {
    type: String,
    required: true,
  },
  incharge: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  school: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'School',
    required: true,
  },
  condition:{
    type: String,
    required: true,
    enum: ['good', 'avarage', 'nice']
  },
  description: {
    type: String,
    required: true,
  }
  },  {
    timestamps: true
  });


  productSchema.index({
    title: "text",
    decription: "text",
    category: "text"
  });

module.exports = mongoose.model('Product', productSchema);