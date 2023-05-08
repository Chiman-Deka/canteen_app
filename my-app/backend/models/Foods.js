const mongoose = require('mongoose');
const { Schema } = mongoose;

const foodSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'user'
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    img:{
        type: String,
        default: 'https://source.unsplash.com/random/300%C3%97300?food'
    }
});

module.exports = mongoose.model('food', foodSchema);