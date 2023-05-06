const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://canteen_aec:Canteen22@cluster0.nthtiak.mongodb.net/aec_canteen?retryWrites=true&w=majority";


const mongoDB = async() => {
    try {
        await mongoose.connect(mongoURI);
        console.log('Connected to MongoDB successfully!');

        const collection = mongoose.connection.db.collection('food_items');

        // Check if the collection exists
        const count = await collection.countDocuments();
        if (count === 0) {
            console.log('No documents found in collection');
            return;
        }

        // Query the collection and log the results
        const data = await collection.find({}).toArray();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

module.exports = mongoDB;