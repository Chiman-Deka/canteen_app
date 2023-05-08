const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
    table_num: {
        type: Number, 
        requird: true
    },
    food: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'food'
    },
    qty: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('order', orderSchema);