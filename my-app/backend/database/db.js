const mongoose = require('mongoose');

const Connection = async (username, password) => {
    // const URL ='mongodb+srv://Chiman:<Index>@ecommerce-web.4hrndq0.mongodb.net/?retryWrites=true&w=majority'; 
    // const URL = 'mongodb://Chiman:<Index>@ac-gxiqd9a-shard-00-00.4hrndq0.mongodb.net:27017,ac-gxiqd9a-shard-00-01.4hrndq0.mongodb.net:27017,ac-gxiqd9a-shard-00-02.4hrndq0.mongodb.net:27017/ECOMMERCE?ssl=true&replicaSet=atlas-isrpb8-shard-0&authSource=admin&retryWrites=true&w=majority';
    // const URL = `mongodb://${username}:${password}@ac-gxiqd9a-shard-00-00.4hrndq0.mongodb.net:27017,ac-gxiqd9a-shard-00-01.4hrndq0.mongodb.net:27017,ac-gxiqd9a-shard-00-02.4hrndq0.mongodb.net:27017/ECOMMERCE?ssl=true&replicaSet=atlas-isrpb8-shard-0&authSource=admin&retryWrites=true&w=majority`;
    const URL = `mongodb+srv://${username}:${password}@canteen-app.ednicx7.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true});
        console.log('Database connected succesfully!')
    } catch(error){
        console.log('Error while connecting to the database ', error.message);
    }
}

module.exports =  Connection;