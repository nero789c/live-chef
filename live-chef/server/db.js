const mongoose = require('mongoose');


const intialDbConnection = async () => {
    try {
        await mongoose.connect("Removed.. not Database not working anymore.", {})
        console.log("db connected")

    } catch (error) {
        console.error(error);
    }
}

intialDbConnection()
    .then(() => console.log('connected'));

module.exports = intialDbConnection;
