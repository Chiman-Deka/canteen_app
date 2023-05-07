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
    time: {
        type: Number,
        default: (new Date()).getTime()
    }
});

module.exports = mongoose.model('food', foodSchema);